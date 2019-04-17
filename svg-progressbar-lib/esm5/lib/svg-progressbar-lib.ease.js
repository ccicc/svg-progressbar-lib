/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
import { Injectable } from '@angular/core';
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
export { SvgProgressbarLibEase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXByb2dyZXNzYmFyLWxpYi5lYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ZnLXByb2dyZXNzYmFyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zdmctcHJvZ3Jlc3NiYXItbGliLmVhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7SUFrUEEsQ0FBQztJQWhQQyxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXOzs7Ozs7Ozs7Ozs7SUFDWCwwQ0FBVTs7Ozs7Ozs7Ozs7O0lBQVYsVUFBVyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ25ELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQUVELDBDQUFVOzs7Ozs7O0lBQVYsVUFBVyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7Ozs7SUFFRCwyQ0FBVzs7Ozs7OztJQUFYLFVBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNwRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7OztJQUVELDZDQUFhOzs7Ozs7O0lBQWIsVUFBYyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ3RELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7O0lBRUQsMkNBQVc7Ozs7Ozs7SUFBWCxVQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7Ozs7SUFFRCw0Q0FBWTs7Ozs7OztJQUFaLFVBQWEsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7Ozs7SUFFRCw4Q0FBYzs7Ozs7OztJQUFkLFVBQWUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7Ozs7SUFFRCwyQ0FBVzs7Ozs7OztJQUFYLFVBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7Ozs7SUFFRCw0Q0FBWTs7Ozs7OztJQUFaLFVBQWEsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNyRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7Ozs7SUFFRCw4Q0FBYzs7Ozs7OztJQUFkLFVBQWUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7O0lBRUQsMkNBQVc7Ozs7Ozs7SUFBWCxVQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7OztJQUVELDRDQUFZOzs7Ozs7O0lBQVosVUFBYSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7O0lBRUQsOENBQWM7Ozs7Ozs7SUFBZCxVQUFlLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDdkQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7OztJQUVELDBDQUFVOzs7Ozs7O0lBQVYsVUFBVyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ25ELE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7O0lBRUQsMkNBQVc7Ozs7Ozs7SUFBWCxVQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7Ozs7SUFFRCw2Q0FBYTs7Ozs7OztJQUFiLFVBQWMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUN0RCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7Ozs7SUFFRCwwQ0FBVTs7Ozs7OztJQUFWLFVBQVcsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7Ozs7SUFFRCwyQ0FBVzs7Ozs7OztJQUFYLFVBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FB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LEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Z0JBalBGLFVBQVU7O0lBa1BYLDRCQUFDO0NBQUEsQUFsUEQsSUFrUEM7U0FqUFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3ZnUHJvZ3Jlc3NiYXJMaWJFYXNlIHtcbiAgLy8gdDog5b2T5YmN5pe26Ze0XG4gIC8vIGI6IOWxnuaAp+W9k+WJjeWAvFxuICAvLyBjOiDlgLzlj5jljJbph49cbiAgLy8gZDog5Y+Y5YyW5oC75pe26Ze0XG4gIGxpbmVhckVhc2UodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKGMgKiB0KSAvIGQgKyBiO1xuICB9XG5cbiAgZWFzZUluUXVhZCh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcbiAgfVxuXG4gIGVhc2VPdXRRdWFkKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIC1jICogKHQgLz0gZCkgKiAodCAtIDIpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dFF1YWQodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgcmV0dXJuIChjIC8gMikgKiB0ICogdCArIGI7XG4gICAgfVxuXG4gICAgcmV0dXJuICgtYyAvIDIpICogKC0tdCAqICh0IC0gMikgLSAxKSArIGI7XG4gIH1cblxuICBlYXNlSW5DdWJpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCArIGI7XG4gIH1cblxuICBlYXNlT3V0Q3ViaWModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dEN1YmljKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgIHJldHVybiAoYyAvIDIpICogdCAqIHQgKiB0ICsgYjtcbiAgICB9XG5cbiAgICByZXR1cm4gKGMgLyAyKSAqICgodCAtPSAyKSAqIHQgKiB0ICsgMikgKyBiO1xuICB9XG5cbiAgZWFzZUluUXVhcnQodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcbiAgfVxuXG4gIGVhc2VPdXRRdWFydCh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiAtYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgLSAxKSArIGI7XG4gIH1cblxuICBlYXNlSW5PdXRRdWFydCh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICByZXR1cm4gKGMgLyAyKSAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICAgIH1cblxuICAgIHJldHVybiAoLWMgLyAyKSAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAtIDIpICsgYjtcbiAgfVxuXG4gIGVhc2VJblF1aW50KHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICB9XG5cbiAgZWFzZU91dFF1aW50KHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0ICogdCArIDEpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dFF1aW50KHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgIHJldHVybiAoYyAvIDIpICogdCAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICAgIH1cblxuICAgIHJldHVybiAoYyAvIDIpICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcbiAgfVxuXG4gIGVhc2VJblNpbmUodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLWMgKiBNYXRoLmNvcygodCAvIGQpICogKE1hdGguUEkgLyAyKSkgKyBjICsgYjtcbiAgfVxuXG4gIGVhc2VPdXRTaW5lKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGMgKiBNYXRoLnNpbigodCAvIGQpICogKE1hdGguUEkgLyAyKSkgKyBiO1xuICB9XG5cbiAgZWFzZUluT3V0U2luZSh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiAoLWMgLyAyKSAqIChNYXRoLmNvcygoTWF0aC5QSSAqIHQpIC8gZCkgLSAxKSArIGI7XG4gIH1cblxuICBlYXNlSW5FeHBvKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHQgPT0gMCA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiO1xuICB9XG5cbiAgZWFzZU91dEV4cG8odDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdCA9PSBkID8gYiArIGMgOiBjICogKC1NYXRoLnBvdygyLCAoLTEwICogdCkgLyBkKSArIDEpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dEV4cG8odDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodCA9PSAwKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICBpZiAodCA9PSBkKSB7XG4gICAgICByZXR1cm4gYiArIGM7XG4gICAgfVxuXG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgIHJldHVybiAoYyAvIDIpICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSArIGI7XG4gICAgfVxuXG4gICAgcmV0dXJuIChjIC8gMikgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XG4gIH1cblxuICBlYXNlSW5DaXJjKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcbiAgfVxuXG4gIGVhc2VPdXRDaXJjKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dENpcmModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgcmV0dXJuICgtYyAvIDIpICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xuICAgIH1cblxuICAgIHJldHVybiAoYyAvIDIpICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcbiAgfVxuXG4gIGVhc2VJbkVsYXN0aWModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgcyA9IDEuNzAxNTg7XG4gICAgbGV0IHAgPSBkICogMC4zO1xuICAgIGxldCBhID0gYztcblxuICAgIGlmICh0ID09IDApIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGlmICgodCAvPSBkKSA9PSAxKSB7XG4gICAgICByZXR1cm4gYiArIGM7XG4gICAgfVxuXG4gICAgaWYgKGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgYSA9IGM7XG4gICAgICBzID0gcCAvIDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgPSAocCAvICgyICogTWF0aC5QSSkpICogTWF0aC5hc2luKGMgLyBhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLShhICogTWF0aC5wb3coMiwgMTAgKiB0LS0pICogTWF0aC5zaW4oKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSkgKyBiO1xuICB9XG5cbiAgZWFzZU91dEVsYXN0aWModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgcyA9IDEuNzAxNTg7XG4gICAgbGV0IHAgPSBkICogMC4zO1xuICAgIGxldCBhID0gYztcblxuICAgIGlmICh0ID09IDApIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIGlmICgodCAvPSBkKSA9PSAxKSB7XG4gICAgICByZXR1cm4gYiArIGM7XG4gICAgfVxuXG4gICAgaWYgKGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgYSA9IGM7XG4gICAgICBzID0gcCAvIDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgPSAocCAvICgyICogTWF0aC5QSSkpICogTWF0aC5hc2luKGMgLyBhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSArIGMgKyBiO1xuICB9XG5cbiAgZWFzZUluT3V0RWxhc3RpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBzID0gMS43MDE1ODtcbiAgICBsZXQgcCA9IGQgKiAoMC4zICogMS41KTtcbiAgICBsZXQgYSA9IGM7XG5cbiAgICBpZiAodCA9PSAwKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICBpZiAoKHQgLz0gZCAvIDIpID09IDIpIHtcbiAgICAgIHJldHVybiBiICsgYztcbiAgICB9XG5cbiAgICBpZiAoYSA8IE1hdGguYWJzKGMpKSB7XG4gICAgICBhID0gYztcbiAgICAgIHMgPSBwIC8gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgcyA9IChwIC8gKDIgKiBNYXRoLlBJKSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuICAgIH1cblxuICAgIGlmICh0IDwgMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgLTAuNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigoKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApKSArIGJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigoKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApICogMC41ICsgYyArIGJcbiAgICApO1xuICB9XG5cbiAgZWFzZUluQmFjayh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIsIHMgPSAxLjcwMTU4KTogbnVtYmVyIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcbiAgfVxuXG4gIGVhc2VPdXRCYWNrKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlciwgcyA9IDEuNzAxNTgpOiBudW1iZXIge1xuICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dEJhY2sodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyLCBzID0gMS43MDE1OCk6IG51bWJlciB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgIHJldHVybiAoYyAvIDIpICogKHQgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgLSBzKSkgKyBiO1xuICAgIH1cblxuICAgIHJldHVybiAoYyAvIDIpICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0ICsgcykgKyAyKSArIGI7XG4gIH1cblxuICBlYXNlSW5Cb3VuY2UodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gYyAtIHRoaXMuZWFzZU91dEJvdW5jZShkIC0gdCwgMCwgYywgZCkgKyBiO1xuICB9XG5cbiAgZWFzZU91dEJvdW5jZSh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICgodCAvPSBkKSA8IDEgLyAyLjc1KSB7XG4gICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCkgKyBiO1xuICAgIH0gZWxzZSBpZiAodCA8IDIgLyAyLjc1KSB7XG4gICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAxLjUgLyAyLjc1KSAqIHQgKyAwLjc1KSArIGI7XG4gICAgfSBlbHNlIGlmICh0IDwgMi41IC8gMi43NSkge1xuICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIDAuOTM3NSkgKyBiO1xuICAgIH1cblxuICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDIuNjI1IC8gMi43NSkgKiB0ICsgMC45ODQzNzUpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dEJvdW5jZSh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh0IDwgZCAvIDIpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhc2VJbkJvdW5jZSh0ICogMiwgMCwgYywgZCkgKiAwLjUgKyBiO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVhc2VPdXRCb3VuY2UodCAqIDIgLSBkLCAwLCBjLCBkKSAqIDAuNSArIGMgKiAwLjUgKyBiO1xuICB9XG59XG5cbi8qKlxuICogVEVSTVMgT0YgVVNFIC0gRUFTSU5HIEVRVUFUSU9OU1xuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLlxuXG4gKiBDb3B5cmlnaHQgwqkgMjAwMSBSb2JlcnQgUGVubmVyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlXG4gKiBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOXG4gKiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbiJdfQ==