import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SvgProgressbarLibComponent } from './svg-progressbar-lib.component';
import { SvgProgressbarLibService } from './svg-progressbar-lib.service';
import { SvgProgressbarLibEase } from './svg-progressbar-lib.ease';
import { SVG_PROGRESSBAR_LIB_PROVIDER } from './svg-progressbar-lib.config';

describe('SvgProgressbarLibComponent', () => {
  let component: SvgProgressbarLibComponent;
  let fixture: ComponentFixture<SvgProgressbarLibComponent>;

  beforeEach(async(() => {
    const libService = jasmine.createSpyObj('libService', ['getPathArc', 'getTimestamp']);
    libService.getPathArc.and.returnValue('');
    libService.getTimestamp.and.returnValue(0);

    TestBed.configureTestingModule({
      declarations: [SvgProgressbarLibComponent],
      providers: [
        SvgProgressbarLibComponent,
        SVG_PROGRESSBAR_LIB_PROVIDER,
        { provide: SvgProgressbarLibService },
        { provide: SvgProgressbarLibEase }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgProgressbarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // 触发变更检测
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input value test', () => {
    expect(component.radius).not.toBeUndefined();
    expect(component.semicycle).not.toBeUndefined();
    expect(component.color).not.toBeUndefined();
    expect(component.background).not.toBeUndefined();
    expect(component.strokeWidth).not.toBeUndefined();
    expect(component.rounded).not.toBeUndefined();
    expect(component.currVal).not.toBeUndefined();
    expect(component.total).not.toBeUndefined();
    expect(component.duration).not.toBeUndefined();
    expect(component.animation).not.toBeUndefined();
    expect(component.delay).not.toBeUndefined();
    expect(component.clockwise).not.toBeUndefined();
  });

  it('should render', () => {
    const debugEle: DebugElement = fixture.debugElement;
    const circleDe = debugEle.query(By.css('circle'));
    const pathDe = debugEle.query(By.css('path'));
    if (!circleDe || !pathDe) {
      fail();
    }
    expect(circleDe.nativeElement).toBeTruthy();
    expect(pathDe.nativeElement).toBeTruthy();
  });

  it('property changes test', () => {
    const background = 'red';
    const color = 'green';
    const strokeWidth = '20';
    component.background = background;
    component.strokeWidth = +strokeWidth;
    component.color = color;
    fixture.detectChanges();

    const debugEle: DebugElement = fixture.debugElement;
    const circleDe = debugEle.query(By.css('circle'));
    const pathDe = debugEle.query(By.css('path'));
    if (!circleDe || !pathDe) {
      fail();
    }
    const circle: SVGElement = circleDe.nativeElement;
    const path: SVGElement = pathDe.nativeElement;

    expect(circle.getAttribute('stroke')).toEqual(background);
    expect(path.getAttribute('stroke')).toEqual(color);
    expect(circle.getAttribute('stroke-width')).toEqual(strokeWidth);
    expect(path.getAttribute('stroke-width')).toEqual(strokeWidth);
  });
});
