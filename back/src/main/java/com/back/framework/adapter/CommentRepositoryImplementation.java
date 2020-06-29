package com.back.framework.adapter;

import java.util.List;
import java.util.stream.Collectors;

import com.back.domain.model.City;
import com.back.domain.model.Comment;
import com.back.domain.port.repository.CommentRepository;
import com.back.framework.adapter.mapper.CommentMapper;
import com.back.framework.dbRepository.CommentDBRepository;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Repository;

@Repository
public class CommentRepositoryImplementation implements CommentRepository {
    private CommentDBRepository commentDBRepository;
    private ModelMapper modelMapper;

    public CommentRepositoryImplementation(CommentDBRepository commentDBRepository) {
        this.commentDBRepository = commentDBRepository;
        this.modelMapper = new ModelMapper();
    }

    @Override
    public void save(Comment comment) {
        this.commentDBRepository.save(CommentMapper.modelToEntity(comment));
    }

    @Override
    public List<Comment> getByPost(int postId) {
        return this.commentDBRepository.getByPost(postId).stream()
                .map((comment) -> this.modelMapper.map(comment, Comment.class)).collect(Collectors.toList());
    }

}