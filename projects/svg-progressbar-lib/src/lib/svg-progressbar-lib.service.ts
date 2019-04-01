import { Injectable, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SvgProgressbarLibService {
  private SVG_NS = 'http://www.w3.org/2000/svg';
  private readonly DEGREE_TO_RADIANS = Math.PI / 180;

  public supportedSvg: boolean;

  public constructor(@Optional() @Inject(DOCUMENT) private document: any) {
    this.supportedSvg = !!(document && document.createElementNS && document.createElementNS(this.SVG_NS, 'svg').createSVGRect);
  }

  public getPathArc(curr: number, total: number, isSemicycle: boolean, radius: number): string {
    // todo need to be improved
    const value = Math.max(0, Math.min(curr || 0, total));
    const maxAngle = isSemicycle ? 180 : 360;
    const percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
    const start = this.getCoordinate(radius, percentage);
    const end = this.getCoordinate(radius, 0);
    const sweepArc = percentage < 180 ? '0' : '1';
    return `M ${start} A ${radius} ${radius} 0 ${sweepArc} 0 ${end}`;
  }

  public getCoordinate(radius: number, degress: number) {
    // todo need to be improved
    const cx = radius + radius * Math.cos(degress * this.DEGREE_TO_RADIANS);
    const cy = radius + radius * Math.sin(degress * this.DEGREE_TO_RADIANS);
    return cx + ' ' + cy;
  }
}
