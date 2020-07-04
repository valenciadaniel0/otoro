package com.back.framework.adapter;

import com.back.domain.model.Post;
import com.back.domain.port.repository.PostRepository;
import com.back.framework.adapter.mapper.PostMapper;
import com.back.framework.dbRepository.PostDBRepository;
import com.back.framework.entity.PostEntity;

import org.springframework.stereotype.Repository;

@Repository
public class PostRepositoryImplementation implements PostRepository {
    private PostDBRepository postDBRepository;

    public PostRepositoryImplementation(PostDBRepository postDBRepository) {
        this.postDBRepository = postDBRepository;
    }

    @Override
    public void save(Post post) {
        this.postDBRepository.save(PostMapper.modelToEntity(post));
    }

    @Override
    public void update(Post post) {
        PostEntity postEntity = PostMapper.modelToEntity(post);
        if (postEntity.getType() == 1) {
            this.postDBRepository.updateShipping(postEntity.getId(), postEntity.getDate(), postEntity.getDescription(),
                    postEntity.getPrice(), postEntity.getTitle(), postEntity.getType(),
                    postEntity.getDestination() == null ? null : postEntity.getDestination().getId(),
                    postEntity.getOrigin() == null ? null : postEntity.getOrigin().getId(), postEntity.getImage1(),
                    postEntity.getImage2(), postEntity.getImage3());
        } else {
            this.postDBRepository.updateSell(postEntity.getId(), postEntity.getDescription(), postEntity.getPrice(),
                    postEntity.getTitle(), postEntity.getType(),
                    postEntity.getOrigin() == null ? null : postEntity.getOrigin().getId(), postEntity.getImage1(),
                    postEntity.getImage2(), postEntity.getImage3());
        }
    }

    @Override
    public void delete(Long id) {
        this.postDBRepository.deleteById(id);
    }
}