import { TestBed } from '@angular/core/testing';

import { HistoricoReservaService } from './historico-reserva.service';

describe('HistoricoReservaService', () => {
  let service: HistoricoReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
