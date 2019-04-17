/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable variable-name */
import { Component, Inject, Input, HostBinding, ViewChild, ElementRef, Renderer2, NgZone, EventEmitter, Output } from '@angular/core';
import { SvgProgressbarLibService } from './svg-progressbar-lib.service';
import { SVG_PROGRESSBAR_LIB_CONFIG } from './svg-progressbar-lib.config';
import { SvgProgressbarLibEase } from './svg-progressbar-lib.ease';
export class SvgProgressbarLibComponent {
    /**
     * @param {?} _progressbarService
     * @param {?} _progressbarEase
     * @param {?} _renderer
     * @param {?} _ngZone
     * @param {?} _progressbarConfig
     */
    constructor(_progressbarService, _progressbarEase, _renderer, _ngZone, _progressbarConfig) {
        this._progressbarService = _progressbarService;
        this._progressbarEase = _progressbarEase;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._progressbarConfig = _progressbarConfig;
        this.valueChanged = new EventEmitter();
        this.radius = this._progressbarConfig.radius;
        this.semicycle = this._progressbarConfig.semicycle;
        this.color = this._progressbarConfig.color;
        this.background = this._progressbarConfig.background;
        this.strokeWidth = this._progressbarConfig.strokeWidth;
        this.rounded = this._progressbarConfig.rounded;
        this.currVal = this._progressbarConfig.currVal;
        this.total = this._progressbarConfig.total;
        this.duration = this._progressbarConfig.duration;
        this.animation = this._progressbarConfig.animation;
        this.delay = this._progressbarConfig.delay;
        this.clockwise = this._progressbarConfig.clockwise;
        this.responsive = this._progressbarConfig.responsive;
        this._animateId = 0;
    }
    /**
     * @return {?}
     */
    get _role() {
        return 'svg-progressbar';
    }
    /**
     * @return {?}
     */
    get _width() {
        return this.responsive ? '' : `${this._diameter}px`;
    }
    /**
     * @return {?}
     */
    get _height() {
        if (!this.responsive) {
            return `${this.semicycle ? this.radius : this._diameter}px`;
        }
    }
    /**
     * @return {?}
     */
    get _paddingBottom() {
        if (this.responsive) {
            return this.semicycle ? '50%' : '100%';
        }
    }
    /**
     * @return {?}
     */
    get _viewbox() {
        /** @type {?} */
        const diameter = this._diameter;
        return `0 0 ${diameter} ${this.semicycle ? this.radius : diameter}`;
    }
    /**
     * @private
     * @return {?}
     */
    get _diameter() {
        return this.radius * 2;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.currVal) {
            this._animateChange(changes.currVal.previousValue, changes.currVal.currentValue);
        }
        else {
            this._setPath(this.currVal);
        }
    }
    /**
     * 获取Path元素的Transform转换
     * @return {?}
     */
    _getPathTransform() {
        if (this.semicycle) {
            return this.clockwise
                ? `translate(0, ${this._diameter}) rotate(-90)`
                : `translate(${this._diameter}, ${this._diameter}) rotate(90) scale(-1,1)`;
        }
        else if (!this.clockwise) {
            return `scale(-1, 1) translate(${-this._diameter} 0)`;
        }
    }
    /**
     * 通过缓动函数更新path元素路径
     * @private
     * @param {?} prev
     * @param {?} curr
     * @return {?}
     */
    _animateChange(prev, curr) {
        if (typeof prev !== 'number') {
            prev = 0;
        }
        /** @type {?} */
        const from = this._clamp(prev);
        /** @type {?} */
        const to = this._clamp(curr);
        /** @type {?} */
        const valueDiff = to - from;
        /** @type {?} */
        const self = this;
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const start = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const id = ++self._animateId;
                /** @type {?} */
                const startTime = self._progressbarService.getTimestamp();
                requestAnimationFrame((/**
                 * @return {?}
                 */
                function animation() {
                    /** @type {?} */
                    const currentTime = Math.min(self._progressbarService.getTimestamp() - startTime, self.duration);
                    /** @type {?} */
                    const value = self._progressbarEase[self.animation](currentTime, from, valueDiff, self.duration);
                    self._setPath(value);
                    self.valueChanged.emit(value);
                    if (id === self._animateId && currentTime < self.duration) {
                        requestAnimationFrame(animation);
                    }
                }));
            });
            if (self.delay > 0) {
                setTimeout(start, self.delay);
            }
            else {
                start();
            }
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _clamp(value) {
        return Math.max(0, Math.min(value || 0, this.total));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setPath(value) {
        /** @type {?} */
        const d = this._progressbarService.getPathArc(value, this.total, this.radius, this.radius - this.strokeWidth / 2, this.semicycle);
        this._renderer.setAttribute(this.pathEle.nativeElement, 'd', d);
    }
}
SvgProgressbarLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'nlq-svg-progressbar-lib',
                template: "<svg [attr.viewBox]=\"_viewbox\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <circle\n    fill=\"none\"\n    [attr.cx]=\"radius\"\n    [attr.cy]=\"radius\"\n    [attr.r]=\"radius - strokeWidth / 2\"\n    [attr.stroke]=\"background\"\n    [attr.stroke-width]=\"strokeWidth\"\n  />\n  <path\n    #path\n    fill=\"none\"\n    [attr.stroke]=\"color\"\n    [attr.stroke-width]=\"strokeWidth\"\n    [attr.stroke-linecap]=\"rounded ? 'round' : ''\"\n    [attr.transform]=\"_getPathTransform()\"\n  />\n</svg>\n",
                styles: [":host{position:relative;display:block;overflow:hidden}:host(.responsive){width:100%;padding-bottom:100%}:host(.responsive) svg{position:absolute;top:0;left:0;width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
SvgProgressbarLibComponent.ctorParameters = () => [
    { type: SvgProgressbarLibService },
    { type: SvgProgressbarLibEase },
    { type: Renderer2 },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [SVG_PROGRESSBAR_LIB_CONFIG,] }] }
];
SvgProgressbarLibComponent.propDecorators = {
    valueChanged: [{ type: Output }],
    pathEle: [{ type: ViewChild, args: ['path',] }],
    radius: [{ type: Input }],
    semicycle: [{ type: Input }],
    color: [{ type: Input }],
    background: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    rounded: [{ type: Input }],
    currVal: [{ type: Input }],
    total: [{ type: Input }],
    duration: [{ type: Input }],
    animation: [{ type: Input }],
    delay: [{ type: Input }],
    clockwise: [{ type: Input }],
    responsive: [{ type: Input }, { type: HostBinding, args: ['class.responsive',] }],
    _role: [{ type: HostBinding, args: ['attr.role',] }],
    _width: [{ type: HostBinding, args: ['style.width',] }],
    _height: [{ type: HostBinding, args: ['style.height',] }],
    _paddingBottom: [{ type: HostBinding, args: ['style.padding-bottom',] }]
};
if (false) {
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.valueChanged;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibComponent.prototype.pathEle;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.radius;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.semicycle;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.color;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.background;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.strokeWidth;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.rounded;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.currVal;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.total;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.duration;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.animation;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.delay;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.clockwise;
    /** @type {?} */
    SvgProgressbarLibComponent.prototype.responsive;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibComponent.prototype._animateId;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibComponent.prototype._progressbarService;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibComponent.prototype._progressbarEase;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibComponent.prototype._progressbarConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXByb2dyZXNzYmFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdmctcHJvZ3Jlc3NiYXItbGliLyIsInNvdXJjZXMiOlsibGliL3N2Zy1wcm9ncmVzc2Jhci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBRU4sS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQTJCLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPbkUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7SUFzRHJDLFlBQ1UsbUJBQTZDLEVBQzdDLGdCQUF1QyxFQUN2QyxTQUFvQixFQUNwQixPQUFlLEVBQ3FCLGtCQUEyQztRQUovRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTBCO1FBQzdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBdUI7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3FCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUExRHhFLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFFakUsV0FBTSxHQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDaEQsY0FBUyxHQUFZLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFDdkQsVUFBSyxHQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDOUMsZUFBVSxHQUFXLElBQUksQ0FBQyxrQkFB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QVcsU0FBQyxhQUFhO3NCQUt6QixXQUFXLFNBQUMsY0FBYzs2QkFPMUIsV0FBVyxTQUFDLHNCQUFzQjs7OztJQW5DbkMsa0RBQWlGOzs7OztJQUNqRiw2Q0FBK0Q7O0lBQy9ELDRDQUFnRTs7SUFDaEUsK0NBQXVFOztJQUN2RSwyQ0FBOEQ7O0lBQzlELGdEQUF3RTs7SUFDeEUsaURBQTBFOztJQUMxRSw2Q0FBbUU7O0lBQ25FLDZDQUFrRTs7SUFDbEUsMkNBQThEOztJQUM5RCw4Q0FBb0U7O0lBQ3BFLCtDQUFzRTs7SUFDdEUsMkNBQThEOztJQUM5RCwrQ0FBdUU7O0lBQ3ZFLGdEQUVnRTs7Ozs7SUFtQ2hFLGdEQUErQjs7Ozs7SUFHN0IseURBQXFEOzs7OztJQUNyRCxzREFBK0M7Ozs7O0lBQy9DLCtDQUE0Qjs7Ozs7SUFDNUIsNkNBQXVCOzs7OztJQUN2Qix3REFBdUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSB2YXJpYWJsZS1uYW1lICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN2Z1Byb2dyZXNzYmFyTGliU2VydmljZSB9IGZyb20gJy4vc3ZnLXByb2dyZXNzYmFyLWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IFN2Z1Byb2dyZXNzYmFyTGliQ29uZmlnLCBTVkdfUFJPR1JFU1NCQVJfTElCX0NPTkZJRyB9IGZyb20gJy4vc3ZnLXByb2dyZXNzYmFyLWxpYi5jb25maWcnO1xuaW1wb3J0IHsgU3ZnUHJvZ3Jlc3NiYXJMaWJFYXNlIH0gZnJvbSAnLi9zdmctcHJvZ3Jlc3NiYXItbGliLmVhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdubHEtc3ZnLXByb2dyZXNzYmFyLWxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmctcHJvZ3Jlc3NiYXItbGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZnLXByb2dyZXNzYmFyLWxpYi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1Byb2dyZXNzYmFyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQE91dHB1dCgpIHB1YmxpYyB2YWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBWaWV3Q2hpbGQoJ3BhdGgnKSBwcml2YXRlIHBhdGhFbGU6IEVsZW1lbnRSZWY8U1ZHUGF0aEVsZW1lbnQ+O1xuICBASW5wdXQoKSBwdWJsaWMgcmFkaXVzOiBudW1iZXIgPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5yYWRpdXM7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZW1pY3ljbGU6IGJvb2xlYW4gPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5zZW1pY3ljbGU7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcuY29sb3I7XG4gIEBJbnB1dCgpIHB1YmxpYyBiYWNrZ3JvdW5kOiBzdHJpbmcgPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5iYWNrZ3JvdW5kO1xuICBASW5wdXQoKSBwdWJsaWMgc3Ryb2tlV2lkdGg6IG51bWJlciA9IHRoaXMuX3Byb2dyZXNzYmFyQ29uZmlnLnN0cm9rZVdpZHRoO1xuICBASW5wdXQoKSBwdWJsaWMgcm91bmRlZDogYm9vbGVhbiA9IHRoaXMuX3Byb2dyZXNzYmFyQ29uZmlnLnJvdW5kZWQ7XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXJyVmFsOiBudW1iZXIgPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5jdXJyVmFsO1xuICBASW5wdXQoKSBwdWJsaWMgdG90YWw6IG51bWJlciA9IHRoaXMuX3Byb2dyZXNzYmFyQ29uZmlnLnRvdGFsO1xuICBASW5wdXQoKSBwdWJsaWMgZHVyYXRpb246IG51bWJlciA9IHRoaXMuX3Byb2dyZXNzYmFyQ29uZmlnLmR1cmF0aW9uO1xuICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0aW9uOiBzdHJpbmcgPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5hbmltYXRpb247XG4gIEBJbnB1dCgpIHB1YmxpYyBkZWxheTogbnVtYmVyID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcuZGVsYXk7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbG9ja3dpc2U6IGJvb2xlYW4gPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5jbG9ja3dpc2U7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVzcG9uc2l2ZScpXG4gIHB1YmxpYyByZXNwb25zaXZlOiBib29sZWFuID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcucmVzcG9uc2l2ZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyBnZXQgX3JvbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3N2Zy1wcm9ncmVzc2Jhcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgcHVibGljIGdldCBfd2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zaXZlID8gJycgOiBgJHt0aGlzLl9kaWFtZXRlcn1weGA7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIHB1YmxpYyBnZXQgX2hlaWdodCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5yZXNwb25zaXZlKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5zZW1pY3ljbGUgPyB0aGlzLnJhZGl1cyA6IHRoaXMuX2RpYW1ldGVyfXB4YDtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctYm90dG9tJylcbiAgcHVibGljIGdldCBfcGFkZGluZ0JvdHRvbSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnJlc3BvbnNpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbWljeWNsZSA/ICc1MCUnIDogJzEwMCUnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgX3ZpZXdib3goKTogc3RyaW5nIHtcbiAgICBjb25zdCBkaWFtZXRlciA9IHRoaXMuX2RpYW1ldGVyO1xuICAgIHJldHVybiBgMCAwICR7ZGlhbWV0ZXJ9ICR7dGhpcy5zZW1pY3ljbGUgPyB0aGlzLnJhZGl1cyA6IGRpYW1ldGVyfWA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZGlhbWV0ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXMgKiAyO1xuICB9XG5cbiAgcHJpdmF0ZSBfYW5pbWF0ZUlkOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9wcm9ncmVzc2JhclNlcnZpY2U6IFN2Z1Byb2dyZXNzYmFyTGliU2VydmljZSxcbiAgICBwcml2YXRlIF9wcm9ncmVzc2JhckVhc2U6IFN2Z1Byb2dyZXNzYmFyTGliRWFzZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoU1ZHX1BST0dSRVNTQkFSX0xJQl9DT05GSUcpIHByaXZhdGUgX3Byb2dyZXNzYmFyQ29uZmlnOiBTdmdQcm9ncmVzc2JhckxpYkNvbmZpZ1xuICApIHt9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5jdXJyVmFsKSB7XG4gICAgICB0aGlzLl9hbmltYXRlQ2hhbmdlKGNoYW5nZXMuY3VyclZhbC5wcmV2aW91c1ZhbHVlLCBjaGFuZ2VzLmN1cnJWYWwuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0UGF0aCh0aGlzLmN1cnJWYWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5ZQYXRo5YWD57Sg55qEVHJhbnNmb3Jt6L2s5o2iICovXG4gIHB1YmxpYyBfZ2V0UGF0aFRyYW5zZm9ybSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNlbWljeWNsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xvY2t3aXNlXG4gICAgICAgID8gYHRyYW5zbGF0ZSgwLCAke3RoaXMuX2RpYW1ldGVyfSkgcm90YXRlKC05MClgXG4gICAgICAgIDogYHRyYW5zbGF0ZSgke3RoaXMuX2RpYW1ldGVyfSwgJHt0aGlzLl9kaWFtZXRlcn0pIHJvdGF0ZSg5MCkgc2NhbGUoLTEsMSlgO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuY2xvY2t3aXNlKSB7XG4gICAgICByZXR1cm4gYHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoJHstdGhpcy5fZGlhbWV0ZXJ9IDApYDtcbiAgICB9XG4gIH1cblxuICAvKiog6YCa6L+H57yT5Yqo5Ye95pWw5pu05pawcGF0aOWFg+e0oOi3r+W+hCAqL1xuICBwcml2YXRlIF9hbmltYXRlQ2hhbmdlKHByZXY6IG51bWJlciwgY3VycjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBwcmV2ICE9PSAnbnVtYmVyJykge1xuICAgICAgcHJldiA9IDA7XG4gICAgfVxuICAgIGNvbnN0IGZyb20gPSB0aGlzLl9jbGFtcChwcmV2KTtcbiAgICBjb25zdCB0byA9IHRoaXMuX2NsYW1wKGN1cnIpO1xuICAgIGNvbnN0IHZhbHVlRGlmZiA9IHRvIC0gZnJvbTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSArK3NlbGYuX2FuaW1hdGVJZDtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gc2VsZi5fcHJvZ3Jlc3NiYXJTZXJ2aWNlLmdldFRpbWVzdGFtcCgpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBhbmltYXRpb24oKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBNYXRoLm1pbihzZWxmLl9wcm9ncmVzc2JhclNlcnZpY2UuZ2V0VGltZXN0YW1wKCkgLSBzdGFydFRpbWUsIHNlbGYuZHVyYXRpb24pO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2VsZi5fcHJvZ3Jlc3NiYXJFYXNlW3NlbGYuYW5pbWF0aW9uXShjdXJyZW50VGltZSwgZnJvbSwgdmFsdWVEaWZmLCBzZWxmLmR1cmF0aW9uKTtcblxuICAgICAgICAgIHNlbGYuX3NldFBhdGgodmFsdWUpO1xuICAgICAgICAgIHNlbGYudmFsdWVDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGlkID09PSBzZWxmLl9hbmltYXRlSWQgJiYgY3VycmVudFRpbWUgPCBzZWxmLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGYuZGVsYXkgPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoc3RhcnQsIHNlbGYuZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsYW1wKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbih2YWx1ZSB8fCAwLCB0aGlzLnRvdGFsKSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYXRoKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkID0gdGhpcy5fcHJvZ3Jlc3NiYXJTZXJ2aWNlLmdldFBhdGhBcmMoXG4gICAgICB2YWx1ZSxcbiAgICAgIHRoaXMudG90YWwsXG4gICAgICB0aGlzLnJhZGl1cyxcbiAgICAgIHRoaXMucmFkaXVzIC0gdGhpcy5zdHJva2VXaWR0aCAvIDIsXG4gICAgICB0aGlzLnNlbWljeWNsZVxuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMucGF0aEVsZS5uYXRpdmVFbGVtZW50LCAnZCcsIGQpO1xuICB9XG59XG4iXX0=