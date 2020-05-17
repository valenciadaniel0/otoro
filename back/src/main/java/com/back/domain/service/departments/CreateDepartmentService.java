package com.back.domain.service.departments;

import com.back.domain.model.Department;
import com.back.domain.port.DepartmentRepository;

public class CreateDepartmentService {
    private DepartmentRepository departmentRepository;

    public CreateDepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public void run(Department department) {
        this.departmentRepository.save(department);
    }
}