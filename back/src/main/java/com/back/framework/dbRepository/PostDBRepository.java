package com.back.framework.dbRepository;

import com.back.framework.entity.PostEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostDBRepository extends JpaRepository<PostEntity, Long> {
}