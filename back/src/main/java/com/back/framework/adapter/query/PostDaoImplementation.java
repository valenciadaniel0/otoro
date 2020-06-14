package com.back.framework.adapter.query;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.Post;
import com.back.domain.port.dao.PostDao;
import com.back.framework.dbRepository.PostDBRepository;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Repository;

@Repository
public class PostDaoImplementation implements PostDao {
    private PostDBRepository postDBRepository;
    private ModelMapper modelMapper;

    public PostDaoImplementation(PostDBRepository postDBRepository) {
        this.postDBRepository = postDBRepository;
        this.modelMapper = new ModelMapper();
    }

    @Override
    public List<Post> getByType(int type,int userId) {
        if(userId == 0){
            return this.postDBRepository.findAllByType(type).stream().map((post) -> this.modelMapper.map(post, Post.class))
                .collect(Collectors.toList());
        }

        return this.postDBRepository.findAllByTypeAndUser(type,userId).stream().map((post) -> this.modelMapper.map(post, Post.class))
                .collect(Collectors.toList());
    }

}