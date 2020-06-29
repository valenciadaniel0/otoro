package com.back.domain.model;

import java.util.Date;

public class Post {
    private static final String THE_TITLE_IS_REQUIRED = "El campo título es requerido";
    private static final String THE_DESCRIPTION_IS_REQUIRED = "El campo descripción es requerido";
    private static final String THE_PRICE_IS_REQUIRED = "El campo precio es requerido";
    private static final String THE_DATE_IS_REQUIRED = "El campo fecha es requerido";
    private static final String THE_ORIGIN_IS_REQUIRED = "El origen del envio es requerido";
    private static final String THE_DESTINATION_IS_REQUIRED = "El destino del envio es requerido";

    private Long id;
    private int type;
    private String image1;
    private String image2;
    private String image3;
    private String title;
    private String description;
    private Double price;
    private Date date;
    private User user;
    private City origin;
    private City destination;

    public Post() {

    }

    public Post(Long id, int type, String image1, String image2, String image3, String title, String description,
            Double price, Date date, User user, City origin, City destination) {
        DataValidator.validateNull(title, THE_TITLE_IS_REQUIRED);
        DataValidator.validateNull(description, THE_DESCRIPTION_IS_REQUIRED);
        if (type == 1) {
            DataValidator.validateObjectNull(date, THE_DATE_IS_REQUIRED);
            DataValidator.validateObjectNull(origin, THE_ORIGIN_IS_REQUIRED);
            DataValidator.validateObjectNull(destination, THE_DESTINATION_IS_REQUIRED);
        }

        if (type == 2) {
            DataValidator.validatePriceNull(price, THE_PRICE_IS_REQUIRED);
        }
        this.id = id;
        this.type = type;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.title = title;
        this.description = description;
        this.price = price;
        this.date = date;
        this.user = user;
        this.origin = origin;
        this.destination = destination;
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

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    public String getImage3() {
        return image3;
    }

    public void setImage3(String image3) {
        this.image3 = image3;
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

    public City getOrigin() {
        return origin;
    }

    public void setOrigin(City origin) {
        this.origin = origin;
    }

    public City getDestination() {
        return destination;
    }

    public void setDestination(City destination) {
        this.destination = destination;
    }

}