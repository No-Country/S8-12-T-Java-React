package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.dto.resume.social.UpdateSocialDto;
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
@RequestMapping("api/v1/socials")
@CrossOrigin(origins = "*")
public class SocialController {

    private final SocialService socialService;

    @Operation(summary = "Create new social")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The created social",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = SocialDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Profile Id cant be empty
                     - Social title cant be empty
                     - Social link cant be empty
                     - Social link is not valid
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PostMapping
    public ResponseEntity<SocialDto> createSocial(@PathVariable Long resumeId,
                                                  @RequestBody @Valid SocialDto socialDto) throws JsonProcessingException {
        return ResponseEntity.ok(socialService.createSocial(resumeId, socialDto));
    }

    @Operation(summary = "Get one social by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One social",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = SocialDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid social Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Social not found",
                    content = @Content)})
    @GetMapping("/{socialId}")
    public ResponseEntity<SocialDto> getSocialById(@PathVariable Long socialId) throws JsonProcessingException  {
        return ResponseEntity.ok(socialService.getSocialById(socialId));
    }

    @Operation(summary = "Update one social by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated social",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = SocialDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid social Id
                     - Social title cant be empty
                     - Social link cant be empty
                     - Social link is not valid
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Social not found",
            content = @Content)})
    @PutMapping("/{socialId}")
    public ResponseEntity<SocialDto> updateSocial(@PathVariable Long socialId,
                                                  @RequestBody @Valid UpdateSocialDto socialDto) throws JsonProcessingException {
        return ResponseEntity.ok(socialService.updateSocialById(socialId, socialDto));
    }

    @Operation(summary = "Delete one social by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid social Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Social not found",
            content = @Content)})
    @DeleteMapping("/{socialId}")
    public ResponseEntity<Void> deleteSocial(@PathVariable Long socialId) throws JsonProcessingException {
        socialService.deleteSocialById(socialId);
        return ResponseEntity.noContent().build();
    }
    
}
