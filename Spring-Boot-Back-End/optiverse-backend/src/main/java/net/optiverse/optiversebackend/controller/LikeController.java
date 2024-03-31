package net.optiverse.optiversebackend.controller;

import lombok.AllArgsConstructor;
import net.optiverse.optiversebackend.model.LikeDto;
import net.optiverse.optiversebackend.service.LikeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/likes")
public class LikeController {

    private LikeService likeService;

    @PostMapping
    public ResponseEntity<LikeDto> createLike(@RequestBody LikeDto likeDto) {
        LikeDto createdLike = likeService.createLike(likeDto);
        return new ResponseEntity<>(createdLike, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LikeDto> updateLike(@PathVariable Long id, @RequestBody LikeDto likeDto) {
        LikeDto updatedLike = likeService.updateLike(id, likeDto);
        return ResponseEntity.ok(updatedLike);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LikeDto> getLikeById(@PathVariable Long id) {
        LikeDto like = likeService.getLikeById(id);
        return ResponseEntity.ok(like);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteLike(@PathVariable Long id) {
        likeService.deleteLike(id);
        return ResponseEntity.ok("Like deleted successfully");
    }
}
