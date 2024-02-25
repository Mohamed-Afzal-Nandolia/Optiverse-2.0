package net.optiverse.optiversebackend.service;


import net.optiverse.optiversebackend.model.OptiverseDto;

import java.util.List;

public interface OptiverseService {

    public OptiverseDto createUser(OptiverseDto optiverseDto);
    OptiverseDto updateUser(Long id, OptiverseDto updateUser);
    public OptiverseDto getUserById(Long id);
    public List<OptiverseDto> getAllUsers();
    public void deleteUser(Long id);
    public Boolean loginIn(OptiverseDto optiverseDto);
}
