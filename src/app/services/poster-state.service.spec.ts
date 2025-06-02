import { TestBed } from '@angular/core/testing';

import { PosterStateService } from './poster-state.service';

describe('PosterStateService', () => {
  let service: PosterStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosterStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
