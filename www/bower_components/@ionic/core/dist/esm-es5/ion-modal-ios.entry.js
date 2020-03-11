import { __awaiter, __generator } from "tslib";
import { r as registerInstance, c as getIonMode, d as createEvent, h, H as Host, e as getElement } from './core-0a8d4d2e.js';
import { b as config } from './config-3c7f3790.js';
import { c as clamp } from './helpers-46f4a262.js';
import { c as createAnimation } from './animation-56279521.js';
import { g as getTimeGivenProgression } from './cubic-bezier-1d592096.js';
import { createGesture } from './index-c38df685.js';
import './constants-3c3e1099.js';
import './hardware-back-button-1ed0083a.js';
import { B as BACKDROP, d as prepareOverlay, e as present, h as activeAnimations, f as dismiss, g as eventMethod } from './overlays-e336664a.js';
import { g as getClassMap } from './theme-18cbe2cc.js';
import { a as attachComponent, d as detachComponent } from './framework-delegate-c2e2e1f4.js';
import { d as deepReady } from './index-4e2fa3c6.js';
// Defaults for the card swipe animation
var SwipeToCloseDefaults = {
    MIN_PRESENTING_SCALE: 0.93,
};
var createSwipeToCloseGesture = function (el, animation, onDismiss) {
    var height = el.offsetHeight;
    var isOpen = false;
    var canStart = function (detail) {
        var target = detail.event.target;
        if (target === null ||
            !target.closest) {
            return true;
        }
        var content = target.closest('ion-content');
        if (content === null) {
            return true;
        }
        // Target is in the content so we don't start the gesture.
        // We could be more nuanced here and allow it for content that
        // does not need to scroll.
        return false;
    };
    var onStart = function () {
        animation.progressStart(true, (isOpen) ? 1 : 0);
    };
    var onMove = function (detail) {
        var step = detail.deltaY / height;
        if (step < 0) {
            return;
        }
        animation.progressStep(step);
    };
    var onEnd = function (detail) {
        var velocity = detail.velocityY;
        var step = detail.deltaY / height;
        if (step < 0) {
            return;
        }
        var threshold = (detail.deltaY + velocity * 1000) / height;
        var shouldComplete = threshold >= 0.5;
        var newStepValue = (shouldComplete) ? -0.001 : 0.001;
        if (!shouldComplete) {
            animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
            newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        }
        else {
            animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
            newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }
        var duration = (shouldComplete) ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
        isOpen = shouldComplete;
        gesture.enable(false);
        animation
            .onFinish(function () {
            if (!shouldComplete) {
                gesture.enable(true);
            }
        })
            .progressEnd((shouldComplete) ? 1 : 0, newStepValue, duration);
        if (shouldComplete) {
            onDismiss();
        }
    };
    var gesture = createGesture({
        el: el,
        gestureName: 'modalSwipeToClose',
        gesturePriority: 40,
        direction: 'y',
        threshold: 10,
        canStart: canStart,
        onStart: onStart,
        onMove: onMove,
        onEnd: onEnd
    });
    return gesture;
};
var computeDuration = function (remaining, velocity) {
    return clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};
/**
 * iOS Modal Enter Animation for the Card presentation style
 */
