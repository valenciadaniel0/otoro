package com.back.application.handler.comments;

import java.util.List;

import com.back.domain.model.Comment;
import com.back.domain.port.repository.CommentRepository;

import org.springframework.stereotype.Component;

@Component
public class GetCommentsByPostHandler {
    private CommentRepository commentRepository;

    public GetCommentsByPostHandler(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public List<Comment> run(int postId) {
        return this.commentRepository.getByPost(postId);
    }
}