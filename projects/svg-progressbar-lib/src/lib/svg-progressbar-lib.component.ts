import { Component, Inject, OnInit, Input, Injectable, HostBinding, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { debug } from 'debug';

import { SvgProgressbarLibService } from './svg-progressbar-lib.service';
import { SvgProgressbarLibConfig, SVG_PROGRESSBAR_LIB_CONFIG } from './svg-progressbar-lib.config';

const libdebug = debug('svg-progressbar-lib::component');

@Component({
  selector: 'nlq-svg-progressbar-lib',
  templateUrl: './svg-progressbar-lib.component.html',
  styleUrls: ['./svg-progressbar-lib.component.scss'],
  providers: []
})
export class SvgProgressbarLibComponent implements OnInit {
  @ViewChild('path') private pathEle: ElementRef<SVGPathElement>;
  @Input() public radius: number = this.progressbarConfig.radius;
  @Input() public semicycle: boolean = this.progressbarConfig.semicycle;
  @Input() public color: string = this.progressbarConfig.color;
  @Input() public background: string = this.progressbarConfig.background;
  @Input() public strokeWidth: number = this.progressbarConfig.strokeWidth;
  @Input() public rounded: boolean = this.progressbarConfig.rounded;
  @Input() public curr: number = this.progressbarConfig.curr;
  @Input() public total: number = this.progressbarConfig.total;
  @Input() @HostBinding('class.responsive') public responsive: boolean = this.progressbarConfig.responsive;

  @HostBinding('attr.role')
  public role: string = 'svg-progressbar';

  @HostBinding('style.width')
  public get _width(): string {
    return this.responsive ? '' : `${this._diameter}px`;
  }

  @HostBinding('style.height')
  public get _height(): string {
    if (!this.responsive) {
      return `${this.semicycle ? this.radius : this._diameter}px`;
    }
  }

  @HostBinding('style.padding-bottom')
  public get _paddingBottom(): string {
    if (this.responsive) {
      return this.semicycle ? '50%' : '100%';
    }
  }

  public get _viewbox(): string {
    const diameter = this._diameter;
    return `0 0 ${diameter} ${this.semicycle ? this.radius : diameter}`;
  }

  private get _diameter() {
    return this.radius * 2;
  }

  public constructor(
    private progressbarService: SvgProgressbarLibService,
    private renderer: Renderer2,
    @Inject(SVG_PROGRESSBAR_LIB_CONFIG) private progressbarConfig: SvgProgressbarLibConfig
  ) {}

  public ngOnInit() {
    this._setPath(this.curr);
  }

  /** 获取Path元素的Transform转换 */
  public _getPathTransform(): string {
    return '';
  }

  private _setPath(value: number): void {
    const d = this.progressbarService.getPathArc(value, this.total, this.semicycle, this.radius);
    libdebug('d: %s', d);
    this.renderer.setAttribute(this.pathEle.nativeElement, 'd', d);
  }
}
