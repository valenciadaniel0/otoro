package com.back.application.handler.command;

public class DepartmentCommand {
    private Long id;
    private String code;
    private String name;

    public DepartmentCommand() {
    }

    public DepartmentCommand(Long id, String code, String name) {
        this.id = id;
        this.code = code;
        this.name = name;
    }

    public Long getId() {
        return this.id;
    }

    public String getCode() {
        return this.code;
    }

    public String getName() {
        return this.name;
    }
}