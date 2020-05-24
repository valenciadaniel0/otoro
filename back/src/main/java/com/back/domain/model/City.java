package com.back.domain.model;

public class City {
    private static final String THE_NAME_IS_REQUIRED = "The name field is required";
    private static final String THE_CODE_IS_REQUIRED = "The code field is required";
    private Long id;
    private String name;
    private String code;
    private Department department;

    public City() {
    }

    public City(Long id, String name, String code, Department department) {
        DataValidator.validateNull(name, THE_NAME_IS_REQUIRED);
        DataValidator.validateNull(code, THE_CODE_IS_REQUIRED);

        this.id = id;
        this.name = name;
        this.code = code;
        this.department = department;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}