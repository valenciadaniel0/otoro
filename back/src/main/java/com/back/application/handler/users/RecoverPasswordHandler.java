package com.back.application.handler.users;

import com.back.domain.model.User;
import com.back.domain.service.users.RecoverPasswordService;

import org.springframework.stereotype.Component;

@Component
public class RecoverPasswordHandler {
    private RecoverPasswordService recoverPasswordService;

    public RecoverPasswordHandler(RecoverPasswordService recoverPasswordService) {
        this.recoverPasswordService = recoverPasswordService;
    }

    public void run(User user, String recoverCode) {        
        this.recoverPasswordService.run(user, recoverCode);
    }
}