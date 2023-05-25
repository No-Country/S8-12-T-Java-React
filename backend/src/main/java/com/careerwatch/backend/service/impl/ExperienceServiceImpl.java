package com.careerwatch.backend.service.impl;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.careerwatch.backend.dto.resume.ExperienceDto;
import com.careerwatch.backend.dto.resume.UpdateExperienceDto;
import com.careerwatch.backend.entity.Experience;
import com.careerwatch.backend.mapper.resume.ExperienceDtoMapper;
import com.careerwatch.backend.repository.ExperienceRepository;
import com.careerwatch.backend.service.ExperienceService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExperienceServiceImpl implements ExperienceService {
    
    private final ExperienceRepository experienceRepository;
    private final ExperienceDtoMapper mapper;
    

    @Transactional
    @Override
    public List<ExperienceDto> getAllExperiences(Long ResumeId) {
        if (experienceRepository.existsById(ResumeId))
            throw new RuntimeException("Error: resume " + ResumeId + " not found");
        return mapper.entitiesToDtoList(experienceRepository.findAllByResumeId(ResumeId));
    }

    @Transactional
    @Override
    public ExperienceDto getExperience(Long experienceId) {
        return mapper.entityToDto(experienceRepository.findById(experienceId)
                .orElseThrow(()-> new RuntimeException("Error: experience" + experienceId + " not found")));
    }

    @Transactional
    @Override
    public ExperienceDto updateExperience (Long experienceId, UpdateExperienceDto experienceDto) {

        Experience experience = experienceRepository.findById(experienceId).orElseThrow(()->
                new RuntimeException("Error: experience not found"));

        experienceDto.getTitle().ifPresent(experience::setTitle);
        experienceDto.getCompany().ifPresent(experience::setCompany);
        experienceDto.getDateStart().ifPresent(experience::setDateStart);
        experienceDto.getDateEnd().ifPresent(experience::setDateEnd);
        experienceDto.getDescription().ifPresent(experience::setDescription);

        experienceRepository.save(experience);
        return mapper.entityToDto(experience);
    }

    @Transactional
    @Override
    public void deleteExperience (Long experienceId) {
        Experience experience = experienceRepository.findById(experienceId).orElseThrow(()->
                new RuntimeException("Error: experience not found"));
        experienceRepository.delete(experience);
    }
}
