package com.back.domain.model;

import java.util.Date;

import com.back.domain.exception.GeneralException;

public class DataValidator {
    public static void validateNull(String value, String message) {
        if (value == null || value.isEmpty()) {
            throw new GeneralException(message);
        }
    }

    public static void validatePriceNull(Double value, String message) {
        if (value == null) {
            throw new GeneralException(message);
        }
    }

    public static void validateDateNull(Date value, String message) {
        if (value == null) {
            throw new GeneralException(message);
        }
    }
}