import { TestBed } from '@angular/core/testing';

import { FuncionesCompartidasService } from './funciones-compartidas.service';

describe('FuncionesCompartidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionesCompartidasService = TestBed.get(FuncionesCompartidasService);
    expect(service).toBeTruthy();
  });
});
