package com.back.application.factory;

import com.back.application.handler.users.command.UserCommand;
import com.back.domain.model.User;

public class UserFactory {
    private UserFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static User create(UserCommand commandUser) {
        return new User(commandUser.getId(),commandUser.getUsername(),commandUser.getEmail(), commandUser.getPassword(), commandUser.getDeviceToken(),
                commandUser.getName(), commandUser.getActive(),commandUser.getRecoverCode(), commandUser.getCity(), commandUser.getRoles());
    }
}