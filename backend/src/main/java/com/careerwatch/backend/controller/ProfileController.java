package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.language.LanguageDto;
import com.careerwatch.backend.dto.resume.profile.ProfileDto;
import com.careerwatch.backend.dto.resume.profile.UpdateProfileDto;
import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.service.ProfileService;
import com.careerwatch.backend.service.SocialService;
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
@RequestMapping("/api/v1/profile")
@CrossOrigin(origins = "*")
public class ProfileController {
    
    private final ProfileService profileService;
    @Operation(summary = "Update one profile by resume Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The profile updated",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProfileDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Resume Id is not valid
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PutMapping("/{resumeId}")
    public ResponseEntity<ProfileDto> updateProfileByResumeId(@PathVariable Long resumeId,
                                                              @RequestBody @Valid UpdateProfileDto profileDto) throws JsonProcessingException {
        return ResponseEntity.ok(profileService.updateProfileByResumeId(resumeId, profileDto));
    }

    @Operation(summary = "Delete one profile by resume Id")
    @ApiResponses(value = {
            @ApiResponse (responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Resume Id is not valid
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Profile not found",
                    content = @Content)})
    @DeleteMapping("/{resumeId}")
    public ResponseEntity<Void> deleteProfileByResumeId(@PathVariable Long resumeId) throws JsonProcessingException {
        profileService.deleteProfileByResumeId(resumeId);
        return ResponseEntity.noContent().build();
    }
}
