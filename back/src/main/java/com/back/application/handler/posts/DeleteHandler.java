package com.back.application.handler.posts;

import com.back.domain.service.posts.DeleteService;

import org.springframework.stereotype.Component;

@Component
public class DeleteHandler {
    private DeleteService deleteService;

    public DeleteHandler(DeleteService deleteService) {
        this.deleteService = deleteService;
    }

    public void run(Long id) {
        this.deleteService.run(id);
    }
}