/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
export class SvgProgressbarLibService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXByb2dyZXNzYmFyLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ZnLXByb2dyZXNzYmFyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zdmctcHJvZ3Jlc3NiYXItbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHckQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQU1uQyxZQUF5RCxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUw5RCxZQUFPLEdBQUcsNEJBQTRCLENBQUM7UUFDOUIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFLbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FDcEIsSUFBSSxDQUFDLFFBQVE7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQ2pFLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZTtZQUNsQixPQUFPLE1BQU0sS0FBSyxXQUFXO2dCQUM3QixNQUFNLENBQUMsV0FBVztnQkFDbEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHO2dCQUN0QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssUUFBUSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFTSxZQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7Ozs7SUFVTSxVQUFVLENBQ2YsU0FBaUIsRUFDakIsS0FBYSxFQUNiLE1BQWMsRUFDZCxZQUFvQixFQUNwQixZQUFxQixLQUFLOztjQUVwQixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztjQUNwRCxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7O2NBQ2hDLFVBQVUsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLFFBQVE7O2NBQ2hFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDOztjQUNwRCxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQzs7Y0FDM0QsUUFBUSxHQUFHLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxPQUFPLEtBQUssS0FBSyxNQUFNLFlBQVksSUFBSSxZQUFZLE1BQU0sUUFBUSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7OztJQVFPLGNBQWMsQ0FBQyxNQUFjLEVBQUUsWUFBb0IsRUFBRSxPQUFlOztjQUNwRSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7Y0FDbkQsRUFBRSxHQUFHLE1BQU0sR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7O2NBQzlDLEVBQUUsR0FBRyxNQUFNLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3BELE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBM0RGLFVBQVU7Ozs7NENBT1csUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBTC9DLDJDQUErQzs7Ozs7SUFDL0MsdURBQXFEOztJQUNyRCxnREFBNkI7O0lBQzdCLG1EQUFnQzs7Ozs7SUFFYiw0Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3ZnUHJvZ3Jlc3NiYXJMaWJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfU1ZHX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgcHJpdmF0ZSByZWFkb25seSBfREVHUkVFU19UT19SQURJQU5TID0gTWF0aC5QSSAvIDE4MDtcbiAgcHVibGljIHN1cHBvcnRlZFN2ZzogYm9vbGVhbjtcbiAgcHVibGljIHN1cHBvcnRlZFBlcmZvcjogYm9vbGVhbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5zdXBwb3J0ZWRTdmcgPSAhIShcbiAgICAgIHRoaXMuZG9jdW1lbnQgJiZcbiAgICAgIHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmXG4gICAgICB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLl9TVkdfTlMsICdzdmcnKS5jcmVhdGVTVkdSZWN0XG4gICAgKTtcbiAgICB0aGlzLnN1cHBvcnRlZFBlcmZvciA9XG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlICYmXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ICYmXG4gICAgICB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdygpID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIHB1YmxpYyBnZXRUaW1lc3RhbXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3J0ZWRQZXJmb3IgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUn+aIkOi3r+W+hFxuICAgKiBAcGFyYW0gY3VyclZhbHVlICAgICDot6/lvoTlvZPliY3lgLxcbiAgICogQHBhcmFtIHRvdGFsICAgICAgICAg6Lev5b6E5oC75YC8XG4gICAqIEBwYXJhbSByYWRpdXMgICAgICAgIOWNiuW+hFxuICAgKiBAcGFyYW0gY2lyY2xlUmFkaXVzICDlhoXpg6jlnIbljYrlvoRcbiAgICogQHBhcmFtIHNlbWljeWNsZSAgICAg5piv5ZCm5Y2K5ZyGXG4gICAqL1xuICBwdWJsaWMgZ2V0UGF0aEFyYyhcbiAgICBjdXJyVmFsdWU6IG51bWJlcixcbiAgICB0b3RhbDogbnVtYmVyLFxuICAgIHJhZGl1czogbnVtYmVyLFxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyLFxuICAgIHNlbWljeWNsZTogYm9vbGVhbiA9IGZhbHNlXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjdXJyVmFsdWUgfHwgMCwgdG90YWwpKTtcbiAgICBjb25zdCBtYXhBbmdsZSA9IHNlbWljeWNsZSA/IDE4MCA6IDM2MDtcbiAgICBjb25zdCBhbmdsZVNjYWxlID0gdG90YWwgPT09IDAgPyBtYXhBbmdsZSA6ICh2YWx1ZSAvIHRvdGFsKSAqIG1heEFuZ2xlO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0Q29vcmRpbmF0ZShyYWRpdXMsIGNpcmNsZVJhZGl1cywgMCk7XG4gICAgY29uc3QgZW5kID0gdGhpcy5fZ2V0Q29vcmRpbmF0ZShyYWRpdXMsIGNpcmNsZVJhZGl1cywgYW5nbGVTY2FsZSk7XG4gICAgY29uc3QgYXJjU3dlZXAgPSBhbmdsZVNjYWxlIDw9IDE4MCA/IDAgOiAxO1xuICAgIHJldHVybiBgTSAke3N0YXJ0fSBBICR7Y2lyY2xlUmFkaXVzfSAke2NpcmNsZVJhZGl1c30gMCAke2FyY1N3ZWVwfSAxICR7ZW5kfWA7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W6Lev5b6E6LW35aeL5ZKM57uT5p2f5Z2Q5qCH54K5XG4gICAqIEBwYXJhbSByYWRpdXMgICAgICAgIOWNiuW+hFxuICAgKiBAcGFyYW0gY2lyY2xlUmFkaXVzICDlhoXpg6jlnIbljYrlvoRcbiAgICogQHBhcmFtIGRlZ3Jlc3MgICAgICAg5b2T5YmN6KeS5bqm5YC8XG4gICAqL1xuICBwcml2YXRlIF9nZXRDb29yZGluYXRlKHJhZGl1czogbnVtYmVyLCBjaXJjbGVSYWRpdXM6IG51bWJlciwgZGVncmVzczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCByYWRpYW5zID0gdGhpcy5fREVHUkVFU19UT19SQURJQU5TICogKGRlZ3Jlc3MgLSA5MCk7XG4gICAgY29uc3QgY3ggPSByYWRpdXMgKyBjaXJjbGVSYWRpdXMgKiBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgICBjb25zdCBjeSA9IHJhZGl1cyArIGNpcmNsZVJhZGl1cyAqIE1hdGguc2luKHJhZGlhbnMpO1xuICAgIHJldHVybiBjeCArICcgJyArIGN5O1xuICB9XG59XG4iXX0=