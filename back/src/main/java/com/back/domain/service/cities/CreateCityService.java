package com.back.domain.service.cities;

import com.back.domain.model.City;
import com.back.domain.port.CityRepository;

public class CreateCityService {
    private CityRepository cityRepository;

    public CreateCityService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public void run(City city) {
        this.cityRepository.save(city);
    }
}