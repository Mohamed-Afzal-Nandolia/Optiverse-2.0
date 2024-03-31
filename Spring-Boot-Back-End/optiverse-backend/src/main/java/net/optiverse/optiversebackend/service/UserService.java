package net.optiverse.optiversebackend.service;

import net.optiverse.optiversebackend.model.UserDto;

import java.util.List;

public interface UserService {

    public UserDto createUser(UserDto optiverseDto);
    UserDto updateUser(Long id, UserDto updateUser);
    public UserDto getUserById(Long id);
    public List<UserDto> getAllUsers();
    public void deleteUser(Long id);
    public Boolean loginIn(UserDto optiverseDto);
}
