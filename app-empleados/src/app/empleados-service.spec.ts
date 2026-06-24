import { TestBed } from '@angular/core/testing';

import { EmmpleadosService } from './emmpleados-service';

describe('EmmpleadosService', () => {
  let service: EmmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
