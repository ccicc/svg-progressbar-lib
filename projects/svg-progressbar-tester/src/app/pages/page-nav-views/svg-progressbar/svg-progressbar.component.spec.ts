import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgProgressbarComponent } from './svg-progressbar.component';

describe('SvgProgressbarComponent', () => {
  let component: SvgProgressbarComponent;
  let fixture: ComponentFixture<SvgProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
