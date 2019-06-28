import { TestBed } from '@angular/core/testing';

import { SearchFieldDataService } from './search-field-data.service';

describe('SearchFieldDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchFieldDataService = TestBed.get(SearchFieldDataService);
    expect(service).toBeTruthy();
  });
});
