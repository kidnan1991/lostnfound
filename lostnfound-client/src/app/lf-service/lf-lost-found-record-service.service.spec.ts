import { TestBed, inject } from '@angular/core/testing';

import { LfLostFoundRecordServiceService } from './lf-lost-found-record-service.service';

describe('LfLostFoundRecordServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LfLostFoundRecordServiceService]
    });
  });

  it('should be created', inject([LfLostFoundRecordServiceService], (service: LfLostFoundRecordServiceService) => {
    expect(service).toBeTruthy();
  }));
});
