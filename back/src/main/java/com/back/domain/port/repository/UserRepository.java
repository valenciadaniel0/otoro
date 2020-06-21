package com.back.domain.port.repository;

import com.back.domain.model.User;

public interface UserRepository {
    void save(User user);    
    User findByEmail(String email);    
    void update(User user);    
    void updatePassword(User user, String newPassword);
    void updateRecoverCode(User user, String newCode);
}