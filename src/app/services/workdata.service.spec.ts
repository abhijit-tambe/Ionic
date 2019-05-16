import { TestBed } from '@angular/core/testing';

import { WorkdataService } from './workdata.service';

describe('WorkdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkdataService = TestBed.get(WorkdataService);
    expect(service).toBeTruthy();
  });
});
