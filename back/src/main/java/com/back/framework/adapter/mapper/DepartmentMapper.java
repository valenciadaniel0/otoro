package com.back.framework.adapter.mapper;

import com.back.domain.model.Department;
import com.back.framework.entity.DepartmentEntity;

public class DepartmentMapper {
    public static DepartmentEntity modelToEntity(Department department) {
        return new DepartmentEntity(department.getId(), department.getName(), department.getCode());
    }
}