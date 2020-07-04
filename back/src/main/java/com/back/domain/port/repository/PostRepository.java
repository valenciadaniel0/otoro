package com.back.domain.port.repository;

import com.back.domain.model.Post;

public interface PostRepository {
    void save(Post post);
    void update(Post post);
    void delete(Long id);
}