package com.back.framework.controller;

import java.util.ArrayList;
import java.util.List;

import com.back.application.handler.command.UserCommand;
import com.back.application.handler.users.CreateUserHandler;
import com.back.application.handler.users.GetUserByEmailHandler;
import com.back.domain.model.Role;
import com.back.domain.model.User;
import com.back.framework.adapter.UserRepositoryImplementation;
import com.back.framework.config.JwtResponse;
import com.back.framework.config.JwtTokenUtil;
import com.back.framework.exception.BadUserOrPasswordException;
import com.back.framework.exception.user.NonActiveUserException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    private CreateUserHandler createUserHandler;
    private GetUserByEmailHandler getUserByEmailHandler;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserRepositoryImplementation userRepositoryImplementation;

    public UserController(CreateUserHandler createUserHandler, GetUserByEmailHandler getUserByEmailHandler) {
        this.createUserHandler = createUserHandler;
        this.getUserByEmailHandler = getUserByEmailHandler;
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity createAuthenticationToken(@RequestBody UserCommand userCommand) {
        authenticate(userCommand.getEmail(), userCommand.getPassword());
        final UserDetails userDetails = userRepositoryImplementation.loadUserByUsername(userCommand.getEmail());
        User user = this.getUserByEmailHandler.run(userCommand.getEmail());
        final String token = jwtTokenUtil.generateToken(userDetails);
        List<String> roles = new ArrayList<>();
        for (Role role : user.getRoles()) {
            roles.add(role.getName());
        }

        return ResponseEntity.ok(new JwtResponse(token, user.getName(), user.getEmail(), user.getActive(),
                user.getDeviceToken(), roles));
    }

    @PostMapping(value = "/register")
    public void create(@RequestBody UserCommand userCommand) {
        this.createUserHandler.run(userCommand);
    }

    @GetMapping("/get-by-email")
    public User getUserByEmail(@RequestBody UserCommand userCommand) {
        return this.getUserByEmailHandler.run(userCommand.getEmail());
    }

    private void authenticate(String username, String password) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new NonActiveUserException("rarara");
            // throw new Exception("USER_DISABLED", e);
            // throw new ExceptionController("El usuario se encuentra deshabilitado,
            // Comuníquese con su administrador");
            // throw new GeneralException("El usuario se encuentra deshabilitado,
            // Comuníquese con su administrador");
        } catch (BadCredentialsException e) {
            throw new NonActiveUserException("rarara");
            // throw new Exception("INVALID_CREDENTIALS", e);
            // throw new BadUserOrPasswordException();
        }
    }
}