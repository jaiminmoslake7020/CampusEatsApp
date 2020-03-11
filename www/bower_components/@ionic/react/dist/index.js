'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const React = require('react');
const React__default = _interopDefault(React);
const loader = require('@ionic/core/loader');
const ionicons = require('ionicons');
const icons = require('ionicons/icons');
const core = require('@ionic/core');
const tslib = require('tslib');
const ReactDom = _interopDefault(require('react-dom'));

const IonLifeCycleContext = /*@__PURE__*/ React__default.createContext({
    onIonViewWillEnter: () => { return; },
    ionViewWillEnter: () => { return; },
    onIonViewDidEnter: () => { return; },
    ionViewDidEnter: () => { return; },
    onIonViewWillLeave: () => { return; },
    ionViewWillLeave: () => { return; },
    onIonViewDidLeave: () => { return; },
    ionViewDidLeave: () => { return; },
});
const DefaultIonLifeCycleContext = class {
    constructor() {
        this.ionViewWillEnterCallbacks = [];
        this.ionViewDidEnterCallbacks = [];
        this.ionViewWillLeaveCallbacks = [];
        this.ionViewDidLeaveCallbacks = [];
    }
    onIonViewWillEnter(callback) {
        if (callback.id) {
            const index = this.ionViewWillEnterCallbacks.findIndex(x => x.id === callback.id);
            if (index > -1) {
                this.ionViewWillEnterCallbacks[index] = callback;
            }
            else {
                this.ionViewWillEnterCallbacks.push(callback);
            }
        }
        else {
            this.ionViewWillEnterCallbacks.push(callback);
        }
    }
    ionViewWillEnter() {
        this.ionViewWillEnterCallbacks.forEach(cb => cb());
    }
    onIonViewDidEnter(callback) {
        if (callback.id) {
            const index = this.ionViewDidEnterCallbacks.findIndex(x => x.id === callback.id);
            if (index > -1) {
                this.ionViewDidEnterCallbacks[index] = callback;
            }
            else {
                this.ionViewDidEnterCallbacks.push(callback);
            }
        }
        else {
            this.ionViewDidEnterCallbacks.push(callback);
        }
    }
    ionViewDidEnter() {
        this.ionViewDidEnterCallbacks.forEach(cb => cb());
    }
    onIonViewWillLeave(callback) {
        if (callback.id) {
            const index = this.ionViewWillLeaveCallbacks.findIndex(x => x.id === callback.id);
            if (index > -1) {
                this.ionViewWillLeaveCallbacks[index] = callback;
            }
            else {
                this.ionViewWillLeaveCallbacks.push(callback);
            }
        }
        else {
            this.ionViewWillLeaveCallbacks.push(callback);
        }
    }
    ionViewWillLeave() {
        this.ionViewWillLeaveCallbacks.forEach(cb => cb());
    }
    onIonViewDidLeave(callback) {
        if (callback.id) {
            const index = this.ionViewDidLeaveCallbacks.findIndex(x => x.id === callback.id);
            if (index > -1) {
                this.ionViewDidLeaveCallbacks[index] = callback;
            }
            else {
                this.ionViewDidLeaveCallbacks.push(callback);
            }
        }
        else {
            this.ionViewDidLeaveCallbacks.push(callback);
        }
    }
    ionViewDidLeave() {
        this.ionViewDidLeaveCallbacks.forEach(cb => cb());
        this.componentCanBeDestroyed();
    }
    onComponentCanBeDestroyed(callback) {
        this.componentCanBeDestroyedCallback = callback;
    }
    componentCanBeDestroyed() {
        if (this.componentCanBeDestroyedCallback) {
            this.componentCanBeDestroyedCallback();
        }
    }
};

const withIonLifeCycle = (WrappedComponent) => {
    return class IonLifeCycle extends React__default.Component {
        constructor(props) {
            super(props);
            this.componentRef = React__default.createRef();
        }
        componentDidMount() {
            const element = this.componentRef.current;
            this.context.onIonViewWillEnter(() => {
                if (element && element.ionViewWillEnter) {
                    element.ionViewWillEnter();
                }
            });
            this.context.onIonViewDidEnter(() => {
                if (element && element.ionViewDidEnter) {
                    element.ionViewDidEnter();
                }
            });
            this.context.onIonViewWillLeave(() => {
                if (element && element.ionViewWillLeave) {
                    element.ionViewWillLeave();
                }
            });
            this.context.onIonViewDidLeave(() => {
                if (element && element.ionViewDidLeave) {
                    element.ionViewDidLeave();
                }
            });
        }
        render() {
            return (React__default.createElement(IonLifeCycleContext.Consumer, null, context => {
                this.context = context;
                return (React__default.createElement(WrappedComponent, Object.assign({ ref: this.componentRef }, this.props)));
            }));
        }
    };
};

