package com.back.domain.service.users;

import com.back.domain.exception.GeneralException;
import com.back.domain.model.User;
import com.back.domain.port.repository.UserRepository;

public class RecoverPasswordService {
    private final String THE_USER_WAS_NOT_FOUND = "No existe un usuario con este correo electrónico";
    private final String WRONG_CODE = "El código no coincide";

    private UserRepository userRepository;

    public RecoverPasswordService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void run(User user, String recoverCode) {
        if (user != null) {
            if (user.getRecoverCode().equals(recoverCode)) {
                this.userRepository.updatePassword(user, user.getRecoverCode());
            } else {
                throw new GeneralException(this.WRONG_CODE);
            }

        } else {
            throw new GeneralException(this.THE_USER_WAS_NOT_FOUND);
        }
    }
}