package com.back.application.handler.users;

import com.back.domain.service.users.UpdateRecoverCodeService;

import org.springframework.stereotype.Component;

@Component
public class UpdateRecoverCodeHandler {
    private UpdateRecoverCodeService updateRecoverCodeService;

    public UpdateRecoverCodeHandler(UpdateRecoverCodeService updateRecoverCodeService) {
        this.updateRecoverCodeService = updateRecoverCodeService;
    }

    public void run(String email) {
        this.updateRecoverCodeService.run(email);
    }
}