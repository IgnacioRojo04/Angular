import { TestBed } from '@angular/core/testing';

import { ServicioTest } from './servicio.service';

describe('ServicioTest', () => {
  let service: ServicioTest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
