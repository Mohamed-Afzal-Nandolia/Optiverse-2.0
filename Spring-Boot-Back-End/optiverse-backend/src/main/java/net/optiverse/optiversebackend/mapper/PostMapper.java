//package net.optiverse.optiversebackend.mapper;
//
//import net.optiverse.optiversebackend.entity.Post;
//import net.optiverse.optiversebackend.model.PostDto;
//
//public class PostMapper {
//
//    public static PostDto mapToPostDto(Post post){
//        return new PostDto(
//                post.getId(),
//                post.getPName(),
//                post.getPDate(),
//                post.getPTag(),
//                post.getPPost(),
//                post.getPLike(),
//                post.getPShare()
//        );
//    }
//
//    public static Post mapToPost(PostDto postDto){
//        return new Post(
//                postDto.getId(),
//                postDto.getPName(),
//                postDto.getPDate(),
//                postDto.getPTag(),
//                postDto.getPPost(),
//                postDto.getPLike(),
//                postDto.getPShare()
//        );
//    }
//}
