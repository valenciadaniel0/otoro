package com.back.framework.adapter.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.Post;
import com.back.framework.entity.PostEntity;

import org.modelmapper.ModelMapper;

public class PostMapper {
    public static PostEntity modelToEntity(Post post) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(post, PostEntity.class);
    }

    public static List<PostEntity> modelsListToEntitiesList(List<Post> posts) {
        if (posts == null)
            return null;
        return posts.stream().map(post -> PostMapper.modelToEntity(post)).collect(Collectors.toList());
    }
}