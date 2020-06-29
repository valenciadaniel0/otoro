package com.back.application.handler.command;

import com.back.domain.model.Post;
import com.back.domain.model.User;

public class CommentCommand {
    public Long id;
    public String comment;
    public Post post;
    public User user;

    public CommentCommand() {
    }

    public CommentCommand(Long id, String comment, Post post, User user) {
        this.id = id;
        this.comment = comment;
        this.post = post;
        this.user = user;
    }

    public Long getId() {
        return this.id;
    }

    public String getComment() {
        return this.comment;
    }

    public Post getPost() {
        return this.post;
    }

    public User getUser() {
        return this.user;
    }
}