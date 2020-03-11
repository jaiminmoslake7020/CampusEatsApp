import { getMode, setMode } from "@stencil/core";
import { isPlatform, setupPlatforms } from '../utils/platform';
import { config, configFromSession, configFromURL, saveConfig } from './config';
let defaultMode;
export const getIonMode = (ref) => {
    return (ref && getMode(ref)) || defaultMode;
};
export default () => {
    const doc = document;
    const win = window;
    Context.config = config;
    const Ionic = win.Ionic = win.Ionic || {};
    // Setup platforms
    setupPlatforms(win);
    // create the Ionic.config from raw config object (if it exists)
    // and convert Ionic.config into a ConfigApi that has a get() fn
    const configObj = Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), { persistConfig: false }), Ionic.config), configFromURL(win));
    config.reset(configObj);
    if (config.getBoolean('persistConfig')) {
        saveConfig(win, configObj);
    }
    // first see if the mode was set as an attribute on <html>
    // which could have been set by the user, or by pre-rendering
    // otherwise get the mode via config settings, and fallback to md
    Ionic.config = config;
    Ionic.mode = defaultMode = config.get('mode', (doc.documentElement.getAttribute('mode')) || (isPlatform(win, 'ios') ? 'ios' : 'md'));
    config.set('mode', defaultMode);
    doc.documentElement.setAttribute('mode', defaultMode);
    doc.documentElement.classList.add(defaultMode);
    if (config.getBoolean('_testing')) {
        config.set('animated', false);
    }
    setMode((elm) => {
        while (elm) {
            const elmMode = elm.mode || elm.getAttribute('mode');
            if (elmMode) {
                return elmMode;
            }
            elm = elm.parentElement;
        }
        return defaultMode;
    });
};
