package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.education.EducationDto;
import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.service.ExperienceService;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/experiences")
@CrossOrigin(origins = "*")
public class ExperienceController {
    
    private final ExperienceService experienceService;

    @Operation(summary = "Create new experience")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The created experience",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ExperienceDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid experience Id
                     - Resume Id not specified
                     - Company must not be blank
                     - Date start must not be blank
                     - Date end must not be blank
                     - Description must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PostMapping
    public ResponseEntity<ExperienceDto> createExperience(@Valid @RequestBody ExperienceDto experienceDto) throws JsonProcessingException {
        return ResponseEntity.ok(experienceService.createExperience(experienceDto));
    }

    @Operation(summary = "Get one experience by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One experience",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ExperienceDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid experience Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "experience not found",
                    content = @Content)})
    @GetMapping("/{experienceId}")
    public ResponseEntity<ExperienceDto> getExperienceById(@PathVariable Long experienceId) throws JsonProcessingException  {
        return ResponseEntity.ok(experienceService.getExperienceById(experienceId));
    }

    @Operation(summary = "Update one experience by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated experience",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ExperienceDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid experience Id
                     - Resume Id not specified
                     - Company must not be blank
                     - Date start must not be blank
                     - Date end must not be blank
                     - Description must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "experience not found",
                    content = @Content)})
    @PutMapping("/{experienceId}")
    public ResponseEntity<ExperienceDto> updateExperienceById(@PathVariable Long experienceId,
                                                              @Valid @RequestBody ExperienceDto experienceDto) throws JsonProcessingException {
        return ResponseEntity.ok(experienceService.updateExperienceById(experienceId, experienceDto));
    }

    @Operation(summary = "Delete one experience by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                 
                     - Invalid experience Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "experience not found",
                    content = @Content)})
    @DeleteMapping("/{experienceId}")
    public ResponseEntity<Void> deleteExperience(@PathVariable Long experienceId) throws JsonProcessingException {
        experienceService.deleteExperienceById(experienceId);
        return ResponseEntity.noContent().build();
    }
}
