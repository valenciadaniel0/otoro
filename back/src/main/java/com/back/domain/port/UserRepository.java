package com.back.domain.port;

import com.back.domain.model.User;

public interface UserRepository {
    void save(User user);

    User findByEmail(String email);
}