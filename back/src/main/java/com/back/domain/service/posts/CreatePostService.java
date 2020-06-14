package com.back.domain.service.posts;

import com.back.domain.model.Post;
import com.back.domain.port.repository.PostRepository;

public class CreatePostService {
    private PostRepository postRepository;

    public CreatePostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public void run(Post post) {
        this.postRepository.save(post);
    }
}