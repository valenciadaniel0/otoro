package com.back.application.handler.users;

import com.back.domain.model.User;
import com.back.domain.service.users.GetUserByEmailService;

import org.springframework.stereotype.Component;

@Component
public class GetUserByEmailHandler {
    private GetUserByEmailService getUserByEmailService;

    public GetUserByEmailHandler(GetUserByEmailService getUserByEmailService) {
        this.getUserByEmailService = getUserByEmailService;
    }

    public User run(String email){
        return this.getUserByEmailService.run(email);
    }
}