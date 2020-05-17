package com.back.framework.adapter;

import com.back.domain.model.City;
import com.back.domain.port.CityRepository;
import com.back.framework.adapter.mapper.CityMapper;
import com.back.framework.dbRepository.CityDBRepository;

import org.springframework.stereotype.Repository;

@Repository
public class CityRepositoryImplementation implements CityRepository {
    private CityDBRepository cityDBRepository;

    public CityRepositoryImplementation(CityDBRepository cityDBRepository) {
        this.cityDBRepository = cityDBRepository;
    }

    @Override
    public void save(City city) {
        this.cityDBRepository.save(CityMapper.modelToEntity(city));
    }
}