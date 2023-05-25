package com.careerwatch.backend.repository;

import com.careerwatch.backend.entity.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience,Long> {
    List<Experience> findAllByResumeId(Long resumeId);
}
