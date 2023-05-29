package com.careerwatch.backend.repository;

import com.careerwatch.backend.entity.Social;
import com.careerwatch.backend.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {
    List<Task> findAllByApplicationId(Long applicationId);
}

