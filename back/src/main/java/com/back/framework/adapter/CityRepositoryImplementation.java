package com.back.framework.adapter;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.City;
import com.back.domain.port.repository.CityRepository;
import com.back.framework.adapter.mapper.CityMapper;
import com.back.framework.dbRepository.CityDBRepository;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Repository;

@Repository
public class CityRepositoryImplementation implements CityRepository {
    private CityDBRepository cityDBRepository;
    private ModelMapper modelMapper;

    public CityRepositoryImplementation(CityDBRepository cityDBRepository) {
        this.cityDBRepository = cityDBRepository;
        this.modelMapper = new ModelMapper();
    }

    @Override
    public void save(City city) {
        this.cityDBRepository.save(CityMapper.modelToEntity(city));
    }

    @Override
    public List<City> findAll() {
        return this.cityDBRepository.findAll().stream().map((city) -> this.modelMapper.map(city, City.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<City> search(String query) {
        return this.cityDBRepository.search(query).stream().map((city) -> this.modelMapper.map(city, City.class))
                .collect(Collectors.toList());
    }
}