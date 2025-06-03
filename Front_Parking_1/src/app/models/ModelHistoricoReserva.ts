export interface ModelHistoricoReserva {
  id: number;
  placa: string;
  tipoVehiculo: string;
  fechaIngreso: string; // LocalDateTime en formato string (ISO 8601)
  fechaSalida: string;
  valor: number;
  fechaLiquidacion: string;
}
