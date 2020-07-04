package com.back.application.handler.users;

import com.back.application.factory.UserFactory;
import com.back.application.handler.users.command.UserCommand;
import com.back.domain.service.users.UpdateService;

import org.springframework.stereotype.Component;

@Component
public class UpdateUserHandler {
    private UpdateService updateService;

    public UpdateUserHandler(UpdateService updateService) {
        this.updateService = updateService;
    }

    public void run(UserCommand userCommand) {
        this.updateService.run(UserFactory.create(userCommand));
    }
}