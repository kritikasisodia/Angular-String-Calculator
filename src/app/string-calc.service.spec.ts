import { TestBed } from '@angular/core/testing';

import { StringCalcService } from './string-calc.service';

describe('StringCalcService', () => {
  let service: StringCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
