package com.back.application.handler.command;

public class DepartmentCommand {
    private String code;
    private String name;

    public DepartmentCommand() {
    }

    public DepartmentCommand(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return this.code;
    }

    public String getName() {
        return this.name;
    }
}