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
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    @Operation(summary = "Get one resume by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One resume",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResumeDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid resume Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Resume not found",
                    content = @Content)})
    @GetMapping("/{resumeId}")
    public ResponseEntity<ResumeDto> getResumeById( @PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(resumeService.getResumeById(resumeId));
    }

    @Operation(summary = "Get one profile by resume Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One profile",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResumeDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid resume Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Profile not found",
                    content = @Content)})
    @GetMapping("/{resumeId}/profile")
    public ResponseEntity<ProfileDto> getProfileByResumeId(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(profileService.getProfileByResumeId(resumeId));
    }

    @Operation(summary = "Get all languages by resume Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of languages",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = LanguageDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = LanguageDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid resume Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Resume not found",
                    content = @Content)})
    @GetMapping("/{resumeId}/languages")
    public ResponseEntity<List<LanguageDto>> getAllLanguagesByResumeId(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(languageService.getAllLanguagesByResumeId(resumeId));
    }

    @Operation(summary = "Get all experiences by resume Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of experiences",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ExperienceDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ExperienceDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid resume Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Resume not found",
                    content = @Content)})
    @GetMapping("/{resumeId}/experiences")
    public ResponseEntity<List<ExperienceDto>> getAllExperiencesByResumeId(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(experienceService.getAllExperiencesByResumeId(resumeId));
    }

    @Operation(summary = "Get all educations by resume Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of educations",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = EducationDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = EducationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid resume Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Resume not found",
                    content = @Content)})
    @GetMapping("/{resumeId}/educations")
    public ResponseEntity<List<EducationDto>> getAllEducations(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(educationService.getAllEducations(resumeId));
    }

    @Operation(summary = "Get all socials by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of socials",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = SocialDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = SocialDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid resume Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Resume not found",
                    content = @Content)})
    @GetMapping("/{resumeId}/socials")
    public ResponseEntity<List<SocialDto>> getAllSocials(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(socialService.getAllSocialsByResumeId(resumeId));
    }

    @Operation(summary = "Create a new resume")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The created resume",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResumeDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                    - User ID can't be empty
                    - Presentation must be null or not empty
                    - Resume name can't be empty
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PostMapping()
    public ResponseEntity<ResumeDto> createResume(@Valid @RequestBody ResumeDto resumeDto) throws JsonProcessingException {
        return ResponseEntity.status(HttpStatus.CREATED).body(resumeService.createResume(resumeDto));
    }

    @Operation(summary = "Update one resume by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The resume updated",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResumeDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                    - Presentation must be null or not empty
                    - Resume name can't be empty
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Resume not found",
                    content = @Content)})
    @PutMapping("/{resumeId}")
    public ResponseEntity<ResumeDto> updateResumeById(@Valid @PathVariable Long resumeId, @RequestBody UpdateResumeDto resumeDto) throws JsonProcessingException {
        return ResponseEntity.ok(resumeService.updateResumeById(resumeId, resumeDto));
    }

    @Operation(summary = "Delete one resume by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid resume Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Resume not found",
                    content = @Content)})
    @DeleteMapping("/{resumeId}")
    public ResponseEntity<Void> deleteResumeById(@PathVariable Long resumeId) throws JsonProcessingException {
        resumeService.deleteResumeById(resumeId);
        return ResponseEntity.noContent().build();
    }
};