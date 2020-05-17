package com.back.framework.adapter.mapper;

import com.back.domain.model.User;
import com.back.framework.entity.UserEntity;

import java.util.List;
import java.util.stream.Collectors;

public class UserMapper {

    public static UserEntity modelToEntity(User user) {
        return new UserEntity(user.getId(), user.getUsername(), user.getEmail(), user.getPassword(),
                user.getDeviceToken(), user.getName(), user.getActive(), CityMapper.modelToEntity(user.getCity()),
                RoleMapper.modelsListToEntitiesList(user.getRoles()));
    }

    public static List<UserEntity> modelsListToEntitiesList(List<User> users) {
        if (users == null)
            return null;
        return users.stream().map(user -> UserMapper.modelToEntity(user)).collect(Collectors.toList());
    }

}