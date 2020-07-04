package com.back.framework.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.back.application.handler.users.CreateUserHandler;
import com.back.application.handler.users.GetUserByEmailHandler;
import com.back.application.handler.users.RecoverPasswordHandler;
import com.back.application.handler.users.UpdateRecoverCodeHandler;
import com.back.application.handler.users.UpdateUserHandler;
import com.back.application.handler.users.command.UserCommand;

import org.springframework.security.core.context.SecurityContextHolder;
import com.back.domain.model.User;
import com.back.framework.adapter.UserRepositoryImplementation;
import com.back.framework.config.FileStorageService;
import com.back.framework.config.JwtResponse;
import com.back.framework.config.JwtTokenUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    private CreateUserHandler createUserHandler;
    private GetUserByEmailHandler getUserByEmailHandler;
    private UpdateUserHandler updateUserHandler;
    private UpdateRecoverCodeHandler updateRecoverCodeHandler;
    private RecoverPasswordHandler recoverPasswordHandler;

    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserRepositoryImplementation userRepositoryImplementation;

    public UserController(CreateUserHandler createUserHandler, GetUserByEmailHandler getUserByEmailHandler,
            UpdateUserHandler updateUserHandler, UpdateRecoverCodeHandler updateRecoverCodeHandler,
            RecoverPasswordHandler recoverPasswordHandler) {
        this.createUserHandler = createUserHandler;
        this.getUserByEmailHandler = getUserByEmailHandler;
        this.updateUserHandler = updateUserHandler;
        this.updateRecoverCodeHandler = updateRecoverCodeHandler;
        this.recoverPasswordHandler = recoverPasswordHandler;
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity createAuthenticationToken(@RequestBody UserCommand userCommand) throws Exception {
        authenticate(userCommand.getEmail(), userCommand.getPassword());
        final UserDetails userDetails = userRepositoryImplementation.loadUserByUsername(userCommand.getEmail());
        User user = this.getUserByEmailHandler.run(userCommand.getEmail());
        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token, user.getId(), user.getName(), user.getEmail(), user.getActive(),
                user.getDeviceToken(), user.getRoles(), user.getCity(), user.getPhone(),user.getServiceDescription()));
    }

    @PostMapping(value = "/register")
    public void create(@RequestPart(required = true) UserCommand userCommand,
            @RequestPart(required = false) MultipartFile image) {

        String pictureName = this.fileStorageService.storeFile(image, 1);
        userCommand.setProfilePicture(pictureName);

        this.createUserHandler.run(userCommand);
    }

    @PostMapping(value = "/recover-password")
    public void updatePassword(@RequestBody UserCommand userCommand) {
        User user = this.getUserByEmailHandler.run(userCommand.getEmail());
        this.recoverPasswordHandler.run(user, userCommand.getRecoverCode());
    }

    @PostMapping(value = "/set-recover-code")
    public void updateRecoverCode(@RequestBody UserCommand userCommand) {
        this.updateRecoverCodeHandler.run(userCommand.getEmail());
    }

    @PutMapping(value = "")
    public void update(@RequestBody UserCommand userCommand) {
        this.updateUserHandler.run(userCommand);
    }

    @GetMapping("/get-by-email")
    public User getUserByEmail(@RequestBody UserCommand userCommand) {
        return this.getUserByEmailHandler.run(userCommand.getEmail());
    }

    @PostMapping(value = "/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}