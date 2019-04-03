/* tslint:disable variable-name */

import {
  Component,
  Inject,
  OnChanges,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  Renderer2,
  SimpleChanges,
  NgZone,
  EventEmitter,
  Output
} from '@angular/core';

import { SvgProgressbarLibService } from './svg-progressbar-lib.service';
import { SvgProgressbarLibConfig, SVG_PROGRESSBAR_LIB_CONFIG } from './svg-progressbar-lib.config';
import { SvgProgressbarLibEase } from './svg-progressbar-lib.ease';

@Component({
  selector: 'nlq-svg-progressbar-lib',
  templateUrl: './svg-progressbar-lib.component.html',
  styleUrls: ['./svg-progressbar-lib.component.scss']
})
export class SvgProgressbarLibComponent implements OnChanges {
  @Output() public valueChanged: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('path') private pathEle: ElementRef<SVGPathElement>;
  @Input() public radius: number = this._progressbarConfig.radius;
  @Input() public semicycle: boolean = this._progressbarConfig.semicycle;
  @Input() public color: string = this._progressbarConfig.color;
  @Input() public background: string = this._progressbarConfig.background;
  @Input() public strokeWidth: number = this._progressbarConfig.strokeWidth;
  @Input() public rounded: boolean = this._progressbarConfig.rounded;
  @Input() public currVal: number = this._progressbarConfig.currVal;
  @Input() public total: number = this._progressbarConfig.total;
  @Input() public duration: number = this._progressbarConfig.duration;
  @Input() public animation: string = this._progressbarConfig.animation;
  @Input() public delay: number = this._progressbarConfig.delay;
  @Input() public clockwise: boolean = this._progressbarConfig.clockwise;
  @Input()
  @HostBinding('class.responsive')
  public responsive: boolean = this._progressbarConfig.responsive;

  @HostBinding('attr.role')
  public get _role(): string {
    return 'svg-progressbar';
  }

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

  private get _diameter(): number {
    return this.radius * 2;
  }

  private _animateId: number = 0;

  public constructor(
    private _progressbarService: SvgProgressbarLibService,
    private _progressbarEase: SvgProgressbarLibEase,
    private _renderer: Renderer2,
    private _ngZone: NgZone,
    @Inject(SVG_PROGRESSBAR_LIB_CONFIG) private _progressbarConfig: SvgProgressbarLibConfig
  ) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.currVal) {
      this._animateChange(changes.currVal.previousValue, changes.currVal.currentValue);
    } else {
      this._setPath(this.currVal);
    }
  }

  /** 获取Path元素的Transform转换 */
  public _getPathTransform(): string {
    if (this.semicycle) {
      return this.clockwise
        ? `translate(0, ${this._diameter}) rotate(-90)`
        : `translate(${this._diameter}, ${this._diameter}) rotate(90) scale(-1,1)`;
    } else if (!this.clockwise) {
      return `scale(-1, 1) translate(${-this._diameter} 0)`;
    }
  }

  /** 通过缓动函数更新path元素路径 */
  private _animateChange(prev: number, curr: number): void {
    if (typeof prev !== 'number') {
      prev = 0;
    }
    const from = this._clamp(prev);
    const to = this._clamp(curr);
    const valueDiff = to - from;
    const self = this;

    this._ngZone.runOutsideAngular(() => {
      const start = () => {
        const id = ++self._animateId;
        const startTime = self._progressbarService.getTimestamp();

        requestAnimationFrame(function animation() {
          const currentTime = Math.min(self._progressbarService.getTimestamp() - startTime, self.duration);
          const value = self._progressbarEase[self.animation](currentTime, from, valueDiff, self.duration);

          self._setPath(value);
          self.valueChanged.emit(value);

          if (id === self._animateId && currentTime < self.duration) {
            requestAnimationFrame(animation);
          }
        });
      };

      if (self.delay > 0) {
        setTimeout(start, self.delay);
      } else {
        start();
      }
    });
  }

  private _clamp(value: number): number {
    return Math.max(0, Math.min(value || 0, this.total));
  }

  private _setPath(value: number): void {
    const d = this._progressbarService.getPathArc(
      value,
      this.total,
      this.radius,
      this.radius - this.strokeWidth / 2,
      this.semicycle
    );
    this._renderer.setAttribute(this.pathEle.nativeElement, 'd', d);
  }
}
