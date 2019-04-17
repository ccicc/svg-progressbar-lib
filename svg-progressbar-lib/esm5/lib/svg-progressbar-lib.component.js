/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable variable-name */
import { Component, Inject, Input, HostBinding, ViewChild, ElementRef, Renderer2, NgZone, EventEmitter, Output } from '@angular/core';
import { SvgProgressbarLibService } from './svg-progressbar-lib.service';
import { SVG_PROGRESSBAR_LIB_CONFIG } from './svg-progressbar-lib.config';
import { SvgProgressbarLibEase } from './svg-progressbar-lib.ease';
var SvgProgressbarLibComponent = /** @class */ (function () {
    function SvgProgressbarLibComponent(_progressbarService, _progressbarEase, _renderer, _ngZone, _progressbarConfig) {
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
    Object.defineProperty(SvgProgressbarLibComponent.prototype, "_role", {
        get: /**
         * @return {?}
         */
        function () {
            return 'svg-progressbar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvgProgressbarLibComponent.prototype, "_width", {
        get: /**
         * @return {?}
         */
        function () {
            return this.responsive ? '' : this._diameter + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvgProgressbarLibComponent.prototype, "_height", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.responsive) {
                return (this.semicycle ? this.radius : this._diameter) + "px";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvgProgressbarLibComponent.prototype, "_paddingBottom", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.responsive) {
                return this.semicycle ? '50%' : '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvgProgressbarLibComponent.prototype, "_viewbox", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var diameter = this._diameter;
            return "0 0 " + diameter + " " + (this.semicycle ? this.radius : diameter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvgProgressbarLibComponent.prototype, "_diameter", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.radius * 2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    SvgProgressbarLibComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.currVal) {
            this._animateChange(changes.currVal.previousValue, changes.currVal.currentValue);
        }
        else {
            this._setPath(this.currVal);
        }
    };
    /** 获取Path元素的Transform转换 */
    /**
     * 获取Path元素的Transform转换
     * @return {?}
     */
    SvgProgressbarLibComponent.prototype._getPathTransform = /**
     * 获取Path元素的Transform转换
     * @return {?}
     */
    function () {
        if (this.semicycle) {
            return this.clockwise
                ? "translate(0, " + this._diameter + ") rotate(-90)"
                : "translate(" + this._diameter + ", " + this._diameter + ") rotate(90) scale(-1,1)";
        }
        else if (!this.clockwise) {
            return "scale(-1, 1) translate(" + -this._diameter + " 0)";
        }
    };
    /** 通过缓动函数更新path元素路径 */
    /**
     * 通过缓动函数更新path元素路径
     * @private
     * @param {?} prev
     * @param {?} curr
     * @return {?}
     */
    SvgProgressbarLibComponent.prototype._animateChange = /**
     * 通过缓动函数更新path元素路径
     * @private
     * @param {?} prev
     * @param {?} curr
     * @return {?}
     */
    function (prev, curr) {
        if (typeof prev !== 'number') {
            prev = 0;
        }
        /** @type {?} */
        var from = this._clamp(prev);
        /** @type {?} */
        var to = this._clamp(curr);
        /** @type {?} */
        var valueDiff = to - from;
        /** @type {?} */
        var self = this;
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var start = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var id = ++self._animateId;
                /** @type {?} */
                var startTime = self._progressbarService.getTimestamp();
                requestAnimationFrame((/**
                 * @return {?}
                 */
                function animation() {
                    /** @type {?} */
                    var currentTime = Math.min(self._progressbarService.getTimestamp() - startTime, self.duration);
                    /** @type {?} */
                    var value = self._progressbarEase[self.animation](currentTime, from, valueDiff, self.duration);
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
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    SvgProgressbarLibComponent.prototype._clamp = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Math.max(0, Math.min(value || 0, this.total));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    SvgProgressbarLibComponent.prototype._setPath = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var d = this._progressbarService.getPathArc(value, this.total, this.radius, this.radius - this.strokeWidth / 2, this.semicycle);
        this._renderer.setAttribute(this.pathEle.nativeElement, 'd', d);
    };
    SvgProgressbarLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nlq-svg-progressbar-lib',
                    template: "<svg [attr.viewBox]=\"_viewbox\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <circle\n    fill=\"none\"\n    [attr.cx]=\"radius\"\n    [attr.cy]=\"radius\"\n    [attr.r]=\"radius - strokeWidth / 2\"\n    [attr.stroke]=\"background\"\n    [attr.stroke-width]=\"strokeWidth\"\n  />\n  <path\n    #path\n    fill=\"none\"\n    [attr.stroke]=\"color\"\n    [attr.stroke-width]=\"strokeWidth\"\n    [attr.stroke-linecap]=\"rounded ? 'round' : ''\"\n    [attr.transform]=\"_getPathTransform()\"\n  />\n</svg>\n",
                    styles: [":host{position:relative;display:block;overflow:hidden}:host(.responsive){width:100%;padding-bottom:100%}:host(.responsive) svg{position:absolute;top:0;left:0;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    SvgProgressbarLibComponent.ctorParameters = function () { return [
        { type: SvgProgressbarLibService },
        { type: SvgProgressbarLibEase },
        { type: Renderer2 },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [SVG_PROGRESSBAR_LIB_CONFIG,] }] }
    ]; };
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
    return SvgProgressbarLibComponent;
}());
export { SvgProgressbarLibComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXByb2dyZXNzYmFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdmctcHJvZ3Jlc3NiYXItbGliLyIsInNvdXJjZXMiOlsibGliL3N2Zy1wcm9ncmVzc2Jhci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBRU4sS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQTJCLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkU7SUEyREUsb0NBQ1UsbUJBQTZDLEVBQzdDLGdCQUF1QyxFQUN2QyxTQUFvQixFQUNwQixPQUFlLEVBQ3FCLGtCQUEyQztRQUovRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTBCO1FBQzdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBdUI7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3FCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUExRHhFLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFFakUsV0FBTSxHQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDaEQsY0FBUyxHQUFZLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFDdkQsVUFBSyxHQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDOUMsZUFBVSxHQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7UUFDeEQs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Q0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxrQkFBa0I7d0JBRzlCLFdBQVcsU0FBQyxXQUFXO3lCQUt2QixXQUFXLFNBQUMsYUFBYTswQkFLekIsV0FBVyxTQUFDLGNBQWM7aUNBTzFCLFdBQVcsU0FBQyxzQkFBc0I7O0lBK0ZyQyxpQ0FBQztDQUFBLEFBeElELElBd0lDO1NBbklZLDBCQUEwQjs7O0lBQ3JDLGtEQUFpRjs7Ozs7SUFDakYsNkNBQStEOztJQUMvRCw0Q0FBZ0U7O0lBQ2hFLCtDQUF1RTs7SUFDdkUsMkNBQThEOztJQUM5RCxnREFBd0U7O0lBQ3hFLGlEQUEwRTs7SUFDMUUsNkNBQW1FOztJQUNuRSw2Q0FBa0U7O0lBQ2xFLDJDQUE4RDs7SUFDOUQsOENBQW9FOztJQUNwRSwrQ0FBc0U7O0lBQ3RFLDJDQUE4RDs7SUFDOUQsK0NBQXVFOztJQUN2RSxnREFFZ0U7Ozs7O0lBbUNoRSxnREFBK0I7Ozs7O0lBRzdCLHlEQUFxRDs7Ozs7SUFDckQsc0RBQStDOzs7OztJQUMvQywrQ0FBNEI7Ozs7O0lBQzVCLDZDQUF1Qjs7Ozs7SUFDdkIsd0RBQXVGIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgdmFyaWFibGUtbmFtZSAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdmdQcm9ncmVzc2JhckxpYlNlcnZpY2UgfSBmcm9tICcuL3N2Zy1wcm9ncmVzc2Jhci1saWIuc2VydmljZSc7XG5pbXBvcnQgeyBTdmdQcm9ncmVzc2JhckxpYkNvbmZpZywgU1ZHX1BST0dSRVNTQkFSX0xJQl9DT05GSUcgfSBmcm9tICcuL3N2Zy1wcm9ncmVzc2Jhci1saWIuY29uZmlnJztcbmltcG9ydCB7IFN2Z1Byb2dyZXNzYmFyTGliRWFzZSB9IGZyb20gJy4vc3ZnLXByb2dyZXNzYmFyLWxpYi5lYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmxxLXN2Zy1wcm9ncmVzc2Jhci1saWInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnLXByb2dyZXNzYmFyLWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Zy1wcm9ncmVzc2Jhci1saWIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdQcm9ncmVzc2JhckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBPdXRwdXQoKSBwdWJsaWMgdmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAVmlld0NoaWxkKCdwYXRoJykgcHJpdmF0ZSBwYXRoRWxlOiBFbGVtZW50UmVmPFNWR1BhdGhFbGVtZW50PjtcbiAgQElucHV0KCkgcHVibGljIHJhZGl1czogbnVtYmVyID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcucmFkaXVzO1xuICBASW5wdXQoKSBwdWJsaWMgc2VtaWN5Y2xlOiBib29sZWFuID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcuc2VtaWN5Y2xlO1xuICBASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZyA9IHRoaXMuX3Byb2dyZXNzYmFyQ29uZmlnLmNvbG9yO1xuICBASW5wdXQoKSBwdWJsaWMgYmFja2dyb3VuZDogc3RyaW5nID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcuYmFja2dyb3VuZDtcbiAgQElucHV0KCkgcHVibGljIHN0cm9rZVdpZHRoOiBudW1iZXIgPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5zdHJva2VXaWR0aDtcbiAgQElucHV0KCkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5yb3VuZGVkO1xuICBASW5wdXQoKSBwdWJsaWMgY3VyclZhbDogbnVtYmVyID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcuY3VyclZhbDtcbiAgQElucHV0KCkgcHVibGljIHRvdGFsOiBudW1iZXIgPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy50b3RhbDtcbiAgQElucHV0KCkgcHVibGljIGR1cmF0aW9uOiBudW1iZXIgPSB0aGlzLl9wcm9ncmVzc2JhckNvbmZpZy5kdXJhdGlvbjtcbiAgQElucHV0KCkgcHVibGljIGFuaW1hdGlvbjogc3RyaW5nID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcuYW5pbWF0aW9uO1xuICBASW5wdXQoKSBwdWJsaWMgZGVsYXk6IG51bWJlciA9IHRoaXMuX3Byb2dyZXNzYmFyQ29uZmlnLmRlbGF5O1xuICBASW5wdXQoKSBwdWJsaWMgY2xvY2t3aXNlOiBib29sZWFuID0gdGhpcy5fcHJvZ3Jlc3NiYXJDb25maWcuY2xvY2t3aXNlO1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJlc3BvbnNpdmUnKVxuICBwdWJsaWMgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRoaXMuX3Byb2dyZXNzYmFyQ29uZmlnLnJlc3BvbnNpdmU7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgZ2V0IF9yb2xlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdzdmctcHJvZ3Jlc3NiYXInO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIHB1YmxpYyBnZXQgX3dpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2l2ZSA/ICcnIDogYCR7dGhpcy5fZGlhbWV0ZXJ9cHhgO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICBwdWJsaWMgZ2V0IF9oZWlnaHQoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMucmVzcG9uc2l2ZSkge1xuICAgICAgcmV0dXJuIGAke3RoaXMuc2VtaWN5Y2xlID8gdGhpcy5yYWRpdXMgOiB0aGlzLl9kaWFtZXRlcn1weGA7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWJvdHRvbScpXG4gIHB1YmxpYyBnZXQgX3BhZGRpbmdCb3R0b20oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW1pY3ljbGUgPyAnNTAlJyA6ICcxMDAlJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IF92aWV3Ym94KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZGlhbWV0ZXIgPSB0aGlzLl9kaWFtZXRlcjtcbiAgICByZXR1cm4gYDAgMCAke2RpYW1ldGVyfSAke3RoaXMuc2VtaWN5Y2xlID8gdGhpcy5yYWRpdXMgOiBkaWFtZXRlcn1gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2RpYW1ldGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzICogMjtcbiAgfVxuXG4gIHByaXZhdGUgX2FuaW1hdGVJZDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcHJvZ3Jlc3NiYXJTZXJ2aWNlOiBTdmdQcm9ncmVzc2JhckxpYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcHJvZ3Jlc3NiYXJFYXNlOiBTdmdQcm9ncmVzc2JhckxpYkVhc2UsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFNWR19QUk9HUkVTU0JBUl9MSUJfQ09ORklHKSBwcml2YXRlIF9wcm9ncmVzc2JhckNvbmZpZzogU3ZnUHJvZ3Jlc3NiYXJMaWJDb25maWdcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuY3VyclZhbCkge1xuICAgICAgdGhpcy5fYW5pbWF0ZUNoYW5nZShjaGFuZ2VzLmN1cnJWYWwucHJldmlvdXNWYWx1ZSwgY2hhbmdlcy5jdXJyVmFsLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFBhdGgodGhpcy5jdXJyVmFsKTtcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+WUGF0aOWFg+e0oOeahFRyYW5zZm9ybei9rOaNoiAqL1xuICBwdWJsaWMgX2dldFBhdGhUcmFuc2Zvcm0oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZW1pY3ljbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsb2Nrd2lzZVxuICAgICAgICA/IGB0cmFuc2xhdGUoMCwgJHt0aGlzLl9kaWFtZXRlcn0pIHJvdGF0ZSgtOTApYFxuICAgICAgICA6IGB0cmFuc2xhdGUoJHt0aGlzLl9kaWFtZXRlcn0sICR7dGhpcy5fZGlhbWV0ZXJ9KSByb3RhdGUoOTApIHNjYWxlKC0xLDEpYDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmNsb2Nrd2lzZSkge1xuICAgICAgcmV0dXJuIGBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKCR7LXRoaXMuX2RpYW1ldGVyfSAwKWA7XG4gICAgfVxuICB9XG5cbiAgLyoqIOmAmui/h+e8k+WKqOWHveaVsOabtOaWsHBhdGjlhYPntKDot6/lvoQgKi9cbiAgcHJpdmF0ZSBfYW5pbWF0ZUNoYW5nZShwcmV2OiBudW1iZXIsIGN1cnI6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgcHJldiAhPT0gJ251bWJlcicpIHtcbiAgICAgIHByZXYgPSAwO1xuICAgIH1cbiAgICBjb25zdCBmcm9tID0gdGhpcy5fY2xhbXAocHJldik7XG4gICAgY29uc3QgdG8gPSB0aGlzLl9jbGFtcChjdXJyKTtcbiAgICBjb25zdCB2YWx1ZURpZmYgPSB0byAtIGZyb207XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gKytzZWxmLl9hbmltYXRlSWQ7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHNlbGYuX3Byb2dyZXNzYmFyU2VydmljZS5nZXRUaW1lc3RhbXAoKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gTWF0aC5taW4oc2VsZi5fcHJvZ3Jlc3NiYXJTZXJ2aWNlLmdldFRpbWVzdGFtcCgpIC0gc3RhcnRUaW1lLCBzZWxmLmR1cmF0aW9uKTtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNlbGYuX3Byb2dyZXNzYmFyRWFzZVtzZWxmLmFuaW1hdGlvbl0oY3VycmVudFRpbWUsIGZyb20sIHZhbHVlRGlmZiwgc2VsZi5kdXJhdGlvbik7XG5cbiAgICAgICAgICBzZWxmLl9zZXRQYXRoKHZhbHVlKTtcbiAgICAgICAgICBzZWxmLnZhbHVlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblxuICAgICAgICAgIGlmIChpZCA9PT0gc2VsZi5fYW5pbWF0ZUlkICYmIGN1cnJlbnRUaW1lIDwgc2VsZi5kdXJhdGlvbikge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLmRlbGF5ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KHN0YXJ0LCBzZWxmLmRlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGFtcCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4odmFsdWUgfHwgMCwgdGhpcy50b3RhbCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0UGF0aCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZCA9IHRoaXMuX3Byb2dyZXNzYmFyU2VydmljZS5nZXRQYXRoQXJjKFxuICAgICAgdmFsdWUsXG4gICAgICB0aGlzLnRvdGFsLFxuICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICB0aGlzLnJhZGl1cyAtIHRoaXMuc3Ryb2tlV2lkdGggLyAyLFxuICAgICAgdGhpcy5zZW1pY3ljbGVcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLnBhdGhFbGUubmF0aXZlRWxlbWVudCwgJ2QnLCBkKTtcbiAgfVxufVxuIl19