package com.back.application.handler.command;

public class RoleCommand {
    private String name;

    public RoleCommand() {
    }

    public RoleCommand(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}