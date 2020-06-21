package com.back.framework.dbRepository;

import javax.transaction.Transactional;

import com.back.framework.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UserDBRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByUsername(String username);

    UserEntity findByEmail(String email);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users SET active = ?2,device_token=?3,email=?4,name=?5 WHERE id=?1", nativeQuery = true)
    void update(Long id, int active, String deviceToken, String email, String name);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users SET password = ?2 WHERE id=?1", nativeQuery = true)
    void updatePassword(Long id,String newPassword);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users SET recover_code = ?2 WHERE id=?1", nativeQuery = true)
    void updateRecoverCode(Long id,String newCode);
}