package com.back.framework.exception.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NonActiveUserException  extends RuntimeException{
    public NonActiveUserException(String message)
    {
        super(message);
    }
}