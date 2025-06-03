import { PorcentajeTipoVehiculoDTO } from './../../models/PorcentajeTipoVehiculoDTO';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModelHistoricoReserva } from 'src/app/models/ModelHistoricoReserva';
import { HistoricoReservaService } from 'src/app/services/HistoricoReserva/historico-reserva.service';
import { TotalFacturadoDiaDTO } from 'src/app/models/TotalFacturadoDiaDTO';


@Component({
  selector: 'app-historico-reserva',
  templateUrl: './historico-reserva.component.html',
  styleUrls: ['./historico-reserva.component.css']
})
export class HistoricoReservaComponent  implements OnInit{
  historico: ModelHistoricoReserva[] = [];
  historicoFiltrado: ModelHistoricoReserva[] = [];
  porcentajeVehiculos: PorcentajeTipoVehiculoDTO[] = [];
  totalFacturado: number = 0;
  fechaSeleccionada: string = '';

  error: string = '';
  success: string = '';


  constructor(private router: Router, private historicoReservaService: HistoricoReservaService) {}

  ngOnInit(): void {
    this.historicoReservaService.ObtenerHistorico().subscribe({
      next: (data) => {
        this.historico = data;
        this.historicoFiltrado = data;
        this.calcularTotalFacturado();
        this.calcularPorcentajeVehiculos();
      },
      error: (err) => {
        this.error = "Error al obtener el histórico de reservas.";
      }
    });

    this.historicoReservaService.ObtenerTotalFacturadoPorDia().subscribe({
      next: (data) => {
        this.totalFacturado = data;
      },
      error: (err) => {
        this.error = "Error al obtener el total facturado por día.";
      }
    });

    this.historicoReservaService.ObtenerCantidadPorTipoVehiculo().subscribe({
      next: (data) => {
        const totalVehiculos = data.reduce((sum: number, item: PorcentajeTipoVehiculoDTO) => sum + item.cantidad, 0);
        this.porcentajeVehiculos = data.map((item: PorcentajeTipoVehiculoDTO) => ({
          tipoVehiculo: item.tipoVehiculo,
          cantidad: item.cantidad,
          porcentaje: ((item.cantidad / totalVehiculos) * 100).toFixed(2)
        }));

      },
      error: () => {
        this.error = "Error al obtener la cantidad por tipo de vehículo.";
      }
    });
  }

filtrarPorFecha(): void {
  if (!this.fechaSeleccionada) {
    this.historicoFiltrado = this.historico;
    return;
  }

  this.historicoFiltrado = this.historico.filter(reserva => {
    const fechaReserva = new Date(reserva.fechaLiquidacion).toISOString().split('T')[0]; // Formato YYYY-MM-DD
    const fechaFiltro = new Date(this.fechaSeleccionada).toISOString().split('T')[0]; // Formato YYYY-MM-DD

    return fechaReserva === fechaFiltro;
  });

  this.calcularTotalFacturado();
  this.calcularPorcentajeVehiculos();
}

formatFecha(fecha: string): string {
  return new Date(fecha).toLocaleDateString('es-CO', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

    calcularTotalFacturado(): void {
    this.totalFacturado = this.historicoFiltrado.reduce((sum, reserva) => sum + reserva.valor, 0);
  }


  borrarFiltro(): void {
    this.fechaSeleccionada = '';
    this.historicoFiltrado = [...this.historico];
    this.calcularTotalFacturado();
  }

  formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
}


  volver(): void {
    this.router.navigate(['/dashboard']);
  }

  calcularPorcentajeVehiculos(): void {
  const totalVehiculos = this.historicoFiltrado.length;

  const tiposAgrupados = this.historicoFiltrado.reduce((acc, reserva) => {
    acc[reserva.tipoVehiculo] = (acc[reserva.tipoVehiculo] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  this.porcentajeVehiculos = Object.keys(tiposAgrupados).map(tipo => ({
    tipoVehiculo: tipo,
    cantidad: tiposAgrupados[tipo],
    porcentaje: ((tiposAgrupados[tipo] / totalVehiculos) * 100).toFixed(2) // ✅ Calculando porcentaje dinámico
  }));
}

  exportXML(): void {
  const xmlDocument = document.implementation.createDocument('', '', null);
  const rootElement = xmlDocument.createElement('HistoricoReservas');

  this.historicoFiltrado.forEach(reserva => {
    const reservaElement = xmlDocument.createElement('Reserva');

    const fechaElement = xmlDocument.createElement('FechaLiquidacion');
    fechaElement.textContent = reserva.fechaLiquidacion;
    reservaElement.appendChild(fechaElement);

    const placaElement = xmlDocument.createElement('Placa');
    placaElement.textContent = reserva.placa;
    reservaElement.appendChild(placaElement);

    const tipoElement = xmlDocument.createElement('TipoVehiculo');
    tipoElement.textContent = reserva.tipoVehiculo;
    reservaElement.appendChild(tipoElement);

    const valorElement = xmlDocument.createElement('ValorPagado');
    valorElement.textContent = reserva.valor.toString();
    reservaElement.appendChild(valorElement);

    rootElement.appendChild(reservaElement);
  });

  xmlDocument.appendChild(rootElement);

  const serializer = new XMLSerializer();
  const xmlString = serializer.serializeToString(xmlDocument);

  const blob = new Blob([xmlString], { type: 'application/xml' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'historico_reservas.xml';
  link.click();
}


}
