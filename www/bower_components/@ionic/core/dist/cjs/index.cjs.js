'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const config = require('./config-03608b68.js');
require('./helpers-5c4a2267.js');
const animation = require('./animation-b2935622.js');
const cubicBezier = require('./cubic-bezier-07b30068.js');
const index = require('./index-09c58b36.js');
const constants = require('./constants-122d7f67.js');
require('./hardware-back-button-1be0db15.js');
const index$1 = require('./index-48791dd6.js');
const overlays = require('./overlays-995ecf9e.js');

const setupConfig = (config) => {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
const getMode = () => {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};

exports.getPlatforms = config.getPlatforms;
exports.isPlatform = config.isPlatform;
exports.createAnimation = animation.createAnimation;
exports.getTimeGivenProgression = cubicBezier.getTimeGivenProgression;
exports.createGesture = index.createGesture;
exports.LIFECYCLE_DID_ENTER = constants.LIFECYCLE_DID_ENTER;
exports.LIFECYCLE_DID_LEAVE = constants.LIFECYCLE_DID_LEAVE;
exports.LIFECYCLE_WILL_ENTER = constants.LIFECYCLE_WILL_ENTER;
exports.LIFECYCLE_WILL_LEAVE = constants.LIFECYCLE_WILL_LEAVE;
exports.LIFECYCLE_WILL_UNLOAD = constants.LIFECYCLE_WILL_UNLOAD;
exports.menuController = index$1.menuController;
exports.actionSheetController = overlays.actionSheetController;
exports.alertController = overlays.alertController;
exports.loadingController = overlays.loadingController;
exports.modalController = overlays.modalController;
exports.pickerController = overlays.pickerController;
exports.popoverController = overlays.popoverController;
exports.toastController = overlays.toastController;
exports.getMode = getMode;
exports.setupConfig = setupConfig;
