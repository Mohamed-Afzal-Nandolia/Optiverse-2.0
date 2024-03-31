package net.optiverse.optiversebackend.service;

import net.optiverse.optiversebackend.model.LikeDto;

public interface LikeService {

    public LikeDto createLike(LikeDto likeDto);
    public LikeDto updateLike(Long id, LikeDto likeDto);
    public LikeDto getLikeById(Long id);
    public void deleteLike(Long id);

}