const useIonViewWillEnter = (callback, deps = []) => {
    const context = React.useContext(IonLifeCycleContext);
    const id = React.useRef();
    id.current = id.current || Math.floor(Math.random() * 1000000);
    React.useEffect(() => {
        callback.id = id.current;
        context.onIonViewWillEnter(callback);
    }, deps);
};
const useIonViewDidEnter = (callback, deps = []) => {
    const context = React.useContext(IonLifeCycleContext);
    const id = React.useRef();
    id.current = id.current || Math.floor(Math.random() * 1000000);
    React.useEffect(() => {
        callback.id = id.current;
        context.onIonViewDidEnter(callback);
    }, deps);
};
const useIonViewWillLeave = (callback, deps = []) => {
    const context = React.useContext(IonLifeCycleContext);
    const id = React.useRef();
    id.current = id.current || Math.floor(Math.random() * 1000000);
    React.useEffect(() => {
        callback.id = id.current;
        context.onIonViewWillLeave(callback);
    }, deps);
};
const useIonViewDidLeave = (callback, deps = []) => {
    const context = React.useContext(IonLifeCycleContext);
    const id = React.useRef();
    id.current = id.current || Math.floor(Math.random() * 1000000);
    React.useEffect(() => {
        callback.id = id.current;
        context.onIonViewDidLeave(callback);
    }, deps);
};

const NavContext = /*@__PURE__*/ React__default.createContext({
    getPageManager: () => undefined,
    getStackManager: () => undefined,
    goBack: (defaultHref) => {
        if (defaultHref !== undefined) {
            window.location.pathname = defaultHref;
        }
        else {
            window.history.back();
        }
    },
    navigate: (path) => { window.location.pathname = path; },
    hasIonicRouter: () => false,
    registerIonPage: () => undefined,
    currentPath: undefined
});

const dashToPascalCase = (str) => str.toLowerCase().split('-').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join('');
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);

const attachProps = (node, newProps, oldProps = {}) => {
    // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
    if (node instanceof Element) {
        // add any classes in className to the class list
        const className = getClassName(node.classList, newProps, oldProps);
        if (className !== '') {
            node.className = className;
        }
        Object.keys(newProps).forEach(name => {
            if (name === 'children' || name === 'style' || name === 'ref' || name === 'class' || name === 'className' || name === 'forwardedRef') {
                return;
            }
            if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                const eventName = name.substring(2);
                const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
                if (!isCoveredByReact(eventNameLc)) {
                    syncEvent(node, eventNameLc, newProps[name]);
                }
            }
            else {
                node[name] = newProps[name];
                const propType = typeof newProps[name];
                if (propType === 'string') {
                    node.setAttribute(camelToDashCase(name), newProps[name]);
                }
                else {
                    node[name] = newProps[name];
                }
            }
        });
    }
};
const getClassName = (classList, newProps, oldProps) => {
    const newClassProp = newProps.className || newProps.class;
    const oldClassProp = oldProps.className || oldProps.class;
    // map the classes to Maps for performance
    const currentClasses = arrayToMap(classList);
    const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
    const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
    const finalClassNames = [];
    // loop through each of the current classes on the component
    // to see if it should be a part of the classNames added
    currentClasses.forEach(currentClass => {
        if (incomingPropClasses.has(currentClass)) {
            // add it as its already included in classnames coming in from newProps
            finalClassNames.push(currentClass);
            incomingPropClasses.delete(currentClass);
        }
        else if (!oldPropClasses.has(currentClass)) {
            // add it as it has NOT been removed by user
            finalClassNames.push(currentClass);
        }
    });
    incomingPropClasses.forEach(s => finalClassNames.push(s));
    return finalClassNames.join(' ');
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix, doc = document) => {
    const eventName = 'on' + eventNameSuffix;
    let isSupported = eventName in doc;
    if (!isSupported) {
        const element = doc.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
    }
    return isSupported;
};
const syncEvent = (node, eventName, newEventHandler) => {
    const eventStore = node.__events || (node.__events = {});
    const oldEventHandler = eventStore[eventName];
    // Remove old listener so they don't double up.
    if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
    }
    // Bind new listener.
    node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
        if (newEventHandler) {
            newEventHandler.call(this, e);
        }
    });
};
const arrayToMap = (arr) => {
    const map = new Map();
    arr.forEach((s) => map.set(s, s));
    return map;
};

const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return React__default.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React__default.forwardRef(forwardRef);
};
const isPlatform = (platform) => {
    return core.isPlatform(window, platform);
};
const getPlatforms = () => {
    return core.getPlatforms(window);
};
const getConfig = () => {
    if (typeof window !== 'undefined') {
        const Ionic = window.Ionic;
        if (Ionic && Ionic.config) {
            return Ionic.config;
        }
    }
    return null;
};

const createReactComponent = (tagName, routerLinkComponent = false) => {
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React__default.Component {
        constructor(props) {
            super(props);
            this.handleClick = (e) => {
                const { routerLink, routerDirection } = this.props;
                if (routerLink !== undefined) {
                    e.preventDefault();
                    this.context.navigate(routerLink, routerDirection);
                }
            };
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            const node = ReactDom.findDOMNode(this);
            attachProps(node, this.props, prevProps);
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = tslib.__rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            const propsToPass = Object.keys(cProps).reduce((acc, name) => {
                if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (isCoveredByReact(eventName)) {
                        acc[name] = cProps[name];
                    }
                }
                return acc;
            }, {});
            const newProps = Object.assign(Object.assign({}, propsToPass), { ref: forwardedRef, style });
            if (routerLinkComponent) {
                if (this.props.routerLink && !this.props.href) {
                    newProps.href = this.props.routerLink;
                }
                if (newProps.onClick) {
                    const oldClick = newProps.onClick;
                    newProps.onClick = (e) => {
                        oldClick(e);
                        if (!e.defaultPrevented) {
                            this.handleClick(e);
                        }
                    };
                }
                else {
                    newProps.onClick = this.handleClick;
                }
            }
            return React__default.createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
        static get contextType() {
            return NavContext;
        }
    };
    return createForwardRef(ReactComponent, displayName);
};

