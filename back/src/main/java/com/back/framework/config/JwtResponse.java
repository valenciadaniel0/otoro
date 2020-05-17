package com.back.framework.config;

import java.io.Serializable;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = 1L;
    private final String jwttoken;
    private final String name;
    private final String email;
    private final int active;
    private final String deviceToken;

    public JwtResponse(String jwttoken, String name, String email, int active, String deviceToken) {
        this.jwttoken = jwttoken;
        this.name = name;
        this.email = email;
        this.active = active;
        this.deviceToken = deviceToken;
    }

    public String getToken() {
        return this.jwttoken;
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
}