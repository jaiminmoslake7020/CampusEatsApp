"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_object_1 = require("@ionic/utils-object");
const lodash = require("lodash");
const errors_1 = require("../errors");
const string_1 = require("../utils/string");
const validators_1 = require("./validators");
class BaseCommand {
    constructor(namespace) {
        this.namespace = namespace;
    }
    async validate(argv) {
        const metadata = await this.getMetadata();
        if (!metadata.inputs) {
            return;
        }
        const errors = [];
        for (const i in metadata.inputs) {
            const input = metadata.inputs[i];
            if (input.validators && input.validators.length > 0) {
                try {
                    validators_1.validate(argv[i], input.name, [...input.validators]);
                }
                catch (e) {
                    if (!(e instanceof errors_1.InputValidationError)) {
                        throw e;
                    }
                    errors.push(e.errors);
                }
            }
        }
        if (errors.length > 0) {
            throw new errors_1.InputValidationError('Invalid inputs.', lodash.flatten(errors));
        }
    }
}
exports.BaseCommand = BaseCommand;
exports.CommandMapDefault = Symbol('default');
class BaseCommandMap extends utils_object_1.AliasedMap {
}
exports.BaseCommandMap = BaseCommandMap;
class BaseNamespaceMap extends utils_object_1.AliasedMap {
}
exports.BaseNamespaceMap = BaseNamespaceMap;
class BaseNamespace {
    constructor(parent) {
        this.parent = parent;
    }
    get root() {
        let n = this;
        while (n.parent) {
            n = n.parent;
        }
        return n;
    }
    // TODO: https://github.com/Microsoft/TypeScript/issues/9659
    async getNamespaces() {
        return new BaseNamespaceMap();
    }
    // TODO: https://github.com/Microsoft/TypeScript/issues/9659
    async getCommands() {
        return new BaseCommandMap();
    }
    /**
     * Locate commands and namespaces given a set of inputs.
     *
     * Recursively walk down the tree of namespaces available within this
     * namespace to find the command that we will execute or the right-most
     * namespace matched if the command is not found.
     *
     * The resolved object looks like this:
     *
     *    {
     *      obj: command or namespace,
     *      args: the leftover arguments,
     *      path: the path taken to get to the result which comprises tuples of <arg, command or namespace>
     *    }
     *
     * @param argv The set of command-line arguments to use to locate.
     */
    async locate(argv, { useAliases = true } = {}) {
        const _locate = async (inputs, parent, path) => {
            const [key] = inputs;
            const children = await parent.getNamespaces();
            const nsgetter = useAliases ? children.resolveAlias(key) : children.get(key);
            if (!nsgetter || typeof nsgetter === 'string' || typeof nsgetter === 'symbol') {
                const commands = await parent.getCommands();
                const cmdgetter = useAliases ? commands.resolveAlias(key) : commands.get(key);
                if (cmdgetter && typeof cmdgetter !== 'string' && typeof cmdgetter !== 'symbol') {
                    const cmd = await cmdgetter();
                    return { args: inputs.slice(1), obj: cmd, path: [...path, [key, cmd]] };
                }
                const defaultcmdgetter = commands.get(exports.CommandMapDefault);
                if (defaultcmdgetter && typeof defaultcmdgetter !== 'string' && typeof defaultcmdgetter !== 'symbol') {
                    const cmd = await defaultcmdgetter();
                    if (path.length > 0) {
                        // The default command was found via the namespace, so we replace the
                        // previous path entry (the namespace which contains this default
                        // command) with the command itself.
                        path[path.length - 1][1] = cmd;
                    }
                    return { args: inputs, obj: cmd, path };
                }
                return { args: inputs, obj: parent, path };
            }
            const child = await nsgetter();
            return _locate(inputs.slice(1), child, [...path, [key, child]]);
        };
        const metadata = await this.getMetadata();
        // TODO: typescript complains about `this`. Calling this method on
        // BaseNamespace would be unsafe if the class weren't abstract. Typescript
        // bug? I may be wrong.
        return _locate(argv, this, [[metadata.name, this]]);
    }
    /**
     * Get all command metadata in a flat structure.
     */
    async getCommandMetadataList() {
        const _getCommandMetadataList = async (parent, path) => {
            const commandsInNamespace = await parent.getCommands();
            const commandAliasesInNamespace = commandsInNamespace.getAliases();
            const commandList = [];
            // Gather all commands for a namespace and turn them into simple key value
            // objects. Also keep a record of the namespace path.
            await Promise.all([...commandsInNamespace.entries()].map(async ([k, cmdgetter]) => {
                if (typeof cmdgetter === 'string' || typeof cmdgetter === 'symbol') {
                    return;
                }
                const command = await cmdgetter();
                const commandAliases = (commandAliasesInNamespace.get(k) || []).filter((a) => typeof a === 'string').map(a => [...path.map(([p]) => p), a].join(' '));
                const commandMetadata = await command.getMetadata();
                const commandPath = [...path];
                if (typeof k === 'string') {
                    commandPath.push([k, command]);
                }
                // TODO: can't use spread: https://github.com/Microsoft/TypeScript/pull/13288
                const result = lodash.assign({}, commandMetadata, { command, namespace: parent, aliases: commandAliases, path: commandPath });
                commandList.push(result);
            }));
            commandList.sort((a, b) => string_1.strcmp(a.name, b.name));
            const children = await parent.getNamespaces();
            const namespacedCommandList = [];
            // If this namespace has children then get their commands
            if (children.size > 0) {
                await Promise.all([...children.entries()].map(async ([k, nsgetter]) => {
                    if (typeof nsgetter === 'string' || typeof nsgetter === 'symbol') {
                        return;
                    }
                    const ns = await nsgetter();
                    const commandPath = [...path];
                    if (typeof k === 'string') {
                        commandPath.push([k, ns]);
                    }
                    const cmds = await _getCommandMetadataList(ns, commandPath);
                    namespacedCommandList.push(...cmds);
                }));
            }
            return [...commandList, ...namespacedCommandList];
        };
        const metadata = await this.getMetadata();
        // TODO: typescript complains about `this`. Calling this method on
        // BaseNamespace would be unsafe if the class weren't abstract. Typescript
        // bug? I may be wrong.
        return _getCommandMetadataList(this, [[metadata.name, this]]);
    }
    async groupCommandsByNamespace(commands) {
        const summaries = new Map();
        const grouped = new Map();
        await Promise.all(commands.map(async (cmd) => {
            const nsmeta = await cmd.namespace.getMetadata();
            const aliases = [];
            if (cmd.namespace.parent) {
                const siblings = await cmd.namespace.parent.getNamespaces();
                aliases.push(...(siblings.getAliases().get(nsmeta.name) || []).filter((a) => typeof a === 'string'));
            }
            summaries.set(nsmeta.name, nsmeta.summary);
            let entry = grouped.get(nsmeta.name);
            if (!entry) {
                entry = {
                    namespace: cmd.namespace,
                    commands: [],
                    aliases,
                    ...nsmeta,
                    description: nsmeta.description ? nsmeta.description : '',
                    footnotes: nsmeta.footnotes ? nsmeta.footnotes : [],
                    groups: nsmeta.groups ? nsmeta.groups : [],
                };
                grouped.set(nsmeta.name, entry);
            }
            entry.commands.push(cmd);
        }));
        return [...grouped.values()];
    }
}
exports.BaseNamespace = BaseNamespace;
class Command extends BaseCommand {
}
exports.Command = Command;
class Namespace extends BaseNamespace {
}
exports.Namespace = Namespace;
class CommandMap extends BaseCommandMap {
}
exports.CommandMap = CommandMap;
class NamespaceMap extends BaseNamespaceMap {
}
exports.NamespaceMap = NamespaceMap;
/**
 * Given a command object, backtrack through the command's namespace to compile
 * a list of command path items which represents how the command was
 * found/constructed.
 */
async function generateCommandPath(cmd) {
    const ns = cmd.namespace;
    const cmdmeta = await cmd.getMetadata();
    const _cmdpath = async (namespace) => {
        const nsmeta = await namespace.getMetadata();
        const nspath = [nsmeta.name, namespace];
        if (!namespace.parent) {
            return [nspath];
        }
        return [...(await _cmdpath(namespace.parent)), nspath];
    };
    return [...(await _cmdpath(ns)), [cmdmeta.name, cmd]];
}
exports.generateCommandPath = generateCommandPath;