// ionic/core
const IonApp = /*@__PURE__*/ createReactComponent('ion-app');
const IonTab = /*@__PURE__*/ createReactComponent('ion-tab');
const IonTabButton = /*@__PURE__*/ createReactComponent('ion-tab-button');
const IonRouterLink = /*@__PURE__*/ createReactComponent('ion-router-link', true);
const IonAvatar = /*@__PURE__*/ createReactComponent('ion-avatar');
const IonBackdrop = /*@__PURE__*/ createReactComponent('ion-backdrop');
const IonBadge = /*@__PURE__*/ createReactComponent('ion-badge');
const IonButton = /*@__PURE__*/ createReactComponent('ion-button', true);
const IonButtons = /*@__PURE__*/ createReactComponent('ion-buttons');
const IonCard = /*@__PURE__*/ createReactComponent('ion-card', true);
const IonCardContent = /*@__PURE__*/ createReactComponent('ion-card-content');
const IonCardHeader = /*@__PURE__*/ createReactComponent('ion-card-header');
const IonCardSubtitle = /*@__PURE__*/ createReactComponent('ion-card-subtitle');
const IonCardTitle = /*@__PURE__*/ createReactComponent('ion-card-title');
const IonCheckbox = /*@__PURE__*/ createReactComponent('ion-checkbox');
const IonCol = /*@__PURE__*/ createReactComponent('ion-col');
const IonContent = /*@__PURE__*/ createReactComponent('ion-content');
const IonChip = /*@__PURE__*/ createReactComponent('ion-chip');
const IonDatetime = /*@__PURE__*/ createReactComponent('ion-datetime');
const IonFab = /*@__PURE__*/ createReactComponent('ion-fab');
const IonFabButton = /*@__PURE__*/ createReactComponent('ion-fab-button', true);
const IonFabList = /*@__PURE__*/ createReactComponent('ion-fab-list');
const IonFooter = /*@__PURE__*/ createReactComponent('ion-footer');
const IonGrid = /*@__PURE__*/ createReactComponent('ion-grid');
const IonHeader = /*@__PURE__*/ createReactComponent('ion-header');
const IonImg = /*@__PURE__*/ createReactComponent('ion-img');
const IonInfiniteScroll = /*@__PURE__*/ createReactComponent('ion-infinite-scroll');
const IonInfiniteScrollContent = /*@__PURE__*/ createReactComponent('ion-infinite-scroll-content');
const IonInput = /*@__PURE__*/ createReactComponent('ion-input');
const IonItem = /*@__PURE__*/ createReactComponent('ion-item', true);
const IonItemDivider = /*@__PURE__*/ createReactComponent('ion-item-divider');
const IonItemGroup = /*@__PURE__*/ createReactComponent('ion-item-group');
const IonItemOption = /*@__PURE__*/ createReactComponent('ion-item-option', true);
const IonItemOptions = /*@__PURE__*/ createReactComponent('ion-item-options');
const IonItemSliding = /*@__PURE__*/ createReactComponent('ion-item-sliding');
const IonLabel = /*@__PURE__*/ createReactComponent('ion-label');
const IonList = /*@__PURE__*/ createReactComponent('ion-list');
const IonListHeader = /*@__PURE__*/ createReactComponent('ion-list-header');
const IonMenu = /*@__PURE__*/ createReactComponent('ion-menu');
const IonMenuButton = /*@__PURE__*/ createReactComponent('ion-menu-button');
const IonMenuToggle = /*@__PURE__*/ createReactComponent('ion-menu-toggle');
const IonNote = /*@__PURE__*/ createReactComponent('ion-note');
const IonPickerColumn = /*@__PURE__*/ createReactComponent('ion-picker-column');
const IonNav = /*@__PURE__*/ createReactComponent('ion-nav');
const IonProgressBar = /*@__PURE__*/ createReactComponent('ion-progress-bar');
const IonRadio = /*@__PURE__*/ createReactComponent('ion-radio');
const IonRadioGroup = /*@__PURE__*/ createReactComponent('ion-radio-group');
const IonRange = /*@__PURE__*/ createReactComponent('ion-range');
const IonRefresher = /*@__PURE__*/ createReactComponent('ion-refresher');
const IonRefresherContent = /*@__PURE__*/ createReactComponent('ion-refresher-content');
const IonReorder = /*@__PURE__*/ createReactComponent('ion-reorder');
const IonReorderGroup = /*@__PURE__*/ createReactComponent('ion-reorder-group');
const IonRippleEffect = /*@__PURE__*/ createReactComponent('ion-ripple-effect');
const IonRow = /*@__PURE__*/ createReactComponent('ion-row');
const IonSearchbar = /*@__PURE__*/ createReactComponent('ion-searchbar');
const IonSegment = /*@__PURE__*/ createReactComponent('ion-segment');
const IonSegmentButton = /*@__PURE__*/ createReactComponent('ion-segment-button');
const IonSelect = /*@__PURE__*/ createReactComponent('ion-select');
const IonSelectOption = /*@__PURE__*/ createReactComponent('ion-select-option');
const IonSelectPopover = /*@__PURE__*/ createReactComponent('ion-select-popover');
const IonSkeletonText = /*@__PURE__*/ createReactComponent('ion-skeleton-text');
const IonSlide = /*@__PURE__*/ createReactComponent('ion-slide');
const IonSlides = /*@__PURE__*/ createReactComponent('ion-slides');
const IonSpinner = /*@__PURE__*/ createReactComponent('ion-spinner');
const IonSplitPane = /*@__PURE__*/ createReactComponent('ion-split-pane');
const IonText = /*@__PURE__*/ createReactComponent('ion-text');
const IonTextarea = /*@__PURE__*/ createReactComponent('ion-textarea');
const IonThumbnail = /*@__PURE__*/ createReactComponent('ion-thumbnail');
const IonTitle = /*@__PURE__*/ createReactComponent('ion-title');
const IonToggle = /*@__PURE__*/ createReactComponent('ion-toggle');
const IonToolbar = /*@__PURE__*/ createReactComponent('ion-toolbar');
const IonVirtualScroll = /*@__PURE__*/ createReactComponent('ion-virtual-scroll');

