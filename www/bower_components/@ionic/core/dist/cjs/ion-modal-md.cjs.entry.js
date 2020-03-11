'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1c31ee1f.js');
const config = require('./config-03608b68.js');
const helpers = require('./helpers-5c4a2267.js');
const animation = require('./animation-b2935622.js');
const cubicBezier = require('./cubic-bezier-07b30068.js');
const index = require('./index-09c58b36.js');
require('./constants-122d7f67.js');
require('./hardware-back-button-1be0db15.js');
const overlays = require('./overlays-995ecf9e.js');
const theme = require('./theme-bb3a6213.js');
const frameworkDelegate = require('./framework-delegate-fdc1d240.js');
const index$1 = require('./index-9f22dba7.js');

// Defaults for the card swipe animation
const SwipeToCloseDefaults = {
    MIN_PRESENTING_SCALE: 0.93,
};
const createSwipeToCloseGesture = (el, animation, onDismiss) => {
    const height = el.offsetHeight;
    let isOpen = false;
    const canStart = (detail) => {
        const target = detail.event.target;
        if (target === null ||
            !target.closest) {
            return true;
        }
        const content = target.closest('ion-content');
        if (content === null) {
            return true;
        }
        // Target is in the content so we don't start the gesture.
        // We could be more nuanced here and allow it for content that
        // does not need to scroll.
        return false;
    };
    const onStart = () => {
        animation.progressStart(true, (isOpen) ? 1 : 0);
    };
    const onMove = (detail) => {
        const step = detail.deltaY / height;
        if (step < 0) {
            return;
        }
        animation.progressStep(step);
    };
    const onEnd = (detail) => {
        const velocity = detail.velocityY;
        const step = detail.deltaY / height;
        if (step < 0) {
            return;
        }
        const threshold = (detail.deltaY + velocity * 1000) / height;
        const shouldComplete = threshold >= 0.5;
        let newStepValue = (shouldComplete) ? -0.001 : 0.001;
        if (!shouldComplete) {
            animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
            newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        }
        else {
            animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
            newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }
        const duration = (shouldComplete) ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
        isOpen = shouldComplete;
        gesture.enable(false);
        animation
            .onFinish(() => {
            if (!shouldComplete) {
                gesture.enable(true);
            }
        })
            .progressEnd((shouldComplete) ? 1 : 0, newStepValue, duration);
        if (shouldComplete) {
            onDismiss();
        }
    };
    const gesture = index.createGesture({
        el,
        gestureName: 'modalSwipeToClose',
        gesturePriority: 40,
        direction: 'y',
        threshold: 10,
        canStart,
        onStart,
        onMove,
        onEnd
    });
    return gesture;
};
const computeDuration = (remaining, velocity) => {
    return helpers.clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};

/**
 * iOS Modal Enter Animation for the Card presentation style
 */
