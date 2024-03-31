package net.optiverse.optiversebackend.controller;

import lombok.AllArgsConstructor;
import net.optiverse.optiversebackend.model.CommunityDto;
import net.optiverse.optiversebackend.service.CommunityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/comm/")
public class CommunityController {
    CommunityService communityService;

    // POST - create communities
    @PostMapping
    public ResponseEntity<CommunityDto> createCommunity(@RequestBody CommunityDto communityDto){
        CommunityDto createdCommunity = communityService.createCommunity(communityDto);
        return new ResponseEntity<>(createdCommunity, HttpStatus.CREATED);
    }

    // PUT - update communities
    @PutMapping("{id}")
    public ResponseEntity<CommunityDto> updateCommunity(@PathVariable Long id, @RequestBody CommunityDto communityDto){
        CommunityDto updatedCommunity = communityService.updateCommunity(id, communityDto);
        return ResponseEntity.ok(updatedCommunity);
    }

    // GET - get community by id
    @GetMapping("{id}")
    public ResponseEntity<CommunityDto> getCommById(@PathVariable Long id){
        CommunityDto community = communityService.getCommunityById(id);
        return ResponseEntity.ok(community);
    }

    // GET - get all community
    @GetMapping
    public ResponseEntity<List<CommunityDto>> getAllComm(){
        List<CommunityDto> allCommunities= communityService.getAllCommunities();
        return ResponseEntity.ok(allCommunities);
    }

    // DELETE - delete community
    @DeleteMapping("{id}")
    public ResponseEntity<String> delelteComm(@PathVariable Long id){
        communityService.deleteCommunity(id);
        return ResponseEntity.ok("Community deleted successfully");
    }
}
