import { TestBed, inject } from '@angular/core/testing';

import { CraigslistService } from './craigslist.service';

describe('CraigslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CraigslistService]
    });
  });

  it('should ...', inject([CraigslistService], (service: CraigslistService) => {
    expect(service).toBeTruthy();
  }));
});
