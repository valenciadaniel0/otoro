package com.back.application.handler.comments;

import com.back.domain.port.repository.CommentRepository;

import org.springframework.stereotype.Component;

@Component
public class DeleteCommentHandler {
    private CommentRepository commentRepository;

    public DeleteCommentHandler(CommentRepository commentRepository){
        this.commentRepository = commentRepository;
    }

    public void run(Long id){
        this.commentRepository.delete(id);
    }
}