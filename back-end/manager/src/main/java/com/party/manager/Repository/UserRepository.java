package com.party.manager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

// import com.google.common.base.Optional;
import com.party.manager.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // Optional<User> findByUsername(String username);
    User findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
