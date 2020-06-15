package com.back.application.handler.posts.query;

import java.util.List;

import com.back.domain.model.Post;
import com.back.domain.port.dao.PostDao;

import org.springframework.stereotype.Component;

@Component
public class SearchPostsHandler {
    private PostDao postDao;

    public SearchPostsHandler(PostDao postDao) {
        this.postDao = postDao;
    }

    public List<Post> run(int type, String query) {
        return this.postDao.search(type, query);
    }
}