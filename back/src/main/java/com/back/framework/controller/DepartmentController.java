package com.back.framework.controller;

import com.back.application.handler.command.DepartmentCommand;
import com.back.application.handler.departments.CreateDepartmentHandler;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
    private CreateDepartmentHandler createDepartmentHandler;

    public DepartmentController(CreateDepartmentHandler createDepartmentHandler) {
        this.createDepartmentHandler = createDepartmentHandler;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public void create(@RequestBody DepartmentCommand departmentCommand) {
        this.createDepartmentHandler.run(departmentCommand);
    }
}