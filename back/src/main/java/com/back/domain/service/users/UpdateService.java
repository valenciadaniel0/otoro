package com.back.domain.service.users;

import com.back.domain.exception.GeneralException;
import com.back.domain.model.User;
import com.back.domain.port.repository.UserRepository;

public class UpdateService {
    private final String THE_USER_WAS_NOT_FOUND = "El usuario no existe";

    private UserRepository userRepository;

    public UpdateService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void run(User user) {
        User existingUser = this.userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            this.userRepository.update(user);
            if (user.getPassword() != null && !user.getPassword().equals("")) {
                this.userRepository.updatePassword(user, user.getPassword());
            }
        } else {
            throw new GeneralException(this.THE_USER_WAS_NOT_FOUND);
        }

    }
}