package com.back.application.handler.posts.query;

import com.back.domain.service.posts.GetCommentsNumberService;

import org.springframework.stereotype.Component;

@Component
public class GetCommentsNumberHandler {
    private GetCommentsNumberService getCommentsNumberService;

    public GetCommentsNumberHandler(GetCommentsNumberService getCommentsNumberService) {
        this.getCommentsNumberService = getCommentsNumberService;
    }

    public int run(Long id) {
        return this.getCommentsNumberService.run(id);
    }
}