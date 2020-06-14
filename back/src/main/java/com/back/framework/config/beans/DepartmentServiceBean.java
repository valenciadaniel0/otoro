package com.back.framework.config.beans;

import com.back.domain.port.repository.DepartmentRepository;
import com.back.domain.service.departments.CreateDepartmentService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DepartmentServiceBean {
    @Bean
    public CreateDepartmentService createDepartmentService(DepartmentRepository departmentRepository) {
        return new CreateDepartmentService(departmentRepository);
    }
}