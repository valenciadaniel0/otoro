package com.back.domain.model;

import com.back.domain.exception.GeneralException;

public class DataValidator {
    public static void validateNull(String value, String message) {
        if (value == null || value.isEmpty()) {
            throw new GeneralException(message);
        }
    }
}