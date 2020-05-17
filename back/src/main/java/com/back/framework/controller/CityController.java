package com.back.framework.controller;

import com.back.application.handler.cities.CreateCityHandler;
import com.back.application.handler.command.CityCommand;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cities")
public class CityController {
    private CreateCityHandler createCityHandler;

    public CityController(CreateCityHandler createCityHandler) {
        this.createCityHandler = createCityHandler;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public void create(@RequestBody CityCommand cityCommand) {
        this.createCityHandler.run(cityCommand);
    }
}