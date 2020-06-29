package com.back.framework.adapter.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.Comment;
import com.back.framework.entity.CommentEntity;

import org.modelmapper.ModelMapper;

public class CommentMapper {
    public static CommentEntity modelToEntity(Comment comment) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(comment, CommentEntity.class);
    }

    public static List<CommentEntity> modelsListToEntitiesList(List<Comment> cities) {
        if (cities == null)
            return null;
        return cities.stream().map(comment -> CommentMapper.modelToEntity(comment)).collect(Collectors.toList());
    }
}