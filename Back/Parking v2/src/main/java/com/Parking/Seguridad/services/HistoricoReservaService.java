package com.Parking.Seguridad.services;

import com.Parking.Seguridad.dtos.PorcentajeTipoVehiculoDTO;
import com.Parking.Seguridad.dtos.TotalFacturadoDiaDTO;
import com.Parking.Seguridad.entities.HistoricoReserva;
import com.Parking.Seguridad.entities.Reserva;
import com.Parking.Seguridad.repositories.HistoricoReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoricoReservaService {
    @Autowired
    private HistoricoReservaRepository historicoRepo;

    public List<TotalFacturadoDiaDTO> obtenerTotalFacturadoPorDia() {
        return historicoRepo.obtenerTotalFacturadoPorDia();
    }

    public List<PorcentajeTipoVehiculoDTO> obtenerCantidadPorTipoVehiculo() {
        return historicoRepo.obtenerCantidadPorTipoVehiculo();
    }

    public List<HistoricoReserva> obtenerTodos()
    {
        return historicoRepo.findAll();
    }
}
