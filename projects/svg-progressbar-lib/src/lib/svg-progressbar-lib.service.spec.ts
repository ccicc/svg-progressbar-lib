import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/platform-browser';

import { SvgProgressbarLibService } from './svg-progressbar-lib.service';

describe('SvgProgressbarLibService', () => {
  let service: SvgProgressbarLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT }, SvgProgressbarLibService]
    });
    service = TestBed.get(SvgProgressbarLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('member variable', () => {
    expect(service.supportedPerfor).toEqual(jasmine.any(Boolean));
    expect(service.supportedSvg).toEqual(jasmine.any(Boolean));
  });

  it('getTimestamp()', () => {
    expect(service.getTimestamp()).toEqual(jasmine.any(Number));
  });

  it('getPathArc()', () => {
    expect(service.getPathArc(100, 300, 100, 90, false)).toEqual(jasmine.any(String));
  });
});
