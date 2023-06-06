package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.resume.education.EducationDto;
import com.careerwatch.backend.dto.resume.education.UpdateEducationDto;
import com.careerwatch.backend.service.EducationService;
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
@RequestMapping("/api/v1/educations")
@CrossOrigin(origins = "*")
public class EducationController {
    
    private final EducationService educationService;

    @Operation(summary = "Create new education")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The created education",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = EducationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Resume Id not specified
                     - Title must not be blank
                     - Institution must not be blank
                     - Date start must not be blank
                     - Date end must not be blank
                     - Description must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PostMapping("/{resumeId}")
    public ResponseEntity<EducationDto> createEducation(@Valid @RequestBody EducationDto educationDto) throws JsonProcessingException {
        return ResponseEntity.ok(educationService.createEducation(educationDto));
    }

    @Operation(summary = "Get one education by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One education",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = EducationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid education Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Education not found",
                    content = @Content)})
    @GetMapping("/{educationId}")
    public ResponseEntity<EducationDto> getEducationById(@PathVariable Long educationId) throws JsonProcessingException  {
        return ResponseEntity.ok(educationService.getEducation(educationId));
    }

    @Operation(summary = "Update one education by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated application",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = EducationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid education Id
                     - Education Id not specified
                     - Title must not be blank
                     - Institution must not be blank
                     - Date start must not be blank
                     - Date end must not be blank
                     - Description must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Education not found",
                    content = @Content)})
    @PutMapping("/{educationId}")
    public ResponseEntity<EducationDto> updateEducation(@Valid @PathVariable Long educationId, @RequestBody UpdateEducationDto educationDto) throws JsonProcessingException {
        return ResponseEntity.ok(educationService.updateEducation(educationId, educationDto));
    }

    @Operation(summary = "Delete one education by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid education Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Education not found",
                    content = @Content)})
    @DeleteMapping("/{educationId}")
    public ResponseEntity<Void> deleteEducation(@PathVariable Long educationId) throws JsonProcessingException {
        educationService.deleteEducation(educationId);
        return ResponseEntity.noContent().build();
    }
    
}
