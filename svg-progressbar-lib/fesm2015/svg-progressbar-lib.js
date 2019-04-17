import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject, Optional, InjectionToken, Component, Input, HostBinding, ViewChild, Renderer2, NgZone, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgProgressbarLibService {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this._SVG_NS = 'http://www.w3.org/2000/svg';
        this._DEGREES_TO_RADIANS = Math.PI / 180;
        this.supportedSvg = !!(this.document &&
            this.document.createElementNS &&
            this.document.createElementNS(this._SVG_NS, 'svg').createSVGRect);
        this.supportedPerfor =
            typeof window !== 'undefined' &&
                window.performance &&
                window.performance.now &&
                typeof window.performance.now() === 'number';
    }
    /**
     * @return {?}
     */
    getTimestamp() {
        return this.supportedPerfor ? window.performance.now() : Date.now();
    }
    /**
     * 生成路径
     * @param {?} currValue     路径当前值
     * @param {?} total         路径总值
     * @param {?} radius        半径
     * @param {?} circleRadius  内部圆半径
     * @param {?=} semicycle     是否半圆
     * @return {?}
     */
    getPathArc(currValue, total, radius, circleRadius, semicycle = false) {
        /** @type {?} */
        const value = Math.max(0, Math.min(currValue || 0, total));
        /** @type {?} */
        const maxAngle = semicycle ? 180 : 360;
        /** @type {?} */
        const angleScale = total === 0 ? maxAngle : (value / total) * maxAngle;
        /** @type {?} */
        const start = this._getCoordinate(radius, circleRadius, 0);
        /** @type {?} */
        const end = this._getCoordinate(radius, circleRadius, angleScale);
        /** @type {?} */
        const arcSweep = angleScale <= 180 ? 0 : 1;
        return `M ${start} A ${circleRadius} ${circleRadius} 0 ${arcSweep} 1 ${end}`;
    }
    /**
     * 获取路径起始和结束坐标点
     * @private
     * @param {?} radius        半径
     * @param {?} circleRadius  内部圆半径
     * @param {?} degress       当前角度值
     * @return {?}
     */
    _getCoordinate(radius, circleRadius, degress) {
        /** @type {?} */
        const radians = this._DEGREES_TO_RADIANS * (degress - 90);
        /** @type {?} */
        const cx = radius + circleRadius * Math.cos(radians);
        /** @type {?} */
        const cy = radius + circleRadius * Math.sin(radians);
        return cx + ' ' + cy;
    }
}
SvgProgressbarLibService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SvgProgressbarLibService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SvgProgressbarLibDefaults = {
    radius: 100,
    semicycle: false,
    color: '#666699',
    background: '#cccccc',
    strokeWidth: 10,
    responsive: false,
    rounded: false,
    clockwise: false,
    currVal: 60,
    total: 360,
    duration: 3000,
    animation: 'linearEase',
    delay: 0
};
/** @type {?} */
const SVG_PROGRESSBAR_LIB_CONFIG = new InjectionToken('SVG_PROGRESSBAR_LIB_CONFIG');
/** @type {?} */
const SVG_PROGRESSBAR_LIB_PROVIDER = {
    provide: SVG_PROGRESSBAR_LIB_CONFIG,
    useValue: SvgProgressbarLibDefaults
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgProgressbarLibEase {
    // t: 当前时间
    // b: 属性当前值
    // c: 值变化量
    // d: 变化总时间
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    linearEase(t, b, c, d) {
        return (c * t) / d + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInQuad(t, b, c, d) {
        return c * (t /= d) * t + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutQuad(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t + b;
        }
        return (-c / 2) * (--t * (t - 2) - 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInCubic(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutCubic(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t * t + b;
        }
        return (c / 2) * ((t -= 2) * t * t + 2) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInQuart(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutQuart(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutQuart(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t * t * t + b;
        }
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInQuint(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutQuint(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutQuint(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t * t * t * t + b;
        }
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInSine(t, b, c, d) {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutSine(t, b, c, d) {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutSine(t, b, c, d) {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInExpo(t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutExpo(t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutExpo(t, b, c, d) {
        if (t == 0) {
            return b;
        }
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        }
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInCirc(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutCirc(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutCirc(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInElastic(t, b, c, d) {
        /** @type {?} */
        let s = 1.70158;
        /** @type {?} */
        let p = d * 0.3;
        /** @type {?} */
        let a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * t--) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutElastic(t, b, c, d) {
        /** @type {?} */
        let s = 1.70158;
        /** @type {?} */
        let p = d * 0.3;
        /** @type {?} */
        let a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutElastic(t, b, c, d) {
        /** @type {?} */
        let s = 1.70158;
        /** @type {?} */
        let p = d * (0.3 * 1.5);
        /** @type {?} */
        let a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        if (t < 1) {
            return (-0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b);
        }
        return (a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b);
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    easeInBack(t, b, c, d, s = 1.70158) {
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    easeOutBack(t, b, c, d, s = 1.70158) {
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    easeInOutBack(t, b, c, d, s = 1.70158) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInBounce(t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeOutBounce(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        }
        else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    easeInOutBounce(t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
}
SvgProgressbarLibEase.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgProgressbarLibComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgProgressbarLibModule {
}
SvgProgressbarLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SvgProgressbarLibComponent],
                imports: [CommonModule],
                providers: [SvgProgressbarLibService, SVG_PROGRESSBAR_LIB_PROVIDER, SvgProgressbarLibEase],
                exports: [SvgProgressbarLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SvgProgressbarLibService, SvgProgressbarLibComponent, SvgProgressbarLibModule, SvgProgressbarLibDefaults, SVG_PROGRESSBAR_LIB_CONFIG, SVG_PROGRESSBAR_LIB_PROVIDER, SvgProgressbarLibEase };

//# sourceMappingURL=svg-progressbar-lib.js.map