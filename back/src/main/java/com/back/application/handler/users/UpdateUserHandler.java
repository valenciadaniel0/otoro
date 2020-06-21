package com.back.application.handler.users;

import com.back.application.factory.UserFactory;
import com.back.application.handler.users.command.UserCommand;
import com.back.domain.port.repository.UserRepository;

import org.springframework.stereotype.Component;

@Component
public class UpdateUserHandler {
    private UserRepository userRepository;

    public UpdateUserHandler(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void run(UserCommand userCommand) {
        this.userRepository.update(UserFactory.create(userCommand));
    }
}