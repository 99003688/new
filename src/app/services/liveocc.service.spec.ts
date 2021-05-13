import { TestBed } from '@angular/core/testing';

import { LiveoccService } from './liveocc.service';

describe('LiveoccService', () => {
  let service: LiveoccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveoccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
