package net.optiverse.optiversebackend.service.impl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import net.optiverse.optiversebackend.entity.User;
import net.optiverse.optiversebackend.exception.ResourceNotFoundException;
import net.optiverse.optiversebackend.model.UserDto;
import net.optiverse.optiversebackend.repository.UserRepository;
import net.optiverse.optiversebackend.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.cglib.core.Local;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate; // Import LocalDate
import java.util.List;
import java.util.stream.Collectors;

//all the apis will be here
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        ModelMapper modelMapper = new ModelMapper();
        BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder();//encoding the password
        String encryptedPassword = bCrypt.encode(userDto.getU_pass());
        User user = modelMapper.map(userDto, User.class);
        user.setU_pass(encryptedPassword);//saving the password optiverse
        user.setU_expired(true);//setting the expiry to true

        // Set current date
        user.setU_date(LocalDate.now());

        User savedUser = userRepository.save(user);
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public UserDto updateUser(Long id, UserDto updateUser) {
        ModelMapper modelMapper = new ModelMapper();

        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Does not exists with id: " + id));

        user.setU_email(updateUser.getU_email());
        user.setU_pass(updateUser.getU_pass());

        User updatedOptiverseObj = userRepository.save(user);
        return modelMapper.map(updatedOptiverseObj, UserDto.class);
    }

    @Override
    public UserDto getUserById(Long id) {
        ModelMapper modelMapper = new ModelMapper();

        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Does not exists with id: " + id));
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public List<UserDto> getAllUsers() {
        ModelMapper modelMapper = new ModelMapper();

        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
    }

    @Override
    public void deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Does not exists with id: " + id));
        userRepository.deleteById(id);
    }

    @Override
    public Boolean loginIn(UserDto optiverseDto) {
        BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder();

        User user = userRepository.findByEmail(optiverseDto.getU_email());//getting the email
        if(user != null && bCrypt.matches(optiverseDto.getU_pass(), user.getU_pass())){//and verifying with the password used during login VS database password
            return true;
        }
        return false;
    }

}
