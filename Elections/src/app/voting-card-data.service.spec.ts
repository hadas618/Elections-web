import { TestBed } from '@angular/core/testing';

import { VotingCardDataService } from './voting-card-data.service';

describe('VotingCardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VotingCardDataService = TestBed.get(VotingCardDataService);
    expect(service).toBeTruthy();
  });
});
