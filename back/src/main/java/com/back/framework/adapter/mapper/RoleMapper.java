package com.back.framework.adapter.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.Role;
import com.back.framework.entity.RoleEntity;

import org.modelmapper.ModelMapper;

public class RoleMapper {
    public static RoleEntity modelToEntity(Role role) {        
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(role, RoleEntity.class);
    }

    public static List<RoleEntity> modelsListToEntitiesList(List<Role> roles) {
        if (roles == null)
            return null;
        return roles.stream().map(role -> RoleMapper.modelToEntity(role)).collect(Collectors.toList());
    }
}