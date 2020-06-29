package com.back.domain.model;

public class Comment {
    public Long id;
    public String comment;
    public Post post;
    public User user;

    public Comment(){
    }

    public Comment(Long id, String comment,Post post, User user) {
        this.id = id;
        this.comment = comment;
        this.post = post;
        this.user = user;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Post getPost() {
        return this.post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}