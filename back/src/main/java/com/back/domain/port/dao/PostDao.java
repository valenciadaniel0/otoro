package com.back.domain.port.dao;

import java.util.List;

import com.back.domain.model.Post;

public interface PostDao {
    List<Post> getByType(int type, int userId);

    List<Post> search(int type, String query);

    Post findById(Long id);

    int getCommentsNumber(Long id);
}