/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function SvgProgressbarLibConfig() { }
if (false) {
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.radius;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.strokeWidth;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.color;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.background;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.semicycle;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.responsive;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.rounded;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.clockwise;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.currVal;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.total;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.duration;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.animation;
    /** @type {?} */
    SvgProgressbarLibConfig.prototype.delay;
}
/** @type {?} */
export var SvgProgressbarLibDefaults = {
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
export var SVG_PROGRESSBAR_LIB_CONFIG = new InjectionToken('SVG_PROGRESSBAR_LIB_CONFIG');
/** @type {?} */
export var SVG_PROGRESSBAR_LIB_PROVIDER = {
    provide: SVG_PROGRESSBAR_LIB_CONFIG,
    useValue: SvgProgressbarLibDefaults
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXByb2dyZXNzYmFyLWxpYi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdmctcHJvZ3Jlc3NiYXItbGliLyIsInNvdXJjZXMiOlsibGliL3N2Zy1wcm9ncmVzc2Jhci1saWIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7OztBQUU5RCw2Q0FjQzs7O0lBYkMseUNBQWU7O0lBQ2YsOENBQW9COztJQUNwQix3Q0FBYzs7SUFDZCw2Q0FBbUI7O0lBQ25CLDRDQUFtQjs7SUFDbkIsNkNBQW9COztJQUNwQiwwQ0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIsMENBQWdCOztJQUNoQix3Q0FBYzs7SUFDZCwyQ0FBaUI7O0lBQ2pCLDRDQUFrQjs7SUFDbEIsd0NBQWM7OztBQUdoQixNQUFNLEtBQU8seUJBQXlCLEdBQTRCO0lBQ2hFLE1BQU0sRUFBRSxHQUFHO0lBQ1gsU0FBUyxFQUFFLEtBQUs7SUFDaEIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsVUFBVSxFQUFFLFNBQVM7SUFDckIsV0FBVyxFQUFFLEVBQUU7SUFDZixVQUFVLEVBQUUsS0FBSztJQUNqQixPQUFPLEVBQUUsS0FBSztJQUNkLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsS0FBSyxFQUFFLEdBQUc7SUFDVixRQUFRLEVBQUUsSUFBSTtJQUNkLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLEtBQUssRUFBRSxDQUFDO0NBQ1Q7O0FBRUQsTUFBTSxLQUFPLDBCQUEwQixHQUFHLElBQUksY0FBYyxDQUEwQiw0QkFBNEIsQ0FBQzs7QUFFbkgsTUFBTSxLQUFPLDRCQUE0QixHQUFrQjtJQUN6RCxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLFFBQVEsRUFBRSx5QkFBeUI7Q0FDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z1Byb2dyZXNzYmFyTGliQ29uZmlnIHtcbiAgcmFkaXVzOiBudW1iZXI7IC8vIOWNiuW+hFxuICBzdHJva2VXaWR0aDogbnVtYmVyOyAvLyDlrr3luqZcbiAgY29sb3I6IHN0cmluZzsgLy8g6Lev5b6E6aKc6ImyXG4gIGJhY2tncm91bmQ6IHN0cmluZzsgLy8g6IOM5pmv6Imy5b2pXG4gIHNlbWljeWNsZTogYm9vbGVhbjsgLy8g5piv5ZCm5Y2K5ZyGXG4gIHJlc3BvbnNpdmU6IGJvb2xlYW47IC8vIOaYr+WQpuiHqumAguW6lFxuICByb3VuZGVkOiBib29sZWFuOyAvLyDmmK/lkKblnIbop5JcbiAgY2xvY2t3aXNlOiBib29sZWFuOyAvLyDmmK/lkKbpobrml7bpkohcbiAgY3VyclZhbDogbnVtYmVyOyAvLyDlvZPliY3ov5vluqbmnaHlgLxcbiAgdG90YWw6IG51bWJlcjsgLy8g6L+b5bqm5p2h57uT5p2f5YC8XG4gIGR1cmF0aW9uOiBudW1iZXI7IC8vIOWKqOeUu+aMgee7reaXtumXtChtcylcbiAgYW5pbWF0aW9uOiBzdHJpbmc7IC8vIOe8k+WKqOWHveaVsFxuICBkZWxheTogbnVtYmVyOyAvLyDlu7bov5/ml7bpl7Rcbn1cblxuZXhwb3J0IGNvbnN0IFN2Z1Byb2dyZXNzYmFyTGliRGVmYXVsdHM6IFN2Z1Byb2dyZXNzYmFyTGliQ29uZmlnID0ge1xuICByYWRpdXM6IDEwMCxcbiAgc2VtaWN5Y2xlOiBmYWxzZSxcbiAgY29sb3I6ICcjNjY2Njk5JyxcbiAgYmFja2dyb3VuZDogJyNjY2NjY2MnLFxuICBzdHJva2VXaWR0aDogMTAsXG4gIHJlc3BvbnNpdmU6IGZhbHNlLFxuICByb3VuZGVkOiBmYWxzZSxcbiAgY2xvY2t3aXNlOiBmYWxzZSxcbiAgY3VyclZhbDogNjAsXG4gIHRvdGFsOiAzNjAsXG4gIGR1cmF0aW9uOiAzMDAwLFxuICBhbmltYXRpb246ICdsaW5lYXJFYXNlJyxcbiAgZGVsYXk6IDBcbn07XG5cbmV4cG9ydCBjb25zdCBTVkdfUFJPR1JFU1NCQVJfTElCX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTdmdQcm9ncmVzc2JhckxpYkNvbmZpZz4oJ1NWR19QUk9HUkVTU0JBUl9MSUJfQ09ORklHJyk7XG5cbmV4cG9ydCBjb25zdCBTVkdfUFJPR1JFU1NCQVJfTElCX1BST1ZJREVSOiBWYWx1ZVByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBTVkdfUFJPR1JFU1NCQVJfTElCX0NPTkZJRyxcbiAgdXNlVmFsdWU6IFN2Z1Byb2dyZXNzYmFyTGliRGVmYXVsdHNcbn07XG4iXX0=