package net.optiverse.optiversebackend.service;

import net.optiverse.optiversebackend.model.PostDto;

import java.util.List;

public interface PostService {
    public PostDto createPost(PostDto postDto);

    public PostDto updatePost(Long id, PostDto postDto);

    public PostDto getPostById(Long id);

    public List<PostDto> getAllPosts();

    public void deletePost(Long id);
}
