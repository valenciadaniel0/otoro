package com.back.application.factory;

import com.back.application.handler.command.PostCommand;
import com.back.domain.model.Post;

public class PostFactory {
    private PostFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Post create(PostCommand postCommand) {
        return new Post(postCommand.getId(), postCommand.getType(), postCommand.getImage1(), postCommand.getImage2(),
                postCommand.getImage3(), postCommand.getTitle(), postCommand.getDescription(), postCommand.getPrice(),
                postCommand.getDate(), postCommand.getUser(), postCommand.getOrigin(), postCommand.getDestination());
    }
}