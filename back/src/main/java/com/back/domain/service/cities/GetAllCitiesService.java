package com.back.domain.service.cities;

import java.util.List;

import com.back.domain.model.City;
import com.back.domain.port.repository.CityRepository;

public class GetAllCitiesService {
    private CityRepository cityRepository;

    public GetAllCitiesService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public List<City> run() {
        return this.cityRepository.findAll();
    }
}