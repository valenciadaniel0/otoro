package com.back.application.handler.users;

import com.back.application.factory.UserFactory;
import com.back.application.handler.command.UserCommand;
import com.back.domain.service.users.CreateUserService;

import org.springframework.stereotype.Component;

@Component
public class CreateUserHandler {
    private CreateUserService createUserService;

    public CreateUserHandler(CreateUserService createUserService) {
        this.createUserService = createUserService;
    }

    public void run(UserCommand userCommand) {
        this.createUserService.run(UserFactory.create(userCommand));
    }
}