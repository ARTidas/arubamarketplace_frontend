import { TestBed } from '@angular/core/testing';

import { AmbotService } from './ambot.service';

describe('AmbotService', () => {
  let service: AmbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