var iosEnterAnimation = function (baseEl, presentingEl) {
    // The top translate Y for the presenting element
    var backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
    var wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    var baseAnimation = createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
    if (presentingEl) {
        var modalTransform = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined) ? '-10px' : 'max(30px, var(--ion-safe-area-top))';
        var bodyEl_1 = document.body;
        var toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
        var finalTransform = "translateY(" + modalTransform + ") scale(" + toPresentingScale + ")";
        var presentingAnimation = createAnimation()
            .beforeStyles({
            'transform': 'translateY(0)',
            'transform-origin': 'top center',
            'overflow': 'hidden'
        })
            .afterStyles({
            'transform': finalTransform
        })
            .beforeAddWrite(function () { return bodyEl_1.style.setProperty('background-color', 'black'); })
            .addElement(presentingEl)
            .keyframes([
            { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
            { offset: 1, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' }
        ]);
        baseAnimation.addAnimation(presentingAnimation);
    }
    return baseAnimation;
};
/**
 * iOS Modal Leave Animation
 */
var iosLeaveAnimation = function (baseEl, presentingEl, duration) {
    if (duration === void 0) { duration = 500; }
    var backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
    var wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    var baseAnimation = createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(duration)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    if (presentingEl) {
        var modalTransform = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined) ? '-10px' : 'max(30px, var(--ion-safe-area-top))';
        var bodyEl_2 = document.body;
        var currentPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
        var presentingAnimation = createAnimation()
            .addElement(presentingEl)
            .beforeClearStyles(['transform'])
            .afterClearStyles(['transform'])
            .onFinish(function (currentStep) {
            // only reset background color if this is the last card-style modal
            if (currentStep !== 1) {
                return;
            }
            presentingEl.style.setProperty('overflow', '');
            var numModals = Array.from(bodyEl_2.querySelectorAll('ion-modal')).filter(function (m) { return m.presentingElement !== undefined; }).length;
            if (numModals <= 1) {
                bodyEl_2.style.setProperty('background-color', '');
            }
        })
            .keyframes([
            { offset: 0, filter: 'contrast(0.85)', transform: "translateY(" + modalTransform + ") scale(" + currentPresentingScale + ")", borderRadius: '10px 10px 0 0' },
            { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' }
        ]);
        baseAnimation.addAnimation(presentingAnimation);
    }
    return baseAnimation;
};
/**
 * Md Modal Enter Animation
 */
var mdEnterAnimation = function (baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
    wrapperAnimation
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
        { offset: 1, opacity: 1, transform: 'translateY(0px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Modal Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
        { offset: 1, opacity: 0, transform: 'translateY(40px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var Modal = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        // Whether or not modal is being dismissed via gesture
        this.gestureAnimationDismissing = false;
        this.presented = false;
        this.mode = getIonMode(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * If `true`, the modal will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the modal.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the modal will animate.
         */
        this.animated = true;
        /**
         * If `true`, the modal can be swiped to dismiss. Only applies in iOS mode.
         */
        this.swipeToClose = false;
        this.onBackdropTap = function () {
            _this.dismiss(undefined, BACKDROP);
        };
        this.onDismiss = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            _this.dismiss();
        };
        this.onLifecycle = function (modalEvent) {
            var el = _this.usersElement;
            var name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                var ev = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(ev);
            }
        };
        prepareOverlay(this.el);
        this.didPresent = createEvent(this, "ionModalDidPresent", 7);
        this.willPresent = createEvent(this, "ionModalWillPresent", 7);
        this.willDismiss = createEvent(this, "ionModalWillDismiss", 7);
        this.didDismiss = createEvent(this, "ionModalDidDismiss", 7);
    }
    /**
     * Present the modal overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return __awaiter(this, void 0, void 0, function () {
            var container, componentProps, _a, mode, animationBuilder, ani;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.presented) {
                            return [2 /*return*/];
                        }
                        container = this.el.querySelector(".modal-wrapper");
                        if (!container) {
                            throw new Error('container is undefined');
                        }
                        componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
                        _a = this;
                        return [4 /*yield*/, attachComponent(this.delegate, container, this.component, ['ion-page'], componentProps)];
                    case 1:
                        _a.usersElement = _b.sent();
                        return [4 /*yield*/, deepReady(this.usersElement)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, present(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, this.presentingElement)];
                    case 3:
                        _b.sent();
                        mode = getIonMode(this);
                        if (this.swipeToClose && mode === 'ios') {
                            animationBuilder = this.leaveAnimation || config.get('modalLeave', iosLeaveAnimation);
                            ani = this.animation = animationBuilder(this.el, this.presentingElement);
                            this.gesture = createSwipeToCloseGesture(this.el, ani, function () {
                                /**
                                 * While the gesture animation is finishing
                                 * it is possible for a user to tap the backdrop.
                                 * This would result in the dismiss animation
                                 * being played again. Typically this is avoided
                                 * by setting `presented = false` on the overlay
                                 * component; however, we cannot do that here as
                                 * that would prevent the element from being
                                 * removed from the DOM.
                                 */
                                _this.gestureAnimationDismissing = true;
                                _this.animation.onFinish(function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.dismiss(undefined, 'gesture')];
                                            case 1:
                                                _a.sent();
                                                this.gestureAnimationDismissing = false;
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            });
                            this.gesture.enable(true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Dismiss the modal overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
     */
    class_1.prototype.dismiss = function (data, role) {
        return __awaiter(this, void 0, void 0, function () {
            var enteringAnimation, dismissed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.gestureAnimationDismissing && role !== 'gesture') {
                            return [2 /*return*/, false];
                        }
                        enteringAnimation = activeAnimations.get(this) || [];
                        return [4 /*yield*/, dismiss(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, this.presentingElement)];
                    case 1:
                        dismissed = _a.sent();
                        if (!dismissed) return [3 /*break*/, 3];
                        return [4 /*yield*/, detachComponent(this.delegate, this.usersElement)];
                    case 2:
                        _a.sent();
                        if (this.animation) {
                            this.animation.destroy();
                        }
                        enteringAnimation.forEach(function (ani) { return ani.destroy(); });
                        _a.label = 3;
                    case 3:
                        this.animation = undefined;
                        return [2 /*return*/, dismissed];
                }
            });
        });
    };
    /**
     * Returns a promise that resolves when the modal did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionModalDidDismiss');
    };
    /**
     * Returns a promise that resolves when the modal will dismiss.
     */
    class_1.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionModalWillDismiss');
    };
    class_1.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        return (h(Host, { "no-router": true, "aria-modal": "true", class: Object.assign((_a = {}, _a[mode] = true, _a["modal-card"] = this.presentingElement !== undefined && mode === 'ios', _a), getClassMap(this.cssClass)), style: {
                zIndex: "" + (20000 + this.overlayIndex),
            }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), h("div", { role: "dialog", class: "modal-wrapper" })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.4)}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var LIFECYCLE_MAP = {
    'ionModalDidPresent': 'ionViewDidEnter',
    'ionModalWillPresent': 'ionViewWillEnter',
    'ionModalWillDismiss': 'ionViewWillLeave',
    'ionModalDidDismiss': 'ionViewDidLeave',
};
export { Modal as ion_modal };