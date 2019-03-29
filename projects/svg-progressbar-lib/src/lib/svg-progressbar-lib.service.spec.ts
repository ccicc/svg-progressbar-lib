import { TestBed } from '@angular/core/testing';

import { SvgProgressbarLibService } from './svg-progressbar-lib.service';

describe('SvgProgressbarLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvgProgressbarLibService = TestBed.get(SvgProgressbarLibService);
    expect(service).toBeTruthy();
  });
});
