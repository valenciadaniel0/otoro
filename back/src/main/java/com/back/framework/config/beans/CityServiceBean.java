package com.back.framework.config.beans;

import com.back.domain.port.repository.CityRepository;
import com.back.domain.service.cities.CreateCityService;
import com.back.domain.service.cities.GetAllCitiesService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CityServiceBean {
    @Bean
    public CreateCityService createCityService(CityRepository cityRepository) {
        return new CreateCityService(cityRepository);
    }

    @Bean
    public GetAllCitiesService getAllCitiesService(CityRepository cityRepository) {
        return new GetAllCitiesService(cityRepository);
    }
}