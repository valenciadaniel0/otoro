package com.back.application.handler.posts.query;

import java.util.List;

import com.back.domain.model.Post;
import com.back.domain.port.dao.PostDao;

import org.springframework.stereotype.Component;

@Component
public class GetPostsByTypeHandler {
    private PostDao postDao;

    public GetPostsByTypeHandler(PostDao postDao) {
        this.postDao = postDao;
    }

    public List<Post> run(int type,int userId) {
        return this.postDao.getByType(type,userId);
    }

}