package com.back.framework.exception.user;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@ControllerAdvice
public class UserErrorAdvice{

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler({NonActiveUserException.class})
    public void handle(NonActiveUserException e) {}

    /* @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)

    @ExceptionHandler({DogsServiceException.class, SQLException.class, NullPointerException.class})

    public void handle() {}

    @ResponseStatus(HttpStatus.BAD_REQUEST)

    @ExceptionHandler({DogsServiceValidationException.class})

    public void handle(DogsServiceValidationException e) {} */
}