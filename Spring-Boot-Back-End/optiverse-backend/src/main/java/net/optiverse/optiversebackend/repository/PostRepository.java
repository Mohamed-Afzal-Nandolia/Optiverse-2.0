package net.optiverse.optiversebackend.repository;

import net.optiverse.optiversebackend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

}
