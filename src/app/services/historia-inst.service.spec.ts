import { TestBed } from '@angular/core/testing';

import { HistoriaInstService } from './historia-inst.service';

describe('HistoriaInstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoriaInstService = TestBed.get(HistoriaInstService);
    expect(service).toBeTruthy();
  });
});
