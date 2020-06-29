package com.back.domain.model;

import java.util.List;

public class User {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String deviceToken;
    private String name;
    private String phone;
    private String serviceDescription;
    private Integer active;
    private String recoverCode;
    private String profilePicture;
    private City city;
    private List<Role> roles;

    public User() {
    }

    public User(Long id, String username, String email, String password, String deviceToken, String name, String phone,String serviceDescription,
            Integer active, String recoverCode,String profilePicture, City city, List<Role> roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.deviceToken = deviceToken;
        this.name = name;
        this.phone = phone;
        this.serviceDescription = serviceDescription;
        this.active = active;
        this.recoverCode = recoverCode;
        this.profilePicture = profilePicture;
        this.city = city;
        this.roles = roles;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDeviceToken() {
        return this.deviceToken;
    }

    public void setDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getServiceDescription() {
        return this.serviceDescription;
    }

    public void setServiceDescription(String serviceDescription) {
        this.serviceDescription = serviceDescription;
    }

    public Integer getActive() {
        return this.active;
    }

    public void setActive(Integer active) {
        this.active = active;
    }

    public String getRecoverCode() {
        return this.recoverCode;
    }

    public void setRecoverCode(String recoverCode) {
        this.recoverCode = recoverCode;
    }

    public String getProfilePicture() {
        return this.profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public City getCity() {
        return this.city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public List<Role> getRoles() {
        return this.roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }
}