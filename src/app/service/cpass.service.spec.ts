import { TestBed } from '@angular/core/testing';

import { CpassService } from './cpass.service';

describe('CpassService', () => {
  let service: CpassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
