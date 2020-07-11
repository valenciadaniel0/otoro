package com.back.framework.config;

import java.io.Serializable;
import java.util.List;

import com.back.domain.model.City;
import com.back.domain.model.Role;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = 1L;
    private final Long id;
    private final String jwttoken;
    private final String name;
    private final String email;
    private final int active;
    private final String deviceToken;
    private final List<Role> roles;
    private final City city;
    private final String phone;
    private final String serviceDescription;
    private final String profilePicture;

    public JwtResponse(String jwttoken, Long id, String name, String email, int active, String deviceToken,
            List<Role> roles, City city, String phone, String serviceDescription,String profilePicture) {
        this.jwttoken = jwttoken;
        this.id = id;
        this.name = name;
        this.email = email;
        this.active = active;
        this.deviceToken = deviceToken;
        this.roles = roles;
        this.city = city;
        this.phone = phone;
        this.serviceDescription = serviceDescription;
        this.profilePicture = profilePicture;
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

    public List<Role> getRoles() {
        return this.roles;
    }

    public City getCity() {
        return this.city;
    }

    public String getPhone() {
        return this.phone;
    }

    public String getServiceDescription() {
        return this.serviceDescription;
    }

    public String getProfilePicture() {
        return this.profilePicture;
    }
}