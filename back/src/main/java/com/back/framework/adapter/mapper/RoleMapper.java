package com.back.framework.adapter.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.Role;
import com.back.framework.entity.RoleEntity;

public class RoleMapper {
    public static RoleEntity modelToEntity(Role role) {
        return new RoleEntity(role.getId(), role.getName(), UserMapper.modelsListToEntitiesList(role.getUsers()));
    }

    public static List<RoleEntity> modelsListToEntitiesList(List<Role> roles) {
        if (roles == null)
            return null;
        return roles.stream().map(role -> RoleMapper.modelToEntity(role)).collect(Collectors.toList());
    }
}