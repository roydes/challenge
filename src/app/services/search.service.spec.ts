import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
  it('should be created', inject([SearchService], (service: SearchService) => {
    return service.fetchAll('Angular').toPromise()
        .then( ( repositories ) => { expect(repositories.length).toBeGreaterThan(0)} );
  }));
});
