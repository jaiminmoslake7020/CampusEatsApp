import { __awaiter, __generator } from "tslib";
import { r as registerInstance, c as getIonMode, d as createEvent, h, H as Host, e as getElement } from './core-0a8d4d2e.js';
import './config-3c7f3790.js';
import './helpers-46f4a262.js';
import { c as createAnimation } from './animation-56279521.js';
import './constants-3c3e1099.js';
import './hardware-back-button-1ed0083a.js';
import { B as BACKDROP, d as prepareOverlay, e as present, f as dismiss, g as eventMethod } from './overlays-e336664a.js';
import { g as getClassMap } from './theme-18cbe2cc.js';
import { a as attachComponent, d as detachComponent } from './framework-delegate-c2e2e1f4.js';
import { d as deepReady } from './index-4e2fa3c6.js';
/**
 * iOS Popover Enter Animation
 */
var iosEnterAnimation = function (baseEl, ev) {
    var originY = 'top';
    var originX = 'left';
    var contentEl = baseEl.querySelector('.popover-content');
    var contentDimentions = contentEl.getBoundingClientRect();
    var contentWidth = contentDimentions.width;
    var contentHeight = contentDimentions.height;
    var bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;
    var bodyHeight = baseEl.ownerDocument.defaultView.innerHeight;
    // If ev was passed, use that for target element
    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    var targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
    var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
    var targetWidth = (targetDim && targetDim.width) || 0;
    var targetHeight = (targetDim && targetDim.height) || 0;
    var arrowEl = baseEl.querySelector('.popover-arrow');
    var arrowDim = arrowEl.getBoundingClientRect();
    var arrowWidth = arrowDim.width;
    var arrowHeight = arrowDim.height;
    if (targetDim == null) {
        arrowEl.style.display = 'none';
    }
    var arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
    };
    var popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    //
    var checkSafeAreaLeft = false;
    var checkSafeAreaRight = false;
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    // 25 is a random/arbitrary number. It seems to work fine for ios11
    // and iPhoneX. Is it perfect? No. Does it work? Yes.
    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
        // Ok, so we're on the right side of the screen,
        // but now we need to make sure we're still a bit further right
        // cus....notchurally... Again, 25 is random. It works tho
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
    }
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
    }
    arrowEl.style.top = arrowCSS.top + 'px';
    arrowEl.style.left = arrowCSS.left + 'px';
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    if (checkSafeAreaLeft) {
        contentEl.style.left = "calc(" + popoverCSS.left + "px + var(--ion-safe-area-left, 0px))";
    }
    if (checkSafeAreaRight) {
        contentEl.style.left = "calc(" + popoverCSS.left + "px - var(--ion-safe-area-right, 0px))";
    }
    contentEl.style.transformOrigin = originY + ' ' + originX;
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.01, 1);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var POPOVER_IOS_BODY_PADDING = 5;
/**
 * iOS Popover Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Popover Enter Animation
 */
