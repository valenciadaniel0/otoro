package com.back.framework.dbRepository;

import com.back.framework.entity.DepartmentEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentDBRepository extends JpaRepository<DepartmentEntity,Long> {
}