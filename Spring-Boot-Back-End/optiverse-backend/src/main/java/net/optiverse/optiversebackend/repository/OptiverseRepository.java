package net.optiverse.optiversebackend.repository;

import net.optiverse.optiversebackend.entity.Optiverse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OptiverseRepository extends JpaRepository<Optiverse, Long> {

    @Query("SELECT o FROM Optiverse o WHERE o.email = ?1")
    Optiverse findByEmail(String email);

}
