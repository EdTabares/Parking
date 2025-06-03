import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoReservaComponent } from './historico-reserva.component';

describe('HistoricoReservaComponent', () => {
  let component: HistoricoReservaComponent;
  let fixture: ComponentFixture<HistoricoReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
