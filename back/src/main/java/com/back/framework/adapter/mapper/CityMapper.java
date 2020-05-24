package com.back.framework.adapter.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.City;
import com.back.framework.entity.CityEntity;

import org.modelmapper.ModelMapper;

public class CityMapper {
    public static CityEntity modelToEntity(City city) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(city, CityEntity.class);
    }

    public static List<CityEntity> modelsListToEntitiesList(List<City> cities) {
        if (cities == null)
            return null;
        return cities.stream().map(city -> CityMapper.modelToEntity(city)).collect(Collectors.toList());
    }
}