const createControllerComponent = (displayName, controller) => {
    const didDismissEventName = `on${displayName}DidDismiss`;
    const didPresentEventName = `on${displayName}DidPresent`;
    const willDismissEventName = `on${displayName}WillDismiss`;
    const willPresentEventName = `on${displayName}WillPresent`;
    class Overlay extends React__default.Component {
        constructor(props) {
            super(props);
            this.isUnmounted = false;
            this.handleDismiss = this.handleDismiss.bind(this);
        }
        static get displayName() {
            return displayName;
        }
        async componentDidMount() {
            const { isOpen } = this.props;
            if (isOpen) {
                this.present();
            }
        }
        componentWillUnmount() {
            this.isUnmounted = true;
            if (this.overlay) {
                this.overlay.dismiss();
            }
        }
        async componentDidUpdate(prevProps) {
            if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen === true) {
                this.present(prevProps);
            }
            if (this.overlay && prevProps.isOpen !== this.props.isOpen && this.props.isOpen === false) {
                await this.overlay.dismiss();
            }
        }
        handleDismiss(event) {
            if (this.props.onDidDismiss) {
                this.props.onDidDismiss(event);
            }
            if (this.props.forwardedRef) {
                this.props.forwardedRef.current = undefined;
            }
        }
        async present(prevProps) {
            const _a = this.props, cProps = tslib.__rest(_a, ["isOpen", "onDidDismiss", "onDidPresent", "onWillDismiss", "onWillPresent"]);
            this.overlay = await controller.create(Object.assign({}, cProps));
            attachProps(this.overlay, {
                [didDismissEventName]: this.handleDismiss,
                [didPresentEventName]: (e) => this.props.onDidPresent && this.props.onDidPresent(e),
                [willDismissEventName]: (e) => this.props.onWillDismiss && this.props.onWillDismiss(e),
                [willPresentEventName]: (e) => this.props.onWillPresent && this.props.onWillPresent(e)
            }, prevProps);
            // Check isOpen again since the value could have changed during the async call to controller.create
            // It's also possible for the component to have become unmounted.
            if (this.props.isOpen === true && this.isUnmounted === false) {
                if (this.props.forwardedRef) {
                    this.props.forwardedRef.current = this.overlay;
                }
                await this.overlay.present();
            }
        }
        render() {
            return null;
        }
    }
    return React__default.forwardRef((props, ref) => {
        return React__default.createElement(Overlay, Object.assign({}, props, { forwardedRef: ref }));
    });
};

const IonAlert = /*@__PURE__*/ createControllerComponent('IonAlert', core.alertController);

const IonLoading = /*@__PURE__*/ createControllerComponent('IonLoading', core.loadingController);

const toastController = {
    create: (options) => core.toastController.create(options),
    dismiss: (data, role, id) => core.toastController.dismiss(data, role, id),
    getTop: () => core.toastController.getTop()
};
const IonToast = /*@__PURE__*/ createControllerComponent('IonToast', toastController);

const IonPicker = /*@__PURE__*/ createControllerComponent('IonPicker', core.pickerController);

