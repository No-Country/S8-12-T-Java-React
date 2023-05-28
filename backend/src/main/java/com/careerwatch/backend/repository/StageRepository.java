package com.careerwatch.backend.repository;

import com.careerwatch.backend.entity.Social;
import com.careerwatch.backend.entity.Stage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StageRepository extends JpaRepository<Stage,Long> {
}
