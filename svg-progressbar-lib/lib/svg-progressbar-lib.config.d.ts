import { InjectionToken, ValueProvider } from '@angular/core';
export interface SvgProgressbarLibConfig {
    radius: number;
    strokeWidth: number;
    color: string;
    background: string;
    semicycle: boolean;
    responsive: boolean;
    rounded: boolean;
    clockwise: boolean;
    currVal: number;
    total: number;
    duration: number;
    animation: string;
    delay: number;
}
export declare const SvgProgressbarLibDefaults: SvgProgressbarLibConfig;
export declare const SVG_PROGRESSBAR_LIB_CONFIG: InjectionToken<SvgProgressbarLibConfig>;
export declare const SVG_PROGRESSBAR_LIB_PROVIDER: ValueProvider;
