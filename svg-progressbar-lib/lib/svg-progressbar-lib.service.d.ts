export declare class SvgProgressbarLibService {
    private document;
    private _SVG_NS;
    private readonly _DEGREES_TO_RADIANS;
    supportedSvg: boolean;
    supportedPerfor: boolean;
    constructor(document: any);
    getTimestamp(): number;
    /**
     * 生成路径
     * @param currValue     路径当前值
     * @param total         路径总值
     * @param radius        半径
     * @param circleRadius  内部圆半径
     * @param semicycle     是否半圆
     */
    getPathArc(currValue: number, total: number, radius: number, circleRadius: number, semicycle?: boolean): string;
    /**
     * 获取路径起始和结束坐标点
     * @param radius        半径
     * @param circleRadius  内部圆半径
     * @param degress       当前角度值
     */
    private _getCoordinate;
}
