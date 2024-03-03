package net.optiverse.optiversebackend.service.impl;


import lombok.AllArgsConstructor;
import net.optiverse.optiversebackend.entity.Optiverse;
import net.optiverse.optiversebackend.exception.ResourceNotFoundException;
import net.optiverse.optiversebackend.mapper.OptiverseMapper;
import net.optiverse.optiversebackend.model.OptiverseDto;
import net.optiverse.optiversebackend.repository.OptiverseRepository;
import net.optiverse.optiversebackend.service.OptiverseService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
        BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder();//encoding the password
        String encryptedPassword = bCrypt.encode(optiverseDto.getPassword());

        Optiverse optiverse = OptiverseMapper.mapToOptiverse(optiverseDto);
        optiverse.setPassword(encryptedPassword);//saving the password optiverse
        optiverse.setExpired(true);//setting the expiry to true
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
        BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder();

        Optiverse optiverse = optiverseRepository.findByEmail(optiverseDto.getEmail());//getting the email
        if(optiverse != null && bCrypt.matches(optiverseDto.getPassword(), optiverse.getPassword())){//and verifying with the password used during login VS database password
            return true;
        }
        return false;
    }

}
