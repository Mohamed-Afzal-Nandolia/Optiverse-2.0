package net.optiverse.optiversebackend.repository;

import net.optiverse.optiversebackend.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, Long> {
}
