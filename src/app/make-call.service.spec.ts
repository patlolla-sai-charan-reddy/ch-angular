import { TestBed, inject } from '@angular/core/testing';

import { MakeCallService } from './make-call.service';

describe('MakeCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeCallService]
    });
  });

  it('should be created', inject([MakeCallService], (service: MakeCallService) => {
    expect(service).toBeTruthy();
  }));
});
