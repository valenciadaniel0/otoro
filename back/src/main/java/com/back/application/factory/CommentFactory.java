package com.back.application.factory;

import com.back.application.handler.command.CommentCommand;
import com.back.domain.model.Comment;

public class CommentFactory {
    private CommentFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Comment create(CommentCommand commentCommand) {
        return new Comment(commentCommand.getId(), commentCommand.getComment(), commentCommand.getPost(),
                commentCommand.getUser());
    }

}