const createOverlayComponent = (displayName, controller) => {
    const didDismissEventName = `on${displayName}DidDismiss`;
    const didPresentEventName = `on${displayName}DidPresent`;
    const willDismissEventName = `on${displayName}WillDismiss`;
    const willPresentEventName = `on${displayName}WillPresent`;
    class Overlay extends React__default.Component {
        constructor(props) {
            super(props);
            this.el = document.createElement('div');
            this.handleDismiss = this.handleDismiss.bind(this);
        }
        static get displayName() {
            return displayName;
        }
        componentDidMount() {
            if (this.props.isOpen) {
                this.present();
            }
        }
        componentWillUnmount() {
            if (this.overlay) {
                this.overlay.dismiss();
            }
        }
        handleDismiss(event) {
            if (this.props.onDidDismiss) {
                this.props.onDidDismiss(event);
            }
            if (this.props.forwardedRef) {
                this.props.forwardedRef.current = undefined;
            }
        }
        async componentDidUpdate(prevProps) {
            if (this.overlay) {
                attachProps(this.overlay, this.props, prevProps);
            }
            if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen === true) {
                this.present(prevProps);
            }
            if (this.overlay && prevProps.isOpen !== this.props.isOpen && this.props.isOpen === false) {
                await this.overlay.dismiss();
            }
        }
        async present(prevProps) {
            const _a = this.props, cProps = tslib.__rest(_a, ["children", "isOpen", "onDidDismiss", "onDidPresent", "onWillDismiss", "onWillPresent"]);
            const elementProps = Object.assign(Object.assign({}, cProps), { ref: this.props.forwardedRef, [didDismissEventName]: this.handleDismiss, [didPresentEventName]: (e) => this.props.onDidPresent && this.props.onDidPresent(e), [willDismissEventName]: (e) => this.props.onWillDismiss && this.props.onWillDismiss(e), [willPresentEventName]: (e) => this.props.onWillPresent && this.props.onWillPresent(e) });
            this.overlay = await controller.create(Object.assign(Object.assign({}, elementProps), { component: this.el, componentProps: {} }));
            if (this.props.forwardedRef) {
                this.props.forwardedRef.current = this.overlay;
            }
            attachProps(this.overlay, elementProps, prevProps);
            await this.overlay.present();
        }
        render() {
            return ReactDom.createPortal(this.props.isOpen ? this.props.children : null, this.el);
        }
    }
    return React__default.forwardRef((props, ref) => {
        return React__default.createElement(Overlay, Object.assign({}, props, { forwardedRef: ref }));
    });
};

const actionSheetController = {
    create: (options) => core.actionSheetController.create(options),
    dismiss: (data, role, id) => core.actionSheetController.dismiss(data, role, id),
    getTop: () => core.actionSheetController.getTop()
};
const IonActionSheet = /*@__PURE__*/ createOverlayComponent('IonActionSheet', actionSheetController);

const IonModal = /*@__PURE__*/ createOverlayComponent('IonModal', core.modalController);

const IonPopover = /*@__PURE__*/ createOverlayComponent('IonPopover', core.popoverController);

class IonPageInternal extends React__default.Component {
    constructor(props) {
        super(props);
        this.ref = this.props.forwardedRef || React__default.createRef();
    }
    componentDidMount() {
        if (this.context && this.ref && this.ref.current) {
            if (this.context.hasIonicRouter()) {
                this.context.registerIonPage(this.ref.current);
            }
        }
    }
    render() {
        const _a = this.props, { className, children, forwardedRef } = _a, props = tslib.__rest(_a, ["className", "children", "forwardedRef"]);
        return (React__default.createElement("div", Object.assign({ className: className ? `ion-page ${className}` : 'ion-page', ref: this.ref }, props), children));
    }
    static get displayName() {
        return 'IonPage';
    }
    static get contextType() {
        return NavContext;
    }
}
const IonPage = createForwardRef(IonPageInternal, 'IonPage');

const IonTabBarInner = /*@__PURE__*/ createReactComponent('ion-tab-bar');
const IonBackButtonInner = /*@__PURE__*/ createReactComponent('ion-back-button');
const IonRouterOutletInner = /*@__PURE__*/ createReactComponent('ion-router-outlet');
// ionicons
const IonIconInner = /*@__PURE__*/ createReactComponent('ion-icon');

const IonRouterOutletContainer = /*@__PURE__*/ (() => class extends React__default.Component {
    render() {
        const StackManager = this.context.getStackManager();
        return (this.context.hasIonicRouter() ? (React__default.createElement(StackManager, null,
            React__default.createElement(IonRouterOutletInner, Object.assign({ ref: this.props.forwardedRef }, this.props), this.props.children))) : (React__default.createElement(IonRouterOutletInner, Object.assign({ ref: this.props.forwardedRef }, this.props), this.props.children)));
    }
    static get contextType() {
        return NavContext;
    }
})();
const IonRouterOutlet = createForwardRef(IonRouterOutletContainer, 'IonRouterOutlet');

