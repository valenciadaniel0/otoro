package com.back.framework.dbRepository;

import java.util.List;

import com.back.framework.entity.CommentEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CommentDBRepository extends JpaRepository<CommentEntity, Long> {
    @Query(value = "SELECT * FROM comments c WHERE c.post_id=?1", nativeQuery = true)
    List<CommentEntity> getByPost(int postId);
}