package com.back.domain.model;

import java.util.Date;

public class Post {
    private static final String THE_TITLE_IS_REQUIRED = "El campo título es requerido";
    private static final String THE_DESCRIPTION_IS_REQUIRED = "El campo descripción es requerido";
    private static final String THE_PRICE_IS_REQUIRED = "El campo precio es requerido";
    private static final String THE_DATE_IS_REQUIRED = "El campo fecha es requerido";

    private Long id;
    private int type;
    private String image;
    private String title;
    private String description;
    private Double price;
    private Date date;
    private User user;

    public Post(Long id, int type, String image, String title, String description, Double price, Date date,
            User user) {
        DataValidator.validateNull(title, THE_TITLE_IS_REQUIRED);
        DataValidator.validateNull(description, THE_DESCRIPTION_IS_REQUIRED);
        if (type == 1) {
            DataValidator.validateDateNull(date, THE_DATE_IS_REQUIRED);
        }

        if (type == 2) {
            DataValidator.validatePriceNull(price, THE_PRICE_IS_REQUIRED);
        }
        this.id = id;
        this.type = type;
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
        this.date = date;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}