package com.backgroundremoveapp.removebg.repository;

import com.backgroundremoveapp.removebg.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity>findByClerkId(String clerkId);

    boolean existsByClerkId(String clerkId);
}
