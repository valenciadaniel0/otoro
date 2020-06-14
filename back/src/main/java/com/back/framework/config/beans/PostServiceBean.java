package com.back.framework.config.beans;

import com.back.domain.port.repository.PostRepository;
import com.back.domain.service.posts.CreatePostService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PostServiceBean {
    @Bean
    public CreatePostService createPostService(PostRepository postRepository) {
        return new CreatePostService(postRepository);
    }
}