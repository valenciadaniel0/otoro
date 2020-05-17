package com.back.framework.dbRepository;

import com.back.framework.entity.CityEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CityDBRepository extends JpaRepository<CityEntity, Long> {
    
}