/// <reference types="react" />
import { PopoverOptions } from '@ionic/core';
export declare type ReactPopoverOptions = Omit<PopoverOptions, 'component' | 'componentProps'> & {
    children: React.ReactNode;
};
export declare const IonPopover: import("react").ForwardRefExoticComponent<Pick<PopoverOptions<import("@ionic/core").ComponentRef>, "mode" | "animated" | "id" | "translucent" | "cssClass" | "backdropDismiss" | "keyboardClose" | "enterAnimation" | "leaveAnimation" | "showBackdrop" | "delegate" | "event"> & {
    children: import("react").ReactNode;
} & import("./createOverlayComponent").ReactOverlayProps & {
    forwardedRef?: import("react").RefObject<HTMLIonPopoverElement> | undefined;
} & import("react").RefAttributes<HTMLIonPopoverElement>>;
