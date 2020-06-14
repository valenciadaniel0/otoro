package com.back.domain.service.users;

import com.back.domain.model.User;
import com.back.domain.port.repository.UserRepository;

public class GetUserByEmailService {
    private UserRepository userRepository;

    public GetUserByEmailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User run(String email) {
        return this.userRepository.findByEmail(email);
    }
}