const IonTabBarUnwrapped = /*@__PURE__*/ (() => class extends React__default.Component {
    constructor(props) {
        super(props);
        this.onTabButtonClick = (e) => {
            const originalHref = this.state.tabs[e.detail.tab].originalHref;
            const currentHref = this.state.tabs[e.detail.tab].currentHref;
            if (this.state.activeTab === e.detail.tab) {
                if (originalHref === currentHref) {
                    this.context.navigate(originalHref, 'none');
                }
                else {
                    this.context.navigate(originalHref, 'back', 'pop');
                }
            }
            else {
                if (this.props.onIonTabsWillChange) {
                    this.props.onIonTabsWillChange(new CustomEvent('ionTabWillChange', { detail: { tab: e.detail.tab } }));
                }
                if (this.props.onIonTabsDidChange) {
                    this.props.onIonTabsDidChange(new CustomEvent('ionTabDidChange', { detail: { tab: e.detail.tab } }));
                }
                this.context.navigate(currentHref, 'none');
            }
        };
        this.renderChild = (activeTab) => (child) => {
            if (child != null && child.props && child.type === IonTabButton) {
                const href = (child.props.tab === activeTab) ? this.props.currentPath : (this.state.tabs[child.props.tab].currentHref);
                return React__default.cloneElement(child, {
                    href,
                    onIonTabButtonClick: this.onTabButtonClick
                });
            }
            return null;
        };
        const tabActiveUrls = {};
        React__default.Children.forEach(this.props.children, (child) => {
            if (child != null && typeof child === 'object' && child.props && child.type === IonTabButton) {
                tabActiveUrls[child.props.tab] = {
                    originalHref: child.props.href,
                    currentHref: child.props.href
                };
            }
        });
        this.state = {
            activeTab: undefined,
            tabs: tabActiveUrls
        };
    }
    static getDerivedStateFromProps(props, state) {
        const activeTab = Object.keys(state.tabs)
            .find(key => {
            const href = state.tabs[key].originalHref;
            return props.currentPath.startsWith(href);
        });
        if (activeTab === undefined || (activeTab === state.activeTab && state.tabs[activeTab].currentHref === props.currentPath)) {
            return null;
        }
        return {
            activeTab,
            tabs: Object.assign(Object.assign({}, state.tabs), { [activeTab]: {
                    originalHref: state.tabs[activeTab].originalHref,
                    currentHref: props.currentPath
                } })
        };
    }
    render() {
        return (React__default.createElement(IonTabBarInner, Object.assign({}, this.props, { selectedTab: this.state.activeTab }), React__default.Children.map(this.props.children, this.renderChild(this.state.activeTab))));
    }
    static get contextType() {
        return NavContext;
    }
})();
const IonTabBar = props => {
    const context = React.useContext(NavContext);
    return (React__default.createElement(IonTabBarUnwrapped, Object.assign({}, props, { currentPath: props.currentPath || context.currentPath }), props.children));
};

const hostStyles = {
    display: 'flex',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    contain: 'layout size style'
};
const tabsInner = {
    position: 'relative',
    flex: 1,
    contain: 'layout size style'
};
class IonTabs extends React__default.Component {
    constructor(props) {
        super(props);
        this.routerOutletRef = React__default.createRef();
    }
    render() {
        let outlet;
        let tabBar;
        React__default.Children.forEach(this.props.children, (child) => {
            if (child == null || typeof child !== 'object' || !child.hasOwnProperty('type')) {
                return;
            }
            if (child.type === IonRouterOutlet) {
                outlet = child;
            }
            if (child.type === IonTabBar) {
                const { onIonTabsDidChange, onIonTabsWillChange } = this.props;
                tabBar = React__default.cloneElement(child, { onIonTabsDidChange, onIonTabsWillChange });
            }
        });
        if (!outlet) {
            throw new Error('IonTabs must contain an IonRouterOutlet');
        }
        if (!tabBar) {
            // TODO, this is not required
            throw new Error('IonTabs needs a IonTabBar');
        }
        return (React__default.createElement("div", { style: hostStyles },
            tabBar.props.slot === 'top' ? tabBar : null,
            React__default.createElement("div", { style: tabsInner, className: "tabs-inner" }, outlet),
            tabBar.props.slot === 'bottom' ? tabBar : null));
    }
    static get contextType() {
        return NavContext;
    }
}

const IonBackButton = /*@__PURE__*/ (() => class extends React__default.Component {
    constructor() {
        super(...arguments);
        this.clickButton = (e) => {
            const defaultHref = this.props.defaultHref;
            if (this.context.hasIonicRouter()) {
                e.stopPropagation();
                this.context.goBack(defaultHref);
            }
            else if (defaultHref !== undefined) {
                window.location.href = defaultHref;
            }
        };
    }
    render() {
        return (React__default.createElement(IonBackButtonInner, Object.assign({ onClick: this.clickButton }, this.props)));
    }
    static get displayName() {
        return 'IonBackButton';
    }
    static get contextType() {
        return NavContext;
    }
})();

const isDevMode = () => {
    return process && process.env && process.env.NODE_ENV === 'development';
};
const warnings = {};
const deprecationWarning = (key, message) => {
    if (isDevMode()) {
        if (!warnings[key]) {
            console.warn(message);
            warnings[key] = true;
        }
    }
};

class IonIconContainer extends React__default.PureComponent {
    constructor(props) {
        super(props);
        if (this.props.name) {
            deprecationWarning('icon-name', 'In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.');
        }
    }
    setIcon() {
        var _a, _b;
        const { icon, ios, md } = this.props;
        if (ios || md) {
            if (isPlatform('ios')) {
                this.setState({
                    icon: (_a = (ios !== null && ios !== void 0 ? ios : md), (_a !== null && _a !== void 0 ? _a : icon))
                });
            }
            else if (isPlatform('android')) {
                this.setState({
                    icon: (_b = (md !== null && md !== void 0 ? md : ios), (_b !== null && _b !== void 0 ? _b : icon))
                });
            }
        }
        else {
            this.setState({
                icon
            });
        }
    }
    render() {
        var _a, _b;
        const _c = this.props, { icon, ios, md } = _c, rest = tslib.__rest(_c, ["icon", "ios", "md"]);
        let iconToUse;
        if (ios || md) {
            if (isPlatform('ios')) {
                iconToUse = (_a = (ios !== null && ios !== void 0 ? ios : md), (_a !== null && _a !== void 0 ? _a : icon));
            }
            else if (isPlatform('android')) {
                iconToUse = (_b = (md !== null && md !== void 0 ? md : ios), (_b !== null && _b !== void 0 ? _b : icon));
            }
        }
        else {
            iconToUse = icon;
        }
        return (React__default.createElement(IonIconInner, Object.assign({ ref: this.props.forwardedRef, icon: iconToUse }, rest), this.props.children));
    }
    static get contextType() {
        return NavContext;
    }
}
const IonIcon = createForwardRef(IonIconContainer, 'IonIcon');

