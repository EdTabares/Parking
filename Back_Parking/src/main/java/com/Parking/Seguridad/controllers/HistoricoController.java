package com.Parking.Seguridad.controllers;

import com.Parking.Seguridad.dtos.PorcentajeTipoVehiculoDTO;
import com.Parking.Seguridad.dtos.TotalFacturadoDiaDTO;
import com.Parking.Seguridad.entities.HistoricoReserva;
import com.Parking.Seguridad.repositories.HistoricoReservaRepository;
import com.Parking.Seguridad.services.HistoricoReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/historico")
@CrossOrigin(origins = "http://localhost:4200")
public class HistoricoController {

    @Autowired
    private HistoricoReservaRepository historicoRepo;

    @Autowired
    private HistoricoReservaService historicoService;

    @GetMapping("")
    public List<HistoricoReserva> listarHistorico() {
        return historicoRepo.findAll();
    }

    @GetMapping("/total-dia")
    public List<TotalFacturadoDiaDTO> obtenerTotalFacturadoPorDia() {
        return historicoService.obtenerTotalFacturadoPorDia();
    }

    @GetMapping("/porcentaje-tipo")
    public List<PorcentajeTipoVehiculoDTO> obtenerCantidadPorTipoVehiculo() {
        return historicoService.obtenerCantidadPorTipoVehiculo();
    }
}
