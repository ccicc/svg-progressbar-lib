import { Component, Inject, OnInit, Input, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'nlq-svg-progressbar-lib',
  templateUrl: './svg-progressbar-lib.component.html',
  styleUrls: ['./svg-progressbar-lib.component.scss'],
  providers: []
})
export class SvgProgressbarLibComponent implements OnInit {
  @Input() public radius: number = 100;
  @Input() public semicycle: boolean = false;
  @Input() public stroke: string = 'green';
  @Input() public strokeWidth: number = 20;
  @Input() @HostBinding('class.responsive') public responsive: boolean = false;

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

  public constructor() {}

  public ngOnInit() {}

  public get _viewbox(): string {
    const diameter = this._diameter;
    return `0 0 ${diameter} ${this.semicycle ? this.radius : diameter}`;
  }

  private get _diameter() {
    return this.radius * 2;
  }
}
