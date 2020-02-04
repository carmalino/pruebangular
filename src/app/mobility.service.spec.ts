import { TestBed } from '@angular/core/testing';

import { MobilityService } from './mobility.service';

describe('MobilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobilityService = TestBed.get(MobilityService);
    expect(service).toBeTruthy();
  });
});
