package com.back.framework.adapter.mapper;

import com.back.domain.model.Department;
import com.back.framework.entity.DepartmentEntity;

import org.modelmapper.ModelMapper;

public class DepartmentMapper {
    public static DepartmentEntity modelToEntity(Department department) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(department, DepartmentEntity.class);
    }
}