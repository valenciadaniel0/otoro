package com.back.application.factory;

import com.back.application.handler.command.CityCommand;
import com.back.domain.model.City;

public class CityFactory {
    private CityFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static City create(CityCommand cityCommand) {
        return new City(cityCommand.getId(), cityCommand.getName(), cityCommand.getCode(), cityCommand.getDepartment());
    }
}