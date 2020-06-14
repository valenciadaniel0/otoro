package com.back.application.handler.cities.query;

import java.util.List;

import com.back.domain.model.City;
import com.back.domain.port.repository.CityRepository;

import org.springframework.stereotype.Component;

@Component
public class SearchCitiesHandler {
    private CityRepository cityRepository;

    public SearchCitiesHandler(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public List<City> run(String query) {
        return this.cityRepository.search(query);
    }
}