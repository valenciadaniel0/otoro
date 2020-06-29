package com.back.framework.controller;

import java.util.List;

import com.back.application.handler.command.CommentCommand;
import com.back.application.handler.comments.CreateCommentHandler;
import com.back.application.handler.comments.GetCommentsByPostHandler;
import com.back.domain.model.Comment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private CreateCommentHandler createCommentHandler;
    private GetCommentsByPostHandler getCommentsByPostHandler;

    public CommentController(CreateCommentHandler createCommentHandler,
            GetCommentsByPostHandler getCommentsByPostHandler) {
        this.createCommentHandler = createCommentHandler;
        this.getCommentsByPostHandler = getCommentsByPostHandler;
    }

    @PostMapping
    public void save(@RequestBody CommentCommand commentCommand) {
        this.createCommentHandler.run(commentCommand);
    }

    @GetMapping(value = "/get-by-post/{postId}")
    public List<Comment> getByType(@PathVariable(value = "postId") int postId) {
        return this.getCommentsByPostHandler.run(postId);
    }
}