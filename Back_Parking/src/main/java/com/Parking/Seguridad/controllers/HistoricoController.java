package com.Parking.Seguridad.controllers;

import com.Parking.Seguridad.dtos.PorcentajeTipoVehiculoDTO;
import com.Parking.Seguridad.dtos.TotalFacturadoDiaDTO;
import com.Parking.Seguridad.entities.HistoricoReserva;
import com.Parking.Seguridad.repositories.HistoricoReservaRepository;
import com.Parking.Seguridad.services.HistoricoReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/historico")
//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "https://parking-front.onrender.com", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
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
