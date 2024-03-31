//package net.optiverse.optiversebackend.mapper;
//
//import net.optiverse.optiversebackend.entity.Community;
//import net.optiverse.optiversebackend.model.CommunityDto;
//
//public class CommunityMapper {
//    public static CommunityDto mapToCommunityDto(Community community){
//        return new CommunityDto(
//                community.getId(),
//                community.getCName(),
//                community.getCDescription(),
//                community.getCPost(),
//                community.getCDate(),
//                community.getCLike(),
//                community.getCTopic(),
//                community.getCMature()
//        );
//    }
//    public static Community mapToCommunity(CommunityDto communityDto){
//        return new Community(
//                communityDto.getId(),
//                communityDto.getCName(),
//                communityDto.getCDescription(),
//                communityDto.getCPost(),
//                communityDto.getCDate(),
//                communityDto.getCLike(),
//                communityDto.getCTopic(),
//                communityDto.getCMature()
//        );
//    }
//}
