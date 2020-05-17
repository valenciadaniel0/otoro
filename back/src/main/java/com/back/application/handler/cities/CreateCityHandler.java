package com.back.application.handler.cities;

import com.back.application.factory.CityFactory;
import com.back.application.handler.command.CityCommand;
import com.back.domain.service.cities.CreateCityService;

import org.springframework.stereotype.Component;

@Component
public class CreateCityHandler {
    private CreateCityService createCityService;

    public CreateCityHandler(CreateCityService createCityService) {
        this.createCityService = createCityService;
    }

    public void run(CityCommand cityCommand) {
        this.createCityService.run(CityFactory.create(cityCommand));
    }
}