package com.back.framework.controller;

import java.util.List;

import com.back.application.handler.command.PostCommand;
import com.back.application.handler.posts.CreatePostHandler;
import com.back.application.handler.posts.query.GetPostsByTypeHandler;
import com.back.application.handler.posts.query.SearchPostsHandler;
import com.back.domain.model.Post;
import com.back.framework.config.FileStorageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/posts")
public class PostController {
    private CreatePostHandler createPostHandler;
    private GetPostsByTypeHandler getPostsByTypeHandler;
    private SearchPostsHandler searchPostsHandler;

    @Autowired
    private FileStorageService fileStorageService;

    public PostController(CreatePostHandler createPostHandler, GetPostsByTypeHandler getPostsByTypeHandler,
            SearchPostsHandler searchPostsHandler) {
        this.createPostHandler = createPostHandler;
        this.getPostsByTypeHandler = getPostsByTypeHandler;
        this.searchPostsHandler = searchPostsHandler;
    }

    @PostMapping(value = "")
    public void create(@RequestPart(required = true) PostCommand postCommand,
            @RequestPart(required = false) MultipartFile image1, @RequestPart(required = false) MultipartFile image2,
            @RequestPart(required = false) MultipartFile image3) {

        if (image1 != null) {
            String fileName = this.fileStorageService.storeFile(image1, 2);
            postCommand.setImage1(fileName);
        }
        if (image2 != null) {
            String fileName = this.fileStorageService.storeFile(image2, 2);
            postCommand.setImage2(fileName);
        }
        if (image3 != null) {
            String fileName = this.fileStorageService.storeFile(image3, 2);
            postCommand.setImage3(fileName);
        }
        this.createPostHandler.run(postCommand);
    }

    @GetMapping(value = "/get-by-type/{type}/{userId}")
    public List<Post> getByType(@PathVariable(value = "type") int type, @PathVariable(value = "userId") int userId) {
        return this.getPostsByTypeHandler.run(type, userId);
    }

    @GetMapping(value = "/search/{type}")
    public List<Post> search(@PathVariable(value = "type") int type, @RequestParam(required = false) String query) {
        if (query == null) {
            return this.getPostsByTypeHandler.run(type, 0);
        }
        return this.searchPostsHandler.run(type, query);
    }
}