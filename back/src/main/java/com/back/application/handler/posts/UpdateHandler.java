package com.back.application.handler.posts;

import com.back.application.factory.PostFactory;
import com.back.application.handler.command.PostCommand;
import com.back.domain.port.repository.PostRepository;

import org.springframework.stereotype.Component;

@Component
public class UpdateHandler {
    private PostRepository postRepository;

    public UpdateHandler(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public void run(PostCommand postCommand) {
        this.postRepository.update(PostFactory.create(postCommand));
    }
}