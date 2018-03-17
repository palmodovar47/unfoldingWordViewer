import { TestBed, inject } from '@angular/core/testing';

import { LangNameService } from './lang-name.service';

describe('LangNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LangNameService]
    });
  });

  it('should be created', inject([LangNameService], (service: LangNameService) => {
    expect(service).toBeTruthy();
  }));
});
