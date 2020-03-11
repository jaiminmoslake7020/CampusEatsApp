import { Config as CoreConfig } from '@ionic/core';
import React from 'react';
import { IonicReactProps } from '../IonicReactProps';
export declare type IonicReactExternalProps<PropType, ElementType> = PropType & Omit<React.HTMLAttributes<ElementType>, 'style'> & IonicReactProps;
export declare const createForwardRef: <PropType, ElementType>(ReactComponent: any, displayName: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<IonicReactExternalProps<PropType, ElementType>> & React.RefAttributes<ElementType>>;
export * from './attachProps';
export * from './case';
export declare const isPlatform: (platform: "ios" | "ipad" | "iphone" | "android" | "phablet" | "tablet" | "cordova" | "capacitor" | "electron" | "pwa" | "mobile" | "mobileweb" | "desktop" | "hybrid") => boolean;
export declare const getPlatforms: () => ("ios" | "ipad" | "iphone" | "android" | "phablet" | "tablet" | "cordova" | "capacitor" | "electron" | "pwa" | "mobile" | "mobileweb" | "desktop" | "hybrid")[];
export declare const getConfig: () => CoreConfig | null;