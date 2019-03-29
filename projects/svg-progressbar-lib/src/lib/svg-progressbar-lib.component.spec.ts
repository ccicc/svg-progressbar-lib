import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgProgressbarLibComponent } from './svg-progressbar-lib.component';

describe('SvgProgressbarLibComponent', () => {
  let component: SvgProgressbarLibComponent;
  let fixture: ComponentFixture<SvgProgressbarLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgProgressbarLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgProgressbarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
