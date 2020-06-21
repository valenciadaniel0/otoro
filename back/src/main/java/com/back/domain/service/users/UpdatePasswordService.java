package com.back.domain.service.users;

import java.util.Random;

import com.back.domain.exception.GeneralException;
import com.back.domain.model.User;
import com.back.domain.port.repository.UserRepository;

public class UpdatePasswordService {
    private final String THE_USER_WAS_NOT_FOUND = "No existe un usuario con este correo electrónico";
    private final String TARGET_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    private final int TARGET_CHARACTERS_LENGTH = TARGET_CHARACTERS.length();

    private UserRepository userRepository;

    public UpdatePasswordService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void run(User user){
        if(user != null){            
            String newPassword = "";
            Random random = new Random();
            for (int i = 0; i < 8; i++) {
                int randomNumber = random.nextInt(this.TARGET_CHARACTERS_LENGTH);
                newPassword += this.TARGET_CHARACTERS.charAt(randomNumber);
            }   
            this.userRepository.updatePassword(user, newPassword);       

        }else{
            throw new GeneralException(this.THE_USER_WAS_NOT_FOUND);
        }
    }
}