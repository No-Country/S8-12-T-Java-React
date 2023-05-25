package com.careerwatch.backend.controller;


import com.careerwatch.backend.dto.resume.ExperienceDto;
import com.careerwatch.backend.dto.resume.UpdateExperienceDto;
import com.careerwatch.backend.service.ExperienceService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/experiences")
public class ExperienceController {
    
    private final ExperienceService experienceService;


    @GetMapping
    public ResponseEntity<List<ExperienceDto>> getAllExperiences(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(experienceService.getAllExperiences(resumeId));
    }

    @GetMapping("/{experienceId}")
    public ResponseEntity<ExperienceDto> getExperienceById(@PathVariable Long experienceId) throws JsonProcessingException  {
        return ResponseEntity.ok(experienceService.getExperience(experienceId));
    }

    @PutMapping("/{experienceId}")
    public ResponseEntity<ExperienceDto> updateExperience(@PathVariable Long experienceId, @RequestBody UpdateExperienceDto experienceDto) throws JsonProcessingException {
        return ResponseEntity.ok(experienceService.updateExperience(experienceId, experienceDto));
    }

    @DeleteMapping("/{experienceId}")
    public ResponseEntity<Void> deleteExperience(@PathVariable Long experienceId) throws JsonProcessingException {
        experienceService.deleteExperience(experienceId);
        return ResponseEntity.noContent().build();
    }
    
}
