/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
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
export { SvgProgressbarLibService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibService.prototype._SVG_NS;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibService.prototype._DEGREES_TO_RADIANS;
    /** @type {?} */
    SvgProgressbarLibService.prototype.supportedSvg;
    /** @type {?} */
    SvgProgressbarLibService.prototype.supportedPerfor;
    /**
     * @type {?}
     * @private
     */
    SvgProgressbarLibService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXByb2dyZXNzYmFyLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ZnLXByb2dyZXNzYmFyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zdmctcHJvZ3Jlc3NiYXItbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckQ7SUFPRSxrQ0FBeUQsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFMOUQsWUFBTyxHQUFHLDRCQUE0QixDQUFDO1FBQzlCLHdCQUFtQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBS25ELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQ3BCLElBQUksQ0FBQyxRQUFRO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUNqRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWU7WUFDbEIsT0FBTyxNQUFNLEtBQUssV0FBVztnQkFDN0IsTUFBTSxDQUFDLFdBQVc7Z0JBQ2xCLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRztnQkFDdEIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLFFBQVEsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRU0sK0NBQVk7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7O0lBQ0ksNkNBQVU7Ozs7Ozs7OztJQUFqQixVQUNFLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixNQUFjLEVBQ2QsWUFBb0IsRUFDcEIsU0FBMEI7UUFBMUIsMEJBQUEsRUFBQSxpQkFBMEI7O1lBRXBCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1lBQ3BELFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzs7WUFDaEMsVUFBVSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsUUFBUTs7WUFDaEUsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7O1lBQ3BELEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDOztZQUMzRCxRQUFRLEdBQUcsVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sT0FBSyxLQUFLLFdBQU0sWUFBWSxTQUFJLFlBQVksV0FBTSxRQUFRLFdBQU0sR0FBSyxDQUFDO0lBQy9FLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0ssaURBQWM7Ozs7Ozs7O0lBQXRCLFVBQXVCLE1BQWMsRUFBRSxZQUFvQixFQUFFLE9BQWU7O1lBQ3BFLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztZQUNuRCxFQUFFLEdBQUcsTUFBTSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7WUFDOUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDcEQsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkEzREYsVUFBVTs7OztnREFPVyxRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7O0lBcURqRCwrQkFBQztDQUFBLEFBNURELElBNERDO1NBM0RZLHdCQUF3Qjs7Ozs7O0lBQ25DLDJDQUErQzs7Ozs7SUFDL0MsdURBQXFEOztJQUNyRCxnREFBNkI7O0lBQzdCLG1EQUFnQzs7Ozs7SUFFYiw0Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3ZnUHJvZ3Jlc3NiYXJMaWJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfU1ZHX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgcHJpdmF0ZSByZWFkb25seSBfREVHUkVFU19UT19SQURJQU5TID0gTWF0aC5QSSAvIDE4MDtcbiAgcHVibGljIHN1cHBvcnRlZFN2ZzogYm9vbGVhbjtcbiAgcHVibGljIHN1cHBvcnRlZFBlcmZvcjogYm9vbGVhbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5zdXBwb3J0ZWRTdmcgPSAhIShcbiAgICAgIHRoaXMuZG9jdW1lbnQgJiZcbiAgICAgIHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmXG4gICAgICB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLl9TVkdfTlMsICdzdmcnKS5jcmVhdGVTVkdSZWN0XG4gICAgKTtcbiAgICB0aGlzLnN1cHBvcnRlZFBlcmZvciA9XG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlICYmXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ICYmXG4gICAgICB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdygpID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIHB1YmxpYyBnZXRUaW1lc3RhbXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3J0ZWRQZXJmb3IgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUn+aIkOi3r+W+hFxuICAgKiBAcGFyYW0gY3VyclZhbHVlICAgICDot6/lvoTlvZPliY3lgLxcbiAgICogQHBhcmFtIHRvdGFsICAgICAgICAg6Lev5b6E5oC75YC8XG4gICAqIEBwYXJhbSByYWRpdXMgICAgICAgIOWNiuW+hFxuICAgKiBAcGFyYW0gY2lyY2xlUmFkaXVzICDlhoXpg6jlnIbljYrlvoRcbiAgICogQHBhcmFtIHNlbWljeWNsZSAgICAg5piv5ZCm5Y2K5ZyGXG4gICAqL1xuICBwdWJsaWMgZ2V0UGF0aEFyYyhcbiAgICBjdXJyVmFsdWU6IG51bWJlcixcbiAgICB0b3RhbDogbnVtYmVyLFxuICAgIHJhZGl1czogbnVtYmVyLFxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyLFxuICAgIHNlbWljeWNsZTogYm9vbGVhbiA9IGZhbHNlXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjdXJyVmFsdWUgfHwgMCwgdG90YWwpKTtcbiAgICBjb25zdCBtYXhBbmdsZSA9IHNlbWljeWNsZSA/IDE4MCA6IDM2MDtcbiAgICBjb25zdCBhbmdsZVNjYWxlID0gdG90YWwgPT09IDAgPyBtYXhBbmdsZSA6ICh2YWx1ZSAvIHRvdGFsKSAqIG1heEFuZ2xlO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0Q29vcmRpbmF0ZShyYWRpdXMsIGNpcmNsZVJhZGl1cywgMCk7XG4gICAgY29uc3QgZW5kID0gdGhpcy5fZ2V0Q29vcmRpbmF0ZShyYWRpdXMsIGNpcmNsZVJhZGl1cywgYW5nbGVTY2FsZSk7XG4gICAgY29uc3QgYXJjU3dlZXAgPSBhbmdsZVNjYWxlIDw9IDE4MCA/IDAgOiAxO1xuICAgIHJldHVybiBgTSAke3N0YXJ0fSBBICR7Y2lyY2xlUmFkaXVzfSAke2NpcmNsZVJhZGl1c30gMCAke2FyY1N3ZWVwfSAxICR7ZW5kfWA7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W6Lev5b6E6LW35aeL5ZKM57uT5p2f5Z2Q5qCH54K5XG4gICAqIEBwYXJhbSByYWRpdXMgICAgICAgIOWNiuW+hFxuICAgKiBAcGFyYW0gY2lyY2xlUmFkaXVzICDlhoXpg6jlnIbljYrlvoRcbiAgICogQHBhcmFtIGRlZ3Jlc3MgICAgICAg5b2T5YmN6KeS5bqm5YC8XG4gICAqL1xuICBwcml2YXRlIF9nZXRDb29yZGluYXRlKHJhZGl1czogbnVtYmVyLCBjaXJjbGVSYWRpdXM6IG51bWJlciwgZGVncmVzczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCByYWRpYW5zID0gdGhpcy5fREVHUkVFU19UT19SQURJQU5TICogKGRlZ3Jlc3MgLSA5MCk7XG4gICAgY29uc3QgY3ggPSByYWRpdXMgKyBjaXJjbGVSYWRpdXMgKiBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgICBjb25zdCBjeSA9IHJhZGl1cyArIGNpcmNsZVJhZGl1cyAqIE1hdGguc2luKHJhZGlhbnMpO1xuICAgIHJldHVybiBjeCArICcgJyArIGN5O1xuICB9XG59XG4iXX0=