package com.Parking.Seguridad.repositories;

import com.Parking.Seguridad.dtos.PorcentajeTipoVehiculoDTO;
import com.Parking.Seguridad.dtos.TotalFacturadoDiaDTO;
import com.Parking.Seguridad.entities.HistoricoReserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HistoricoReservaRepository extends JpaRepository<HistoricoReserva, Long> {

    @Query("SELECT NEW com.Parking.Seguridad.dtos.TotalFacturadoDiaDTO(r.fechaLiquidacion, SUM(r.valor)) " +
            "FROM HistoricoReserva r " +
            "GROUP BY r.fechaLiquidacion")
    List<TotalFacturadoDiaDTO> obtenerTotalFacturadoPorDia();

    @Query("SELECT new com.Parking.Seguridad.dtos.PorcentajeTipoVehiculoDTO(h.tipoVehiculo, COUNT(h)) " +
            "FROM HistoricoReserva h GROUP BY h.tipoVehiculo")
    List<PorcentajeTipoVehiculoDTO> obtenerCantidadPorTipoVehiculo();
}
