import { TestBed } from '@angular/core/testing';

import { AdServicesService } from './ad-services.service';

describe('AdServicesService', () => {
  let service: AdServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
