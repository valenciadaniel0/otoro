package com.back.framework.config.beans;

import com.back.domain.port.repository.UserRepository;
import com.back.domain.service.users.CreateUserService;
import com.back.domain.service.users.GetUserByEmailService;
import com.back.domain.service.users.RecoverPasswordService;
import com.back.domain.service.users.UpdatePasswordService;
import com.back.domain.service.users.UpdateRecoverCodeService;
import com.back.domain.service.users.UpdateService;

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

    @Bean
    public UpdatePasswordService updatePasswordService(UserRepository userRepository) {
        return new UpdatePasswordService(userRepository);
    }

    @Bean
    public RecoverPasswordService recoverPasswordService(UserRepository userRepository) {
        return new RecoverPasswordService(userRepository);
    }

    @Bean
    public UpdateRecoverCodeService updateRecoverCodeService(UserRepository userRepository) {
        return new UpdateRecoverCodeService(userRepository);
    }

    @Bean
    public UpdateService updateService(UserRepository userRepository) {
        return new UpdateService(userRepository);
    }
}