const iosEnterAnimation = (baseEl, presentingEl) => {
    // The top translate Y for the presenting element
    const backdropAnimation = animation.createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
    const wrapperAnimation = animation.createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    const baseAnimation = animation.createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
    if (presentingEl) {
        const modalTransform = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined) ? '-10px' : 'max(30px, var(--ion-safe-area-top))';
        const bodyEl = document.body;
        const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
        const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
        const presentingAnimation = animation.createAnimation()
            .beforeStyles({
            'transform': 'translateY(0)',
            'transform-origin': 'top center',
            'overflow': 'hidden'
        })
            .afterStyles({
            'transform': finalTransform
        })
            .beforeAddWrite(() => bodyEl.style.setProperty('background-color', 'black'))
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
const iosLeaveAnimation = (baseEl, presentingEl, duration = 500) => {
    const backdropAnimation = animation.createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
    const wrapperAnimation = animation.createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    const baseAnimation = animation.createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(duration)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    if (presentingEl) {
        const modalTransform = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined) ? '-10px' : 'max(30px, var(--ion-safe-area-top))';
        const bodyEl = document.body;
        const currentPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
        const presentingAnimation = animation.createAnimation()
            .addElement(presentingEl)
            .beforeClearStyles(['transform'])
            .afterClearStyles(['transform'])
            .onFinish(currentStep => {
            // only reset background color if this is the last card-style modal
            if (currentStep !== 1) {
                return;
            }
            presentingEl.style.setProperty('overflow', '');
            const numModals = Array.from(bodyEl.querySelectorAll('ion-modal')).filter(m => m.presentingElement !== undefined).length;
            if (numModals <= 1) {
                bodyEl.style.setProperty('background-color', '');
            }
        })
            .keyframes([
            { offset: 0, filter: 'contrast(0.85)', transform: `translateY(${modalTransform}) scale(${currentPresentingScale})`, borderRadius: '10px 10px 0 0' },
            { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' }
        ]);
        baseAnimation.addAnimation(presentingAnimation);
    }
    return baseAnimation;
};

/**
 * Md Modal Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
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
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    const wrapperEl = baseEl.querySelector('.modal-wrapper');
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

const Modal = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        // Whether or not modal is being dismissed via gesture
        this.gestureAnimationDismissing = false;
        this.presented = false;
        this.mode = core.getIonMode(this);
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
        this.onBackdropTap = () => {
            this.dismiss(undefined, overlays.BACKDROP);
        };
        this.onDismiss = (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            this.dismiss();
        };
        this.onLifecycle = (modalEvent) => {
            const el = this.usersElement;
            const name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                const ev = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(ev);
            }
        };
        overlays.prepareOverlay(this.el);
        this.didPresent = core.createEvent(this, "ionModalDidPresent", 7);
        this.willPresent = core.createEvent(this, "ionModalWillPresent", 7);
        this.willDismiss = core.createEvent(this, "ionModalWillDismiss", 7);
        this.didDismiss = core.createEvent(this, "ionModalDidDismiss", 7);
    }
    /**
     * Present the modal overlay after it has been created.
     */
    async present() {
        if (this.presented) {
            return;
        }
        const container = this.el.querySelector(`.modal-wrapper`);
        if (!container) {
            throw new Error('container is undefined');
        }
        const componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
        this.usersElement = await frameworkDelegate.attachComponent(this.delegate, container, this.component, ['ion-page'], componentProps);
        await index$1.deepReady(this.usersElement);
        await overlays.present(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, this.presentingElement);
        const mode = core.getIonMode(this);
        if (this.swipeToClose && mode === 'ios') {
            // All of the elements needed for the swipe gesture
            // should be in the DOM and referenced by now, except
            // for the presenting el
            const animationBuilder = this.leaveAnimation || config.config.get('modalLeave', iosLeaveAnimation);
            const ani = this.animation = animationBuilder(this.el, this.presentingElement);
            this.gesture = createSwipeToCloseGesture(this.el, ani, () => {
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
                this.gestureAnimationDismissing = true;
                this.animation.onFinish(async () => {
                    await this.dismiss(undefined, 'gesture');
                    this.gestureAnimationDismissing = false;
                });
            });
            this.gesture.enable(true);
        }
    }
    /**
     * Dismiss the modal overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
     */
    async dismiss(data, role) {
        if (this.gestureAnimationDismissing && role !== 'gesture') {
            return false;
        }
        const enteringAnimation = overlays.activeAnimations.get(this) || [];
        const dismissed = await overlays.dismiss(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, this.presentingElement);
        if (dismissed) {
            await frameworkDelegate.detachComponent(this.delegate, this.usersElement);
            if (this.animation) {
                this.animation.destroy();
            }
            enteringAnimation.forEach(ani => ani.destroy());
        }
        this.animation = undefined;
        return dismissed;
    }
    /**
     * Returns a promise that resolves when the modal did dismiss.
     */
    onDidDismiss() {
        return overlays.eventMethod(this.el, 'ionModalDidDismiss');
    }
    /**
     * Returns a promise that resolves when the modal will dismiss.
     */
    onWillDismiss() {
        return overlays.eventMethod(this.el, 'ionModalWillDismiss');
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { "no-router": true, "aria-modal": "true", class: Object.assign({ [mode]: true, [`modal-card`]: this.presentingElement !== undefined && mode === 'ios' }, theme.getClassMap(this.cssClass)), style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, core.h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), core.h("div", { role: "dialog", class: "modal-wrapper" })));
    }
    get el() { return core.getElement(this); }
    static get style() { return ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"; }
};
const LIFECYCLE_MAP = {
    'ionModalDidPresent': 'ionViewDidEnter',
    'ionModalWillPresent': 'ionViewWillEnter',
    'ionModalWillDismiss': 'ionViewWillLeave',
    'ionModalDidDismiss': 'ionViewDidLeave',
};

exports.ion_modal = Modal;