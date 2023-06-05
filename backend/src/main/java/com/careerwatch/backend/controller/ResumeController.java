package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.education.EducationDto;
import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.dto.resume.language.LanguageDto;
import com.careerwatch.backend.dto.resume.profile.ProfileDto;
import com.careerwatch.backend.dto.resume.resume.ResumeDto;
import com.careerwatch.backend.dto.resume.resume.UpdateResumeDto;
import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.service.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/resumes")
@CrossOrigin(origins = "*")
public class ResumeController {
    private final ResumeService resumeService;
    private final ProfileService profileService;
    private final LanguageService languageService;
    private final ExperienceService experienceService;
    private final EducationService educationService;
    private final SocialService socialService;

    @GetMapping("/{resumeId}")
    public ResponseEntity<ResumeDto> getResumeById( @PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(resumeService.getResumeById(resumeId));
    }
    @GetMapping("/{resumeId}/profile")
    public ResponseEntity<ProfileDto> getProfileByResumeId(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(profileService.getProfileByResumeId(resumeId));
    }
    @GetMapping("/{resumeId}/languages")
    public ResponseEntity<List<LanguageDto>> getAllLanguagesByResumeId(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(languageService.getAllLanguagesByResumeId(resumeId));
    }
    @GetMapping("/{resumeId}/experiences")
    public ResponseEntity<List<ExperienceDto>> getAllExperiencesByResumeId(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(experienceService.getAllExperiencesByResumeId(resumeId));
    }
    @GetMapping("/{resumeId}/educations")
    public ResponseEntity<List<EducationDto>> getAllEducations(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(educationService.getAllEducations(resumeId));
    }
    @GetMapping("/{resumeId}/socials")
    public ResponseEntity<List<SocialDto>> getAllSocials(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(socialService.getAllSocialsByResumeId(resumeId));
    }
    @PostMapping()
    public ResponseEntity<ResumeDto> createResume(@Valid @RequestBody ResumeDto resumeDto) throws JsonProcessingException {
        return ResponseEntity.status(HttpStatus.CREATED).body(resumeService.createResume(resumeDto));
    }
    @PutMapping("/{resumeId}")
    public ResponseEntity<ResumeDto> updateResumeById(@Valid @PathVariable Long resumeId, @RequestBody UpdateResumeDto resumeDto) throws JsonProcessingException {
        return ResponseEntity.ok(resumeService.updateResumeById(resumeId, resumeDto));
    }
    @DeleteMapping("/{resumeId}")
    public ResponseEntity<Void> deleteResumeById(@PathVariable Long resumeId) throws JsonProcessingException {
        resumeService.deleteResumeById(resumeId);
        return ResponseEntity.noContent().build();
    }
};