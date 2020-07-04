package com.back.application.handler.posts.query;

import com.back.domain.model.Post;
import com.back.domain.port.dao.PostDao;

import org.springframework.stereotype.Component;

@Component
public class GetByIdHandler {
    private PostDao postDao;

    public GetByIdHandler(PostDao postDao) {
        this.postDao = postDao;
    }

    public Post run(Long id) {        
        return this.postDao.findById(id);
    }
}