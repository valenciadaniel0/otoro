package com.back.domain.port;

import com.back.domain.model.Department;

public interface DepartmentRepository {
    void save (Department department);
}