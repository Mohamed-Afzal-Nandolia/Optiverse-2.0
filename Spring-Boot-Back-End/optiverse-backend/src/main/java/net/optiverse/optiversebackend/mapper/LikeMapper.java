//package net.optiverse.optiversebackend.mapper;
//
//import net.optiverse.optiversebackend.entity.Like;
//import net.optiverse.optiversebackend.model.LikeDto;
//
//public class LikeMapper {
//
//    public static LikeDto mapToLikeDto(Like like){
//        return new LikeDto(
//                like.getId(),
//                like.getPostId(),
//                like.getLikeCount()
//        );
//    }
//
//
//    public static Like mapToLike(LikeDto likeDto){
//        return new Like(
//                likeDto.getId(),
//                likeDto.getPostId(),
//                likeDto.getLikeCount()
//        );
//    }
//}