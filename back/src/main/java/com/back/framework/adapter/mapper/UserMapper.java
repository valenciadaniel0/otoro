package com.back.framework.adapter.mapper;

import com.back.domain.model.User;
import com.back.framework.entity.UserEntity;

import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class UserMapper {

    public static UserEntity modelToEntity(User user) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(user, UserEntity.class);
    }

    public static List<UserEntity> modelsListToEntitiesList(List<User> users) {
        if (users == null)
            return null;
        return users.stream().map(user -> UserMapper.modelToEntity(user)).collect(Collectors.toList());
    }

}