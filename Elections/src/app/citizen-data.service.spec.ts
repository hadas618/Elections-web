import { TestBed } from '@angular/core/testing';

import { CitizenDataService } from './citizen-data.service';

describe('CitizenDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitizenDataService = TestBed.get(CitizenDataService);
    expect(service).toBeTruthy();
  });
});
