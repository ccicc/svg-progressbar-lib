import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavListComponent } from './page-nav-list.component';

describe('PageNavListComponent', () => {
  let component: PageNavListComponent;
  let fixture: ComponentFixture<PageNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
