package com.Parking.Seguridad.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TotalFacturadoDiaDTO {
    private LocalDateTime fecha;
    private BigDecimal totalFacturado;
}