class CreateAnimation extends React__default.PureComponent {
    constructor(props) {
        super(props);
        this.nodes = new Map();
        this.animation = core.createAnimation(props.id);
    }
    setupAnimation(props) {
        const animation = this.animation;
        if (this.nodes.size > 0) {
            animation.addElement(Array.from(this.nodes.values()));
        }
        checkConfig(animation, props);
        checkPlayback(animation, props);
    }
    componentDidMount() {
        const props = this.props;
        this.setupAnimation(props);
    }
    componentDidUpdate(prevProps) {
        const animation = this.animation;
        const props = this.props;
        checkConfig(animation, props, prevProps);
        checkProgress(animation, props, prevProps);
        checkPlayback(animation, props, prevProps);
    }
    render() {
        const { children } = this.props;
        return (React__default.createElement(React__default.Fragment, null, React__default.Children.map(children, ((child, id) => React__default.cloneElement(child, { ref: (el) => this.nodes.set(id, el) })))));
    }
}
const checkConfig = (animation, currentProps = {}, prevProps = {}) => {
    const reservedProps = ['children', 'progressStart', 'progressStep', 'progressEnd', 'pause', 'stop', 'destroy', 'play', 'from', 'to', 'fromTo', 'onFinish'];
    for (const key in currentProps) {
        if (currentProps.hasOwnProperty(key) &&
            !reservedProps.includes(key) &&
            currentProps[key] !== prevProps[key]) {
            animation[key](currentProps[key]);
        }
    }
    const fromValues = currentProps.from;
    if (fromValues && fromValues !== prevProps.from) {
        const values = (Array.isArray(fromValues)) ? fromValues : [fromValues];
        values.forEach(val => animation.from(val.property, val.value));
    }
    const toValues = currentProps.to;
    if (toValues && toValues !== prevProps.to) {
        const values = (Array.isArray(toValues)) ? toValues : [toValues];
        values.forEach(val => animation.to(val.property, val.value));
    }
    const fromToValues = currentProps.fromTo;
    if (fromToValues && fromToValues !== prevProps.fromTo) {
        const values = (Array.isArray(fromToValues)) ? fromToValues : [fromToValues];
        values.forEach(val => animation.fromTo(val.property, val.fromValue, val.toValue));
    }
    const onFinishValues = currentProps.onFinish;
    if (onFinishValues && onFinishValues !== prevProps.onFinish) {
        const values = (Array.isArray(onFinishValues)) ? onFinishValues : [onFinishValues];
        values.forEach(val => animation.onFinish(val.callback, val.opts));
    }
};
const checkProgress = (animation, currentProps = {}, prevProps = {}) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const { progressStart, progressStep, progressEnd } = currentProps;
    if (progressStart && (((_a = prevProps.progressStart) === null || _a === void 0 ? void 0 : _a.forceLinearEasing) !== ((_b = progressStart) === null || _b === void 0 ? void 0 : _b.forceLinearEasing) || ((_c = prevProps.progressStart) === null || _c === void 0 ? void 0 : _c.step) !== ((_d = progressStart) === null || _d === void 0 ? void 0 : _d.step))) {
        animation.progressStart(progressStart.forceLinearEasing, progressStart.step);
    }
    if (progressStep && ((_e = prevProps.progressStep) === null || _e === void 0 ? void 0 : _e.step) !== ((_f = progressStep) === null || _f === void 0 ? void 0 : _f.step)) {
        animation.progressStep(progressStep.step);
    }
    if (progressEnd && (((_g = prevProps.progressEnd) === null || _g === void 0 ? void 0 : _g.playTo) !== ((_h = progressEnd) === null || _h === void 0 ? void 0 : _h.playTo) || ((_j = prevProps.progressEnd) === null || _j === void 0 ? void 0 : _j.step) !== ((_k = progressEnd) === null || _k === void 0 ? void 0 : _k.step) || ((_l = prevProps) === null || _l === void 0 ? void 0 : _l.dur) !== ((_m = progressEnd) === null || _m === void 0 ? void 0 : _m.dur))) {
        animation.progressEnd(progressEnd.playTo, progressEnd.step, progressEnd.dur);
    }
};
const checkPlayback = (animation, currentProps = {}, prevProps = {}) => {
    if (!prevProps.play && currentProps.play) {
        animation.play();
    }
    if (!prevProps.pause && currentProps.pause) {
        animation.pause();
    }
    if (!prevProps.stop && currentProps.stop) {
        animation.stop();
    }
    if (!prevProps.destroy && currentProps.destroy) {
        animation.destroy();
    }
};

