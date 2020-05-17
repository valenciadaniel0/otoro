package com.back.application.handler.command;

import java.util.List;

import com.back.domain.model.User;

public class RoleCommand {
    private String name;
    private List<User> users;

    public RoleCommand() {
    }

    public RoleCommand(String name, List<User> users) {
        this.name = name;
        this.users = users;
    }

    public String getName() {
        return this.name;
    }

    public List<User> getUsers() {
        return this.users;
    }
}