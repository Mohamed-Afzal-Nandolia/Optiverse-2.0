package net.optiverse.optiversebackend.service.impl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import net.optiverse.optiversebackend.entity.Like;
import net.optiverse.optiversebackend.exception.ResourceNotFoundException;
import net.optiverse.optiversebackend.model.LikeDto;
import net.optiverse.optiversebackend.repository.LikeRepository;
import net.optiverse.optiversebackend.service.LikeService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class LikeServiceImpl implements LikeService {

    private LikeRepository likeRepository;
    private ModelMapper modelMapper;

    @Override
    public LikeDto createLike(LikeDto likeDto) {
//        Like like = LikeMapper.mapToLike(likeDto);
        Like like = modelMapper.map(likeDto, Like.class);
        Like savedLike = likeRepository.save(like);
//        return LikeMapper.mapToLikeDto(savedLike);
        return modelMapper.map(savedLike, LikeDto.class);
    }

    @Override
    public LikeDto updateLike(Long id, LikeDto likeDto) {
        Like like = likeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Like not found with id: " + id));
        like.setP_id(likeDto.getP_id());
        like.setLikeCount(likeDto.getLikeCount());
        // Set other fields if needed
        Like updatedLike = likeRepository.save(like);
//        return LikeMapper.mapToLikeDto(updatedLike);
        return modelMapper.map(updatedLike, LikeDto.class);
    }

    @Override
    public LikeDto getLikeById(Long id) {
        Like like = likeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Like not found with id: " + id));
//        return LikeMapper.mapToLikeDto(like);
        return modelMapper.map(like, LikeDto.class);
    }

    @Override
    public void deleteLike(Long id) {
        if (!likeRepository.existsById(id)) {
            throw new ResourceNotFoundException("Like not found with id: " + id);
        }
        likeRepository.deleteById(id);
    }
}
