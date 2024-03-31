package net.optiverse.optiversebackend.repository;

import net.optiverse.optiversebackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT o FROM User o WHERE o.u_email = ?1")
    User findByEmail(String email);

}
