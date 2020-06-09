package com.back.domain.port;

import com.back.domain.model.Post;

public interface PostRepository {
    void save(Post post);
}