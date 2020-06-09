package com.back.framework.controller;

import com.back.application.handler.command.PostCommand;
import com.back.application.handler.posts.CreatePostHandler;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/posts")
@CrossOrigin(origins = "*")
public class PostController {
    private CreatePostHandler createPostHandler;

    public PostController(CreatePostHandler createPostHandler) {
        this.createPostHandler = createPostHandler;
    }

    @PostMapping(value = "")
    public void create(@RequestBody PostCommand postCommand) {
        this.createPostHandler.run(postCommand);
    }
}