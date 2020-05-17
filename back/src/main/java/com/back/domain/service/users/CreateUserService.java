package com.back.domain.service.users;

import com.back.domain.model.User;
import com.back.domain.port.UserRepository;

public class CreateUserService {
    private UserRepository userRepository;

    public CreateUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void run(User user) {
        this.userRepository.save(user);
    }
}