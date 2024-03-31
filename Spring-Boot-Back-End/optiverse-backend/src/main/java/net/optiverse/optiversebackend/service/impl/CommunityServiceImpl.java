package net.optiverse.optiversebackend.service.impl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import net.optiverse.optiversebackend.entity.Community;
import net.optiverse.optiversebackend.exception.ResourceNotFoundException;
import net.optiverse.optiversebackend.model.CommunityDto;
import net.optiverse.optiversebackend.repository.CommunityRepository;
import net.optiverse.optiversebackend.service.CommunityService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class CommunityServiceImpl implements CommunityService {
    private CommunityRepository cRepo;
    private ModelMapper modelMapper;
    @Override
    public CommunityDto createCommunity(CommunityDto communityDto) {
//        Community community = CommunityMapper.mapToCommunity(communityDto);
        Community community = modelMapper.map(communityDto, Community.class);
        Community savedCommunity = cRepo.save(community);
//        return CommunityMapper.mapToCommunityDto(savedCommunity);
        return modelMapper.map(savedCommunity, CommunityDto.class);
    }

    @Override
    public CommunityDto updateCommunity(Long id, CommunityDto communityDto) {
        Community community = cRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Community not found with id: " + id));
    /* Only letting cName, cDescription, cPost, cTopic ,cMature  updated NOT ALL FIELDS*/
        community.setC_name(communityDto.getC_name());
        community.setC_description(communityDto.getC_description());
        community.setC_post(communityDto.getC_post());
        community.setC_topic(communityDto.getC_topic());
        community.setC_mature(communityDto.getC_mature());

        Community savedCommunity = cRepo.save(community);
//        return CommunityMapper.mapToCommunityDto(savedCommunity);
        return modelMapper.map(savedCommunity, CommunityDto.class);
    }

    @Override
    public CommunityDto getCommunityById(Long id) {
        Community community = cRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Community not found with id: " + id));
//        return CommunityMapper.mapToCommunityDto(community);
        return modelMapper.map(community, CommunityDto.class);
    }

    @Override
    public List<CommunityDto> getAllCommunities() {
        List<Community> communities = cRepo.findAll();
//        return communities.stream().map((comm) -> CommunityMapper.mapToCommunityDto(comm)).collect(Collectors.toList());
        return communities.stream().map((comm) -> modelMapper.map(comm, CommunityDto.class)).collect(Collectors.toList());
    }

    @Override
    public void deleteCommunity(Long id) {
        Community community = cRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Community not found with id: " + id));
        cRepo.deleteById(id);
    }
}
