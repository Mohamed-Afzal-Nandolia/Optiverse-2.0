package net.optiverse.optiversebackend.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import net.optiverse.optiversebackend.model.UserDto;
import net.optiverse.optiversebackend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/")
public class UserController {

    private UserService userService;

    //POST - create user
    @PostMapping
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto optiverseDto) {
        UserDto savedUser = userService.createUser(optiverseDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    //PUT - update user
    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Long id, @Valid @RequestBody UserDto optiverseDto){
        UserDto optiverseDto1 = userService.updateUser(id, optiverseDto);
        return ResponseEntity.ok(optiverseDto1);
    }

    //DELETE - delete user
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id){
        userService.deleteUser(id);
        return ResponseEntity.ok("User Deleted Successfully!");
    }

    // GET - user get
    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long id){
        UserDto optiverseDto = userService.getUserById(id);
        return ResponseEntity.ok(optiverseDto);
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> allUsers = userService.getAllUsers();
        return ResponseEntity.ok(allUsers);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> loginIn(@Valid @RequestBody UserDto optiverseDto){
        if(userService.loginIn(optiverseDto))
            return ResponseEntity.ok(optiverseDto);
        return new ResponseEntity<>(optiverseDto, HttpStatus.NOT_FOUND);
    }

}
