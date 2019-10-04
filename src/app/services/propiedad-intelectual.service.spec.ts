import { TestBed } from '@angular/core/testing';

import { PropiedadIntelectualService } from './propiedad-intelectual.service';

describe('PropiedadIntelectualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropiedadIntelectualService = TestBed.get(PropiedadIntelectualService);
    expect(service).toBeTruthy();
  });
});
