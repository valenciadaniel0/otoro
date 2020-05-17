package com.back.application.handler.departments;

import com.back.application.factory.DepartmentFactory;
import com.back.application.handler.command.DepartmentCommand;
import com.back.domain.service.departments.CreateDepartmentService;

import org.springframework.stereotype.Component;

@Component
public class CreateDepartmentHandler {

    private CreateDepartmentService createDepartmentService;

    public CreateDepartmentHandler(CreateDepartmentService createDepartmentService) {
        this.createDepartmentService = createDepartmentService;
    }

    public void run(DepartmentCommand departmentCommand) {
        this.createDepartmentService.run(DepartmentFactory.create(departmentCommand));
    }

}