package com.back.application.handler.cities;

import java.util.List;

import com.back.domain.model.City;
import com.back.domain.service.cities.GetAllCitiesService;

import org.springframework.stereotype.Component;

@Component
public class GetAllCitiesHandler {
    private GetAllCitiesService getAllCitiesService;

    public GetAllCitiesHandler(GetAllCitiesService getAllCitiesService) {
        this.getAllCitiesService = getAllCitiesService;
    }

    public List<City> run() {
        return this.getAllCitiesService.run();
    }
}