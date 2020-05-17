package com.back.framework.dbRepository;

import com.back.framework.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDBRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByUsername(String username);

    UserEntity findByEmail(String email);
}