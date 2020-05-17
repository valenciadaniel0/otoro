package com.back.framework.adapter.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.City;
import com.back.framework.entity.CityEntity;

public class CityMapper {
    public static CityEntity modelToEntity(City city) {
        return new CityEntity(city.getId(), city.getName(), city.getCode(),
                DepartmentMapper.modelToEntity(city.getDepartment()));
    }

    public static List<CityEntity> modelsListToEntitiesList(List<City> cities) {
        if (cities == null)
            return null;
        return cities.stream().map(city -> CityMapper.modelToEntity(city)).collect(Collectors.toList());
    }
}