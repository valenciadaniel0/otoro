package com.back.application.handler.command;

import java.util.Date;

import com.back.domain.model.City;
import com.back.domain.model.User;

public class PostCommand {
    private Long id;
    private int type;
    private String image;
    private String title;
    private String description;
    private Double price;
    private Date date;
    private User user;
    private City origin;
    private City destination;

    public PostCommand() {

    }

    public PostCommand(Long id, int type, String image, String title, String description, Double price, Date date,
            User user, City origin, City destination) {
        this.id = id;
        this.type = type;
        this.image = image;
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

    public int getType() {
        return type;
    }

    public String getImage() {
        return image;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Double getPrice() {
        return price;
    }

    public Date getDate() {
        return date;
    }

    public User getUser() {
        return user;
    }

    public City getOrigin() {
        return origin;
    }

    public City getDestination() {
        return destination;
    }

}