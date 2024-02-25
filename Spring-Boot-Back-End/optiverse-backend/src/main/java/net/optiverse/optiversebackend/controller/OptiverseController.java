package net.optiverse.optiversebackend.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import net.optiverse.optiversebackend.model.OptiverseDto;
import net.optiverse.optiversebackend.service.OptiverseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/")
public class OptiverseController {

    private OptiverseService userService;

    //POST - create user
    @PostMapping
    public ResponseEntity<OptiverseDto> createUser(@Valid @RequestBody OptiverseDto optiverseDto) {
        OptiverseDto savedUser = userService.createUser(optiverseDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    //PUT - update user
    @PutMapping("{id}")
    public ResponseEntity<OptiverseDto> updateUser(@PathVariable("id") Long id, @Valid @RequestBody OptiverseDto optiverseDto){
        OptiverseDto optiverseDto1 = userService.updateUser(id, optiverseDto);
        return ResponseEntity.ok(optiverseDto1);
    }

    //DELETE - delete user
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id){
        userService.deleteUser(id);
        return ResponseEntity.ok("Employee Delete Successfully!");
    }

    //GET - user get
    @GetMapping("/{id}")
    public ResponseEntity<OptiverseDto> getUserById(@PathVariable("id") Long id){
        OptiverseDto optiverseDto = userService.getUserById(id);
        return ResponseEntity.ok(optiverseDto);
    }

    @GetMapping
    public ResponseEntity<List<OptiverseDto>> getAllUsers(){
        List<OptiverseDto> allUsers = userService.getAllUsers();
        return ResponseEntity.ok(allUsers);
    }

    @PostMapping("/login")
    public ResponseEntity<OptiverseDto> loginIn(@Valid @RequestBody OptiverseDto optiverseDto){
        if(userService.loginIn(optiverseDto))
            return ResponseEntity.ok(optiverseDto);
        return new ResponseEntity<>(optiverseDto, HttpStatus.NOT_FOUND);
    }

}
