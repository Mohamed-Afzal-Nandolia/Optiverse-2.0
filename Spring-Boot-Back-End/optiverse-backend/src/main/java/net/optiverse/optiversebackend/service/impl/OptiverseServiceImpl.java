package net.optiverse.optiversebackend.service.impl;


import lombok.AllArgsConstructor;
import net.optiverse.optiversebackend.entity.Optiverse;
import net.optiverse.optiversebackend.exception.ResourceNotFoundException;
import net.optiverse.optiversebackend.mapper.OptiverseMapper;
import net.optiverse.optiversebackend.model.OptiverseDto;
import net.optiverse.optiversebackend.repository.OptiverseRepository;
import net.optiverse.optiversebackend.service.OptiverseService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
//all the apis will be here

@Service
@AllArgsConstructor
public class OptiverseServiceImpl implements OptiverseService {

//    @Autowired
    private OptiverseRepository optiverseRepository;
    @Override
    public OptiverseDto createUser(OptiverseDto optiverseDto) {
        Optiverse optiverse = OptiverseMapper.mapToOptiverse(optiverseDto);
        Optiverse savedUser = optiverseRepository.save(optiverse);
        return OptiverseMapper.mapToOptiversDto(savedUser);
    }

    @Override
    public OptiverseDto updateUser(Long id, OptiverseDto updateUser) {
        Optiverse optiverse = optiverseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Does not exists with id: " + id));

        optiverse.setEmail(updateUser.getEmail());
        optiverse.setPassword(updateUser.getPassword());

        Optiverse updatedOptiverseObj = optiverseRepository.save(optiverse);
        return OptiverseMapper.mapToOptiversDto(updatedOptiverseObj);
    }

    @Override
    public OptiverseDto getUserById(Long id) {
        Optiverse optiverse = optiverseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Does not exists with id: " + id));
        return OptiverseMapper.mapToOptiversDto(optiverse);
    }

    @Override
    public List<OptiverseDto> getAllUsers() {
        List<Optiverse> users = optiverseRepository.findAll();
        return users.stream().map((user) -> OptiverseMapper.mapToOptiversDto(user)).collect(Collectors.toList());
    }

    @Override
    public void deleteUser(Long id) {
        Optiverse optiverse = optiverseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Does not exists with id: " + id));
        optiverseRepository.deleteById(id);
    }

    @Override
    public Boolean loginIn(OptiverseDto optiverseDto) {
        Optiverse optiverse = optiverseRepository.findByEmail(optiverseDto.getEmail());//getting the email
        if(optiverse != null && optiverse.getPassword().equals(optiverseDto.getPassword())){//and verifying with the password
            return true;
        }
        return false;
    }

}
