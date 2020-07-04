package com.back.domain.service.posts;

import com.back.domain.exception.GeneralException;
import com.back.domain.model.Post;
import com.back.domain.port.dao.PostDao;
import com.back.domain.port.repository.PostRepository;

public class DeleteService {
    private final String THE_POST_WAS_NOT_FOUND = "No existe una publicación con este id";    

    private PostRepository postRepository;
    private PostDao postDao;

    public DeleteService(PostRepository postRepository,PostDao postDao) {
        this.postRepository = postRepository;
        this.postDao = postDao;
    }

    public void run(Long id) {
        Post post = postDao.findById(id);
        if (post != null) {
            this.postRepository.delete(id);
        } else {
            throw new GeneralException(this.THE_POST_WAS_NOT_FOUND);
        }
    }
}