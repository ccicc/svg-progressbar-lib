import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3JoindataComponent } from './d3-joindata.component';

describe('D3JoindataComponent', () => {
  let component: D3JoindataComponent;
  let fixture: ComponentFixture<D3JoindataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3JoindataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3JoindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
