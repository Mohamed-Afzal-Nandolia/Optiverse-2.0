package net.optiverse.optiversebackend.service;

import net.optiverse.optiversebackend.model.CommunityDto;

import java.util.List;

public interface CommunityService {

    public CommunityDto createCommunity(CommunityDto communityDto);

    public CommunityDto updateCommunity(Long id, CommunityDto communityDto);

    public CommunityDto getCommunityById(Long id);

    public List<CommunityDto> getAllCommunities();

    public void deleteCommunity(Long id);

}
