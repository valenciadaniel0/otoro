package com.back.application.factory;

import com.back.application.handler.command.DepartmentCommand;
import com.back.domain.model.Department;

public class DepartmentFactory {
    private DepartmentFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Department create(DepartmentCommand departmentCommand) {
        return new Department(departmentCommand.getId(), departmentCommand.getCode(), departmentCommand.getName());
    }
}