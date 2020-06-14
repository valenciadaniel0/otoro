package com.back.framework.config;

import java.io.Serializable;
import java.util.List;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = 1L;
    private final Long id;
    private final String jwttoken;
    private final String name;
    private final String email;
    private final int active;
    private final String deviceToken;
    private final List<String> roles;

    public JwtResponse(String jwttoken, Long id, String name, String email, int active, String deviceToken,
            List<String> roles) {
        this.jwttoken = jwttoken;
        this.id = id;
        this.name = name;
        this.email = email;
        this.active = active;
        this.deviceToken = deviceToken;
        this.roles = roles;
    }

    public String getToken() {
        return this.jwttoken;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public int getActive() {
        return this.active;
    }

    public String getDeviceToken() {
        return this.deviceToken;
    }

    public List<String> getRoles() {
        return this.roles;
    }
}