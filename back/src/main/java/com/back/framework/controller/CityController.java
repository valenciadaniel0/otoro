package com.back.framework.controller;

import java.util.List;

import com.back.application.handler.cities.CreateCityHandler;
import com.back.application.handler.cities.GetAllCitiesHandler;
import com.back.application.handler.command.CityCommand;
import com.back.domain.model.City;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cities")
public class CityController {
    private CreateCityHandler createCityHandler;
    private GetAllCitiesHandler getAllCitiesHandler;

    public CityController(CreateCityHandler createCityHandler, GetAllCitiesHandler getAllCitiesHandler) {
        this.createCityHandler = createCityHandler;
        this.getAllCitiesHandler = getAllCitiesHandler;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public void create(@RequestBody CityCommand cityCommand) {
        this.createCityHandler.run(cityCommand);
    }

    @GetMapping("")
    public List<City> getAllCities() {
        return this.getAllCitiesHandler.run();
    }
}