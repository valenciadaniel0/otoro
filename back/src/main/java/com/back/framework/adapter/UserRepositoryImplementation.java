package com.back.framework.adapter;

import java.util.ArrayList;
import java.util.List;

import com.back.domain.model.User;
import com.back.domain.port.repository.UserRepository;
import com.back.framework.adapter.mapper.UserMapper;
import com.back.framework.dbRepository.UserDBRepository;
import com.back.framework.entity.RoleEntity;
import com.back.framework.entity.UserEntity;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImplementation implements UserRepository, UserDetailsService {
    private UserDBRepository userDBRepository;
    private ModelMapper modelMapper;
    private PasswordEncoder bcryptEncoder;

    public UserRepositoryImplementation(UserDBRepository userDBRepository) {
        this.userDBRepository = userDBRepository;
        this.modelMapper = new ModelMapper();
        this.bcryptEncoder = new BCryptPasswordEncoder();
    }

    @Override
    public void save(User user) {
        UserEntity userEntity = UserMapper.modelToEntity(user);
        userEntity.encryptPassword(bcryptEncoder);
        this.userDBRepository.save(userEntity);
    }

    @Override
    public User findByEmail(String email) {
        return this.modelMapper.map(this.userDBRepository.findByEmail(email), User.class);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = this.userDBRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        List<RoleEntity> roles = user.getRoles();
        for (RoleEntity role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                authorities);
    }

}