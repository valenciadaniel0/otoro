package com.back.framework.adapter;

import com.back.domain.model.Post;
import com.back.domain.port.repository.PostRepository;
import com.back.framework.adapter.mapper.PostMapper;
import com.back.framework.dbRepository.PostDBRepository;

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
}