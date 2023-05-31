package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
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

    @PostMapping
    public ResponseEntity<ExperienceDto> createExperience(@RequestBody ExperienceDto experienceDto) throws JsonProcessingException {
        return ResponseEntity.ok(experienceService.createExperience(experienceDto));
    }
    @GetMapping("/{experienceId}")
    public ResponseEntity<ExperienceDto> getExperienceById(@PathVariable Long experienceId) throws JsonProcessingException  {
        return ResponseEntity.ok(experienceService.getExperienceById(experienceId));
    }
    @PutMapping("/{experienceId}")
    public ResponseEntity<ExperienceDto> updateExperienceById(@PathVariable Long experienceId, @RequestBody ExperienceDto experienceDto) throws JsonProcessingException {
        return ResponseEntity.ok(experienceService.updateExperienceById(experienceId, experienceDto));
    }
    @DeleteMapping("/{experienceId}")
    public ResponseEntity<Void> deleteExperience(@PathVariable Long experienceId) throws JsonProcessingException {
        experienceService.deleteExperienceById(experienceId);
        return ResponseEntity.noContent().build();
    }
}
