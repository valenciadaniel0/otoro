package com.back.domain.port;

import java.util.List;

import com.back.domain.model.City;

public interface CityRepository {
    void save(City city);
    List<City> findAll();
}