//package net.optiverse.optiversebackend.mapper;
//
//import net.optiverse.optiversebackend.entity.User;
//import net.optiverse.optiversebackend.model.UserDto;
//
//public class UserMapper {
//
//    public static UserDto mapToUserDto(User user){
//        return new UserDto(
//                user.getId(),
//                user.getEmail(),
//                user.getPassword(),
//                user.getExpired(),
//                user.getUsername()
//        );
//    }
//
//    public static User mapToUser(UserDto userDto){
//        return new User(
//                userDto.getId(),
//                userDto.getEmail(),
//                userDto.getPassword(),
//                userDto.getExpired(),
//                userDto.getUsername()
//        );
//    }
//}
