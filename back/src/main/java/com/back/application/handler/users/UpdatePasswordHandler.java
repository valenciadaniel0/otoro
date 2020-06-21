package com.back.application.handler.users;

import com.back.domain.model.User;
import com.back.domain.service.users.UpdatePasswordService;

import org.springframework.stereotype.Component;

@Component
public class UpdatePasswordHandler {
    private UpdatePasswordService updatePasswordService;

    public UpdatePasswordHandler(UpdatePasswordService updatePasswordService) {
        this.updatePasswordService = updatePasswordService;
    }

    public void run(User user) {
        this.updatePasswordService.run(user);
    }
}
