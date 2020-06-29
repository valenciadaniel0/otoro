package com.back.application.handler.comments;

import com.back.application.factory.CommentFactory;
import com.back.application.handler.command.CommentCommand;
import com.back.domain.port.repository.CommentRepository;

import org.springframework.stereotype.Component;

@Component
public class CreateCommentHandler {
    private CommentRepository commentRepository;

    public CreateCommentHandler(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void run(CommentCommand commentCommand) {
        this.commentRepository.save(CommentFactory.create(commentCommand));
    }
}