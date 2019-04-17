import { OnChanges, Renderer2, SimpleChanges, NgZone, EventEmitter } from '@angular/core';
import { SvgProgressbarLibService } from './svg-progressbar-lib.service';
import { SvgProgressbarLibConfig } from './svg-progressbar-lib.config';
import { SvgProgressbarLibEase } from './svg-progressbar-lib.ease';
export declare class SvgProgressbarLibComponent implements OnChanges {
    private _progressbarService;
    private _progressbarEase;
    private _renderer;
    private _ngZone;
    private _progressbarConfig;
    valueChanged: EventEmitter<number>;
    private pathEle;
    radius: number;
    semicycle: boolean;
    color: string;
    background: string;
    strokeWidth: number;
    rounded: boolean;
    currVal: number;
    total: number;
    duration: number;
    animation: string;
    delay: number;
    clockwise: boolean;
    responsive: boolean;
    readonly _role: string;
    readonly _width: string;
    readonly _height: string;
    readonly _paddingBottom: string;
    readonly _viewbox: string;
    private readonly _diameter;
    private _animateId;
    constructor(_progressbarService: SvgProgressbarLibService, _progressbarEase: SvgProgressbarLibEase, _renderer: Renderer2, _ngZone: NgZone, _progressbarConfig: SvgProgressbarLibConfig);
    ngOnChanges(changes: SimpleChanges): void;
    /** 获取Path元素的Transform转换 */
    _getPathTransform(): string;
    /** 通过缓动函数更新path元素路径 */
    private _animateChange;
    private _clamp;
    private _setPath;
}
