package com.back.framework.config.beans;

import com.back.domain.port.dao.PostDao;
import com.back.domain.port.repository.PostRepository;
import com.back.domain.service.posts.CreatePostService;
import com.back.domain.service.posts.DeleteService;
import com.back.domain.service.posts.GetCommentsNumberService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PostServiceBean {
    @Bean
    public CreatePostService createPostService(PostRepository postRepository) {
        return new CreatePostService(postRepository);
    }

    @Bean
    public DeleteService deletePostService(PostRepository postRepository, PostDao postDao) {
        return new DeleteService(postRepository, postDao);
    }

    @Bean
    public GetCommentsNumberService getCommentsNumberService(PostDao postDao) {
        return new GetCommentsNumberService(postDao);
    }
}