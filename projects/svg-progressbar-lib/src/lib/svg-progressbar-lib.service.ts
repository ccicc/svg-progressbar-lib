import { Injectable, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SvgProgressbarLibService {
  private _SVG_NS = 'http://www.w3.org/2000/svg';
  private readonly _DEGREES_TO_RADIANS = Math.PI / 180;
  public supportedSvg: boolean;
  public supportedPerfor: boolean;

  public constructor(@Optional() @Inject(DOCUMENT) private document: any) {
    this.supportedSvg = !!(
      this.document &&
      this.document.createElementNS &&
      this.document.createElementNS(this._SVG_NS, 'svg').createSVGRect
    );
    this.supportedPerfor =
      typeof window !== 'undefined' &&
      window.performance &&
      window.performance.now &&
      typeof window.performance.now() === 'number';
  }

  public getTimestamp(): number {
    return this.supportedPerfor ? window.performance.now() : Date.now();
  }

  /**
   * 生成路径
   * @param currValue     路径当前值
   * @param total         路径总值
   * @param radius        半径
   * @param circleRadius  内部圆半径
   * @param semicycle     是否半圆
   */
  public getPathArc(
    currValue: number,
    total: number,
    radius: number,
    circleRadius: number,
    semicycle: boolean
  ): string {
    const value = Math.max(0, Math.min(currValue || 0, total));
    const maxAngle = semicycle ? 180 : 360;
    const angleScale = total === 0 ? maxAngle : (value / total) * maxAngle;
    const start = this._getCoordinate(radius, circleRadius, 0);
    const end = this._getCoordinate(radius, circleRadius, angleScale);
    const arcSweep = angleScale <= 180 ? 0 : 1;
    return `M ${start} A ${circleRadius} ${circleRadius} 0 ${arcSweep} 1 ${end}`;
  }

  /**
   * 获取路径起始和结束坐标点
   * @param radius        半径
   * @param circleRadius  内部圆半径
   * @param degress       当前角度值
   */
  private _getCoordinate(radius: number, circleRadius: number, degress: number): string {
    const radians = this._DEGREES_TO_RADIANS * (degress - 90); // 从最左边开始
    const cx = radius + circleRadius * Math.cos(radians);
    const cy = radius + circleRadius * Math.sin(radians);
    return cx + ' ' + cy;
  }
}