var mdEnterAnimation = function (baseEl, ev) {
    var POPOVER_MD_BODY_PADDING = 12;
    var doc = baseEl.ownerDocument;
    var isRTL = doc.dir === 'rtl';
    var originY = 'top';
    var originX = isRTL ? 'right' : 'left';
    var contentEl = baseEl.querySelector('.popover-content');
    var contentDimentions = contentEl.getBoundingClientRect();
    var contentWidth = contentDimentions.width;
    var contentHeight = contentDimentions.height;
    var bodyWidth = doc.defaultView.innerWidth;
    var bodyHeight = doc.defaultView.innerHeight;
    // If ev was passed, use that for target element
    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    // As per MD spec, by default position the popover below the target (trigger) element
    var targetTop = targetDim != null && 'bottom' in targetDim
        ? targetDim.bottom
        : bodyHeight / 2 - contentHeight / 2;
    var targetLeft = targetDim != null && 'left' in targetDim
        ? isRTL
            ? targetDim.left - contentWidth + targetDim.width
            : targetDim.left
        : bodyWidth / 2 - contentWidth / 2;
    var targetHeight = (targetDim && targetDim.height) || 0;
    var popoverCSS = {
        top: targetTop,
        left: targetLeft
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING;
        // Same origin in this case for both LTR & RTL
        // Note: in LTR, originX is already 'left'
        originX = 'left';
    }
    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
        bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
        // Same origin in this case for both LTR & RTL
        // Note: in RTL, originX is already 'right'
        originX = 'right';
    }
    // If the popover when popped down stretches past bottom of screen,
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight - targetHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
    }
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    var contentAnimation = createAnimation();
    var viewportAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.01, 1);
    contentAnimation
        .addElement(contentEl)
        .beforeStyles({
        'top': popoverCSS.top + "px",
        'left': popoverCSS.left + "px",
        'transform-origin': originY + " " + originX
    })
        .fromTo('transform', 'scale(0.001)', 'scale(1)');
    viewportAnimation
        .addElement(baseEl.querySelector('.popover-viewport'))
        .fromTo('opacity', 0.01, 1);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(300)
        .addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
};
/**
 * Md Popover Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var Popover = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.presented = false;
        this.mode = getIonMode(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * If `true`, the popover will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the popover.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the popover will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the popover will animate.
         */
        this.animated = true;
        this.onDismiss = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            _this.dismiss();
        };
        this.onBackdropTap = function () {
            _this.dismiss(undefined, BACKDROP);
        };
        this.onLifecycle = function (modalEvent) {
            var el = _this.usersElement;
            var name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                var event = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(event);
            }
        };
        prepareOverlay(this.el);
        this.didPresent = createEvent(this, "ionPopoverDidPresent", 7);
        this.willPresent = createEvent(this, "ionPopoverWillPresent", 7);
        this.willDismiss = createEvent(this, "ionPopoverWillDismiss", 7);
        this.didDismiss = createEvent(this, "ionPopoverDidDismiss", 7);
    }
    /**
     * Present the popover overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return __awaiter(this, void 0, void 0, function () {
            var container, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.presented) {
                            return [2 /*return*/];
                        }
                        container = this.el.querySelector('.popover-content');
                        if (!container) {
                            throw new Error('container is undefined');
                        }
                        data = Object.assign(Object.assign({}, this.componentProps), { popover: this.el });
                        _a = this;
                        return [4 /*yield*/, attachComponent(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data)];
                    case 1:
                        _a.usersElement = _b.sent();
                        return [4 /*yield*/, deepReady(this.usersElement)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, present(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event)];
                }
            });
        });
    };
    /**
     * Dismiss the popover overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
     */
    class_1.prototype.dismiss = function (data, role) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldDismiss;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dismiss(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event)];
                    case 1:
                        shouldDismiss = _a.sent();
                        if (!shouldDismiss) return [3 /*break*/, 3];
                        return [4 /*yield*/, detachComponent(this.delegate, this.usersElement)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, shouldDismiss];
                }
            });
        });
    };
    /**
     * Returns a promise that resolves when the popover did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionPopoverDidDismiss');
    };
    /**
     * Returns a promise that resolves when the popover will dismiss.
     */
    class_1.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionPopoverWillDismiss');
    };
    class_1.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        var onLifecycle = this.onLifecycle;
        return (h(Host, { "aria-modal": "true", "no-router": true, style: {
                zIndex: "" + (20000 + this.overlayIndex),
            }, class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), (_a = {}, _a[mode] = true, _a['popover-translucent'] = this.translucent, _a)), onIonPopoverDidPresent: onLifecycle, onIonPopoverWillPresent: onLifecycle, onIonPopoverWillDismiss: onLifecycle, onIonPopoverDidDismiss: onLifecycle, onIonDismiss: this.onDismiss, onIonBackdropTap: this.onBackdropTap }, h("ion-backdrop", { tappable: this.backdropDismiss, visible: this.showBackdrop }), h("div", { class: "popover-wrapper" }, h("div", { class: "popover-arrow" }), h("div", { class: "popover-content" }))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var LIFECYCLE_MAP = {
    'ionPopoverDidPresent': 'ionViewDidEnter',
    'ionPopoverWillPresent': 'ionViewWillEnter',
    'ionPopoverWillDismiss': 'ionViewWillLeave',
    'ionPopoverDidDismiss': 'ionViewDidLeave',
};
export { Popover as ion_popover };
