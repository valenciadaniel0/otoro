package com.back.domain.port;

import com.back.domain.model.City;

public interface CityRepository {
    void save(City city);
}