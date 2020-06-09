package com.back.application.handler.posts;

import com.back.application.factory.PostFactory;
import com.back.application.handler.command.PostCommand;
import com.back.domain.service.posts.CreatePostService;

import org.springframework.stereotype.Component;

@Component
public class CreatePostHandler {
    private CreatePostService createPostService;

    public CreatePostHandler(CreatePostService createPostService) {
        this.createPostService = createPostService;
    }

    public void run(PostCommand postCommand) {
        this.createPostService.run(PostFactory.create(postCommand));
    }
}