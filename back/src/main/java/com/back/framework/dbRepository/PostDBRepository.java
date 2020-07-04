package com.back.framework.dbRepository;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import com.back.framework.entity.PostEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface PostDBRepository extends JpaRepository<PostEntity, Long> {

    @Query(value = "SELECT * FROM posts p WHERE p.type=?1", nativeQuery = true)
    List<PostEntity> findAllByType(int type);

    @Query(value = "SELECT * FROM posts p WHERE p.type=?1 AND p.user_id = ?2", nativeQuery = true)
    List<PostEntity> findAllByTypeAndUser(int type, int userId);

    @Query(value = "SELECT p.* FROM posts p,users u WHERE u.id = p.user_id AND (p.title ILIKE %?2% OR p.description ILIKE %?2% OR u.name ILIKE %?2% ) AND p.type = ?1", nativeQuery = true)
    List<PostEntity> search(int type, String query);

    @Modifying
    @Transactional
    @Query(value = "UPDATE posts SET date = ?2,description=?3,price=?4,title=?5,type=?6,destination_id=?7,origin_id=?8,image1=?9,image2=?10,image3=?11 WHERE id=?1", nativeQuery = true)
    void updateShipping(Long id, Date date, String description, double price, String title, int type,
            Long destinationId, Long originId, String image1, String image2, String image3);

    @Modifying
    @Transactional
    @Query(value = "UPDATE posts SET description=?2,price=?3,title=?4,type=?5,origin_id=?6,image1=?7,image2=?8,image3=?9 WHERE id=?1", nativeQuery = true)
    void updateSell(Long id, String description, double price, String title, int type,
            Long originId, String image1, String image2, String image3);
}