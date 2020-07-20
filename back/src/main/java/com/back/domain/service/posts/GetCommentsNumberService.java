package com.back.domain.service.posts;

import com.back.domain.model.Post;
import com.back.domain.port.dao.PostDao;

public class GetCommentsNumberService {
    private PostDao postDao;

    public GetCommentsNumberService(PostDao postDao) {
        this.postDao = postDao;
    }

    public int run(Long id) {
        Post post = this.postDao.findById(id);
        return post != null ? this.postDao.getCommentsNumber(id) : 0;
    }
}