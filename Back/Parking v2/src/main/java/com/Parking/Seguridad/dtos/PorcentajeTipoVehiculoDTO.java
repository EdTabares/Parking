package com.Parking.Seguridad.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PorcentajeTipoVehiculoDTO {
    private String tipoVehiculo;
    private long cantidad;
}
