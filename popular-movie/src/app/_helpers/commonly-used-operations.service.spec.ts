import { TestBed } from '@angular/core/testing';

import { CommonlyUsedOperationsService } from './commonly-used-operations.service';

describe('CommonlyUsedOperationsService', () => {
  let service: CommonlyUsedOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonlyUsedOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
