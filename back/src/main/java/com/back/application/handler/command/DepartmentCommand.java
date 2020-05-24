package com.back.application.handler.command;

import java.util.List;

import com.back.domain.model.City;

public class DepartmentCommand {
    private Long id;
    private String code;
    private String name;
    private List<City> cities;

    public DepartmentCommand() {
    }

    public DepartmentCommand(Long id, String code, String name, List<City> cities) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.cities = cities;
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

    public List<City> getCities() {
        return this.cities;
    }
}