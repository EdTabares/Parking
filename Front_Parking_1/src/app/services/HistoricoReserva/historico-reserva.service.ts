import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelHistoricoReserva } from 'src/app/models/ModelHistoricoReserva';
import { TotalFacturadoDiaDTO } from 'src/app/models/TotalFacturadoDiaDTO';
import { PorcentajeTipoVehiculoDTO } from 'src/app/models/PorcentajeTipoVehiculoDTO';


@Injectable({
  providedIn: 'root'
})
export class HistoricoReservaService {
  //private apiUrl = 'http://localhost:8080/historico';
  private apiUrl = 'https://parking-ppwc.onrender.com/historico';

  constructor(private http: HttpClient) {}

  ObtenerHistorico(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  ObtenerTotalFacturadoPorDia(): Observable<any> {
    return this.http.get(`${this.apiUrl}/total-dia`);
  }

  ObtenerCantidadPorTipoVehiculo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/porcentaje-tipo`);
  }
}

