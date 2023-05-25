package com.careerwatch.backend.service;

import com.careerwatch.backend.dto.resume.ExperienceDto;
import com.careerwatch.backend.dto.resume.UpdateExperienceDto;

import java.util.List;

public interface ExperienceService {

    
    List<ExperienceDto> getAllExperiences (Long ResumeId);
    ExperienceDto getExperience (Long experienceId);
    ExperienceDto updateExperience (Long experienceId, UpdateExperienceDto experienceDto);
    void deleteExperience (Long experienceId);
}
