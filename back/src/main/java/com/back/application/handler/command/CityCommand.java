package com.back.application.handler.command;

import com.back.domain.model.Department;

public class CityCommand {
    private String name;
    private String code;
    private Department department;

    public CityCommand() {
    }

    public CityCommand(String name, String code, Department department) {
        this.name = name;
        this.code = code;
        this.department = department;
    }

    public String getName() {
        return this.name;
    }

    public String getCode() {
        return this.code;
    }

    public Department getDepartment() {
        return this.department;
    }
}