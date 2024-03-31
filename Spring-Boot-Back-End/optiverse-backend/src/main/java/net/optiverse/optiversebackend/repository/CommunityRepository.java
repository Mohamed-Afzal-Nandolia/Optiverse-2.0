package net.optiverse.optiversebackend.repository;

import net.optiverse.optiversebackend.entity.Community;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityRepository extends JpaRepository<Community, Long> {
}
