package com.back.framework.adapter;

import com.back.domain.model.Department;
import com.back.domain.port.DepartmentRepository;
import com.back.framework.adapter.mapper.DepartmentMapper;
import com.back.framework.dbRepository.DepartmentDBRepository;

import org.springframework.stereotype.Repository;

@Repository
public class DepartmentRepositoryImplementation implements DepartmentRepository {
    private DepartmentDBRepository departmentDBRepository;

    public DepartmentRepositoryImplementation(DepartmentDBRepository departmentDBRepository) {
        this.departmentDBRepository = departmentDBRepository;
    }

    @Override
    public void save(Department department) {
        this.departmentDBRepository.save(DepartmentMapper.modelToEntity(department));
    }
}