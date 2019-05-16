import { TestBed } from '@angular/core/testing';

import { WorkstorageService } from './workstorage.service';

describe('WorkstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkstorageService = TestBed.get(WorkstorageService);
    expect(service).toBeTruthy();
  });
});
