package net.optiverse.optiversebackend.service.impl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import net.optiverse.optiversebackend.entity.Post;
import net.optiverse.optiversebackend.exception.ResourceNotFoundException;
//import net.optiverse.optiversebackend.mapper.PostMapper;
import net.optiverse.optiversebackend.model.PostDto;
import net.optiverse.optiversebackend.repository.PostRepository;
import net.optiverse.optiversebackend.service.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class PostServiceImpl implements PostService {

    private PostRepository postRepository;
    private ModelMapper modelMapper;
    @Override
    public PostDto createPost(PostDto postDto) {
//        Post post = PostMapper.mapToPost(postDto);
        Post post = modelMapper.map(postDto, Post.class);
        Post savedPost = postRepository.save(post);
//        return PostMapper.mapToPostDto(savedPost);
        return modelMapper.map(savedPost, PostDto.class);
    }
    @Override
    public PostDto updatePost(Long id, PostDto postDto) {
        Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post Does not exist with id : " + id));

        post.setP_date(postDto.getP_date());
        post.setP_tag(postDto.getP_tag());
        post.setP_post(postDto.getP_post());
        post.setP_like(postDto.getP_like());
        post.setP_share(postDto.getP_share());

        Post savedPost = postRepository.save(post);
//        return PostMapper.mapToPostDto(savedPost);
        return modelMapper.map(savedPost, PostDto.class);
    }
    @Override
    public PostDto getPostById(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post Does not exist with id : " + id));
//        return PostMapper.mapToPostDto(post);
        return modelMapper.map(post, PostDto.class);
    }
    @Override
    public List<PostDto> getAllPosts() {
        List<Post> allPosts = postRepository.findAll();
//        return allPosts.stream().map((post) -> PostMapper.mapToPostDto(post)).collect(Collectors.toList());
        return allPosts.stream().map((post) -> modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
    }
    @Override
    public void deletePost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post Does not exist with id : " + id));
        postRepository.deleteById(id);
    }
}