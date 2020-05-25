package com.back.framework.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class BadUserOrPasswordException{    

    @ExceptionHandler(value = GeneralException.class)
    public ResponseEntity<Object> exception(GeneralException exception) {
        return new ResponseEntity<>("Email o contraseña incorrectos", HttpStatus.NOT_FOUND);
    }

}