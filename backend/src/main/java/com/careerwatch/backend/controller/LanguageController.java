package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.dto.resume.language.LanguageDto;
import com.careerwatch.backend.dto.resume.language.UpdateLanguageDto;
import com.careerwatch.backend.service.LanguageService;
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
@RequestMapping("/api/v1/languages")
@CrossOrigin(origins = "*")
public class LanguageController {
    private final LanguageService languageService;

    @Operation(summary = "Create new language")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated language",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = LanguageDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Resume Id not specified
                     - Language cant be empty
                     - Language is not valid
                     - Language level is not valid
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PostMapping
    public ResponseEntity<LanguageDto> createLanguage(@Valid @RequestBody LanguageDto languageDto) throws JsonProcessingException {
        return ResponseEntity.ok(languageService.createLanguage(languageDto));
    }

    @Operation(summary = "get one language by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated language",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = LanguageDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid language Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @GetMapping("/{languageId}")
    public ResponseEntity<LanguageDto> getLanguageById(@PathVariable Long languageId) throws JsonProcessingException  {
        return ResponseEntity.ok(languageService.getLanguageById(languageId));
    }

    @Operation(summary = "Update one language by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated language",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = LanguageDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid language Id
                     - Language cant be empty
                     - Language is not valid
                     - Language level is not valid
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PutMapping("/{languageId}")
    public ResponseEntity<LanguageDto> updateLanguage(@PathVariable Long languageId,
                                                      @Valid @RequestBody UpdateLanguageDto languageDto) throws JsonProcessingException {
        return ResponseEntity.ok(languageService.updateLanguageById(languageId, languageDto));
    }

    @Operation(summary = "Delete one language by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid language Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @DeleteMapping("/{languageId}")
    public ResponseEntity<Void> deleteLanguage(@PathVariable Long languageId) throws JsonProcessingException {
        languageService.deleteLanguageById(languageId);
        return ResponseEntity.noContent().build();
    }
}
