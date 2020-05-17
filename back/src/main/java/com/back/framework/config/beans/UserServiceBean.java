package com.back.framework.config.beans;

import com.back.domain.port.UserRepository;
import com.back.domain.service.users.CreateUserService;
import com.back.domain.service.users.GetUserByEmailService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserServiceBean {
    @Bean
    public CreateUserService createUserService(UserRepository userRepository) {
        return new CreateUserService(userRepository);
    }

    @Bean
    public GetUserByEmailService getUserByEmailService(UserRepository userRepository) {
        return new GetUserByEmailService(userRepository);
    }
}