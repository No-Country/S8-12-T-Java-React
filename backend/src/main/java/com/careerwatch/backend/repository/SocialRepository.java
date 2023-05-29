package com.careerwatch.backend.repository;

import com.careerwatch.backend.entity.Profile;
import com.careerwatch.backend.entity.Resume;
import com.careerwatch.backend.entity.Social;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SocialRepository extends JpaRepository<Social,Long> {
    List<Social> findAllByProfileId(Long profileId);
}
