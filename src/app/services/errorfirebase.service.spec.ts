import { TestBed } from '@angular/core/testing';

import { ErrorfirebaseService } from './errorfirebase.service';

describe('ErrorfirebaseService', () => {
  let service: ErrorfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
