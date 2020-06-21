package com.back.domain.service.users;

import com.back.domain.exception.GeneralException;
import com.back.domain.model.User;
import com.back.domain.port.repository.UserRepository;

public class UpdatePasswordService {
    private final String THE_USER_WAS_NOT_FOUND = "No existe un usuario con este correo electrónico";

    private UserRepository userRepository;

    public UpdatePasswordService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void run(User user) {
        if (user != null) {
            this.userRepository.updatePassword(user, user.getRecoverCode());

        } else {
            throw new GeneralException(this.THE_USER_WAS_NOT_FOUND);
        }
    }
}