import { TestBed, inject } from '@angular/core/testing';

import { LfDisplayLanguageServiceService } from './lf-display-language-service.service';

describe('LfDisplayLanguageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LfDisplayLanguageServiceService]
    });
  });

  it('should be created', inject([LfDisplayLanguageServiceService], (service: LfDisplayLanguageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
