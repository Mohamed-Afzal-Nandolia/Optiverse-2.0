package net.optiverse.optiversebackend.controller;

import lombok.AllArgsConstructor;
import net.optiverse.optiversebackend.model.PostDto;
import net.optiverse.optiversebackend.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/posts/")
public class PostController {
    private PostService postService;

    // POST - create post
    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto){
        PostDto createdPost = postService.createPost(postDto);
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    // PUT - update post
    @PutMapping("{id}")
    public ResponseEntity<PostDto> updatePost(@PathVariable Long id, @RequestBody PostDto postDto){
        PostDto updatedPost = postService.updatePost(id, postDto);
        return ResponseEntity.ok(updatedPost);
    }

    // GET - get post by id
    @GetMapping("{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable Long id){
        PostDto post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }

    // GET - get all posts
    @GetMapping
    public ResponseEntity<List<PostDto>> getAllPost(){
        List<PostDto> allPosts = postService.getAllPosts();
        return ResponseEntity.ok(allPosts);
    }

    // DELETE - delete user
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePost(@PathVariable Long id){
        postService.deletePost(id);
        return ResponseEntity.ok("Post deleted Successfully");
    }

}
