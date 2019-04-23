import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ShuffleAComponent } from './d3-shuffle-a.component';

describe('D3ShuffleAComponent', () => {
  let component: D3ShuffleAComponent;
  let fixture: ComponentFixture<D3ShuffleAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ShuffleAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ShuffleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
