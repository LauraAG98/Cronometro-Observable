import { TestBed } from '@angular/core/testing';

import { ServiceCronometro } from './service-cronometro';

describe('ServiceCronometro', () => {
  let service: ServiceCronometro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCronometro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
