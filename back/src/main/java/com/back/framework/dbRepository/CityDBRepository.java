package com.back.framework.dbRepository;

import java.util.List;

import com.back.framework.entity.CityEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CityDBRepository extends JpaRepository<CityEntity, Long> {
    @Query(value = "SELECT c.id,c.code, concat(c.name,'-',d.name) as name, c.department_id FROM cities c, departments d WHERE c.department_id= d.id AND concat(c.name,'-',d.name) ILIKE %?1%", nativeQuery = true)
    List<CityEntity> search(String query);
}