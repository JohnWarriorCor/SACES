import { TestBed } from '@angular/core/testing';

import { Condicion1Service } from './condicion1.service';

describe('Condicion1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Condicion1Service = TestBed.get(Condicion1Service);
    expect(service).toBeTruthy();
  });
});
