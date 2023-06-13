import { TestBed } from '@angular/core/testing';

import { SeubServiceService } from './seub-service.service';

describe('SeubServiceService', () => {
  let service: SeubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
