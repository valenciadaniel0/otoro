package com.back.domain.port.repository;

import java.util.List;

import com.back.domain.model.Comment;

public interface CommentRepository {
    void save(Comment comment);

    List<Comment> getByPost(int postId);
}