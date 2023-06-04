package com.careerwatch.backend.repository;

import com.careerwatch.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail (String email);
    boolean existsByEmail (String email);

}

