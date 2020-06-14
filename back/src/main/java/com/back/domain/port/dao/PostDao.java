package com.back.domain.port.dao;

import java.util.List;

import com.back.domain.model.Post;

public interface PostDao {
    List<Post> getByType(int type,int userId);
}