// Icons that are used by internal components
ionicons.addIcons({
    'arrow-back-sharp': icons.arrowBackSharp,
    'caret-back-sharp': icons.caretBackSharp,
    'chevron-back': icons.chevronBack,
    'chevron-forward': icons.chevronForward,
    'close-circle': icons.closeCircle,
    'close-sharp': icons.closeSharp,
    'menu-outline': icons.menuOutline,
    'menu-sharp': icons.menuSharp,
    'reorder-two-sharp': icons.reorderTwoSharp,
    'reorder-three-outline': icons.reorderThreeOutline,
    'search-outline': icons.searchOutline,
    'search-sharp': icons.searchSharp,
});
// TODO: defineCustomElements() is asyncronous
// We need to use the promise
loader.defineCustomElements(window);

Object.defineProperty(exports, 'createAnimation', {
    enumerable: true,
    get: function () {
        return core.createAnimation;
    }
});
Object.defineProperty(exports, 'createGesture', {
    enumerable: true,
    get: function () {
        return core.createGesture;
    }
});
Object.defineProperty(exports, 'setupConfig', {
    enumerable: true,
    get: function () {
        return core.setupConfig;
    }
});
exports.CreateAnimation = CreateAnimation;
exports.DefaultIonLifeCycleContext = DefaultIonLifeCycleContext;
exports.IonActionSheet = IonActionSheet;
exports.IonAlert = IonAlert;
exports.IonApp = IonApp;
exports.IonAvatar = IonAvatar;
exports.IonBackButton = IonBackButton;
exports.IonBackdrop = IonBackdrop;
exports.IonBadge = IonBadge;
exports.IonButton = IonButton;
exports.IonButtons = IonButtons;
exports.IonCard = IonCard;
exports.IonCardContent = IonCardContent;
exports.IonCardHeader = IonCardHeader;
exports.IonCardSubtitle = IonCardSubtitle;
exports.IonCardTitle = IonCardTitle;
exports.IonCheckbox = IonCheckbox;
exports.IonChip = IonChip;
exports.IonCol = IonCol;
exports.IonContent = IonContent;
exports.IonDatetime = IonDatetime;
exports.IonFab = IonFab;
exports.IonFabButton = IonFabButton;
exports.IonFabList = IonFabList;
exports.IonFooter = IonFooter;
exports.IonGrid = IonGrid;
exports.IonHeader = IonHeader;
exports.IonIcon = IonIcon;
exports.IonImg = IonImg;
exports.IonInfiniteScroll = IonInfiniteScroll;
exports.IonInfiniteScrollContent = IonInfiniteScrollContent;
exports.IonInput = IonInput;
exports.IonItem = IonItem;
exports.IonItemDivider = IonItemDivider;
exports.IonItemGroup = IonItemGroup;
exports.IonItemOption = IonItemOption;
exports.IonItemOptions = IonItemOptions;
exports.IonItemSliding = IonItemSliding;
exports.IonLabel = IonLabel;
exports.IonLifeCycleContext = IonLifeCycleContext;
exports.IonList = IonList;
exports.IonListHeader = IonListHeader;
exports.IonLoading = IonLoading;
exports.IonMenu = IonMenu;
exports.IonMenuButton = IonMenuButton;
exports.IonMenuToggle = IonMenuToggle;
exports.IonModal = IonModal;
exports.IonNav = IonNav;
exports.IonNote = IonNote;
exports.IonPage = IonPage;
exports.IonPicker = IonPicker;
exports.IonPickerColumn = IonPickerColumn;
exports.IonPopover = IonPopover;
exports.IonProgressBar = IonProgressBar;
exports.IonRadio = IonRadio;
exports.IonRadioGroup = IonRadioGroup;
exports.IonRange = IonRange;
exports.IonRefresher = IonRefresher;
exports.IonRefresherContent = IonRefresherContent;
exports.IonReorder = IonReorder;
exports.IonReorderGroup = IonReorderGroup;
exports.IonRippleEffect = IonRippleEffect;
exports.IonRouterLink = IonRouterLink;
exports.IonRouterOutlet = IonRouterOutlet;
exports.IonRow = IonRow;
exports.IonSearchbar = IonSearchbar;
exports.IonSegment = IonSegment;
exports.IonSegmentButton = IonSegmentButton;
exports.IonSelect = IonSelect;
exports.IonSelectOption = IonSelectOption;
exports.IonSelectPopover = IonSelectPopover;
exports.IonSkeletonText = IonSkeletonText;
exports.IonSlide = IonSlide;
exports.IonSlides = IonSlides;
exports.IonSpinner = IonSpinner;
exports.IonSplitPane = IonSplitPane;
exports.IonTab = IonTab;
exports.IonTabBar = IonTabBar;
exports.IonTabButton = IonTabButton;
exports.IonTabs = IonTabs;
exports.IonText = IonText;
exports.IonTextarea = IonTextarea;
exports.IonThumbnail = IonThumbnail;
exports.IonTitle = IonTitle;
exports.IonToast = IonToast;
exports.IonToggle = IonToggle;
exports.IonToolbar = IonToolbar;
exports.IonVirtualScroll = IonVirtualScroll;
exports.NavContext = NavContext;
exports.getConfig = getConfig;
exports.getPlatforms = getPlatforms;
exports.isPlatform = isPlatform;
exports.useIonViewDidEnter = useIonViewDidEnter;
exports.useIonViewDidLeave = useIonViewDidLeave;
exports.useIonViewWillEnter = useIonViewWillEnter;
exports.useIonViewWillLeave = useIonViewWillLeave;
exports.withIonLifeCycle = withIonLifeCycle;
//# sourceMappingURL=index.js.map
