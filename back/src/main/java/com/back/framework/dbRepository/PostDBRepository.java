package com.back.framework.dbRepository;

import java.util.List;

import com.back.framework.entity.PostEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostDBRepository extends JpaRepository<PostEntity, Long> {
    @Query(value = "SELECT * FROM posts p WHERE p.type=?1", nativeQuery = true)
    List<PostEntity> findAllByType(int type);

    @Query(value = "SELECT * FROM posts p WHERE p.type=?1 AND p.user_id = ?2", nativeQuery = true)
    List<PostEntity> findAllByTypeAndUser(int type, int userId);

    @Query(value = "SELECT p.* FROM posts p,users u WHERE u.id = p.user_id AND (p.title ILIKE %?2% OR p.description ILIKE %?2% OR u.name ILIKE %?2% ) AND p.type = ?1", nativeQuery = true)
    List<PostEntity> search(int type, String query);
}