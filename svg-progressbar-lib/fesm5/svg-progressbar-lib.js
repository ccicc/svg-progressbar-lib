import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject, Optional, InjectionToken, Component, Input, HostBinding, ViewChild, Renderer2, NgZone, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SvgProgressbarLibService = /** @class */ (function () {
    function SvgProgressbarLibService(document) {
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
    SvgProgressbarLibService.prototype.getTimestamp = /**
     * @return {?}
     */
    function () {
        return this.supportedPerfor ? window.performance.now() : Date.now();
    };
    /**
     * 生成路径
     * @param currValue     路径当前值
     * @param total         路径总值
     * @param radius        半径
     * @param circleRadius  内部圆半径
     * @param semicycle     是否半圆
     */
    /**
     * 生成路径
     * @param {?} currValue     路径当前值
     * @param {?} total         路径总值
     * @param {?} radius        半径
     * @param {?} circleRadius  内部圆半径
     * @param {?=} semicycle     是否半圆
     * @return {?}
     */
    SvgProgressbarLibService.prototype.getPathArc = /**
     * 生成路径
     * @param {?} currValue     路径当前值
     * @param {?} total         路径总值
     * @param {?} radius        半径
     * @param {?} circleRadius  内部圆半径
     * @param {?=} semicycle     是否半圆
     * @return {?}
     */
    function (currValue, total, radius, circleRadius, semicycle) {
        if (semicycle === void 0) { semicycle = false; }
        /** @type {?} */
        var value = Math.max(0, Math.min(currValue || 0, total));
        /** @type {?} */
        var maxAngle = semicycle ? 180 : 360;
        /** @type {?} */
        var angleScale = total === 0 ? maxAngle : (value / total) * maxAngle;
        /** @type {?} */
        var start = this._getCoordinate(radius, circleRadius, 0);
        /** @type {?} */
        var end = this._getCoordinate(radius, circleRadius, angleScale);
        /** @type {?} */
        var arcSweep = angleScale <= 180 ? 0 : 1;
        return "M " + start + " A " + circleRadius + " " + circleRadius + " 0 " + arcSweep + " 1 " + end;
    };
    /**
     * 获取路径起始和结束坐标点
     * @param radius        半径
     * @param circleRadius  内部圆半径
     * @param degress       当前角度值
     */
    /**
     * 获取路径起始和结束坐标点
     * @private
     * @param {?} radius        半径
     * @param {?} circleRadius  内部圆半径
     * @param {?} degress       当前角度值
     * @return {?}
     */
    SvgProgressbarLibService.prototype._getCoordinate = /**
     * 获取路径起始和结束坐标点
     * @private
     * @param {?} radius        半径
     * @param {?} circleRadius  内部圆半径
     * @param {?} degress       当前角度值
     * @return {?}
     */
    function (radius, circleRadius, degress) {
        /** @type {?} */
        var radians = this._DEGREES_TO_RADIANS * (degress - 90);
        /** @type {?} */
        var cx = radius + circleRadius * Math.cos(radians);
        /** @type {?} */
        var cy = radius + circleRadius * Math.sin(radians);
        return cx + ' ' + cy;
    };
    SvgProgressbarLibService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SvgProgressbarLibService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return SvgProgressbarLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SvgProgressbarLibDefaults = {
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
var SVG_PROGRESSBAR_LIB_CONFIG = new InjectionToken('SVG_PROGRESSBAR_LIB_CONFIG');
/** @type {?} */
var SVG_PROGRESSBAR_LIB_PROVIDER = {
    provide: SVG_PROGRESSBAR_LIB_CONFIG,
    useValue: SvgProgressbarLibDefaults
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SvgProgressbarLibEase = /** @class */ (function () {
    function SvgProgressbarLibEase() {
    }
    // t: 当前时间
    // b: 属性当前值
    // c: 值变化量
    // d: 变化总时间
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
    SvgProgressbarLibEase.prototype.linearEase = 
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
    function (t, b, c, d) {
        return (c * t) / d + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInQuad = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutQuad = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutQuad = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t + b;
        }
        return (-c / 2) * (--t * (t - 2) - 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInCubic = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutCubic = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutCubic = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t * t + b;
        }
        return (c / 2) * ((t -= 2) * t * t + 2) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInQuart = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutQuart = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutQuart = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t * t * t + b;
        }
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInQuint = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutQuint = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutQuint = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t * t * t * t + b;
        }
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInSine = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutSine = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutSine = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInExpo = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutExpo = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutExpo = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
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
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInCirc = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutCirc = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutCirc = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInElastic = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        /** @type {?} */
        var s = 1.70158;
        /** @type {?} */
        var p = d * 0.3;
        /** @type {?} */
        var a = c;
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
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutElastic = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        /** @type {?} */
        var s = 1.70158;
        /** @type {?} */
        var p = d * 0.3;
        /** @type {?} */
        var a = c;
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
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutElastic = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        /** @type {?} */
        var s = 1.70158;
        /** @type {?} */
        var p = d * (0.3 * 1.5);
        /** @type {?} */
        var a = c;
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
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInBack = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutBack = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutBack = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?=} s
     * @return {?}
     */
    function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInBounce = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeOutBounce = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
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
    };
    /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    SvgProgressbarLibEase.prototype.easeInOutBounce = /**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    SvgProgressbarLibEase.decorators = [
        { type: Injectable }
    ];
    return SvgProgressbarLibEase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SvgProgressbarLibModule = /** @class */ (function () {
    function SvgProgressbarLibModule() {
    }
    SvgProgressbarLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SvgProgressbarLibComponent],
                    imports: [CommonModule],
                    providers: [SvgProgressbarLibService, SVG_PROGRESSBAR_LIB_PROVIDER, SvgProgressbarLibEase],
                    exports: [SvgProgressbarLibComponent]
                },] }
    ];
    return SvgProgressbarLibModule;
}());

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