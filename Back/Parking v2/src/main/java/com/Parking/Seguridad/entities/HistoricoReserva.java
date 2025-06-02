package com.Parking.Seguridad.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "historico_reserva")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoricoReserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String placa;

    private String tipoVehiculo;

    private LocalDateTime fechaIngreso;

    private LocalDateTime fechaSalida;

    private BigDecimal valor;

    private LocalDateTime fechaLiquidacion;
}
