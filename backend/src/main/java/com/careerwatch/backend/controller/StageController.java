package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.stage.CreateStageDto;
import com.careerwatch.backend.dto.application.stage.StageDto;
import com.careerwatch.backend.dto.application.stage.UpdateStageDto;
import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.service.StageService;
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
@RequestMapping("/api/v1/stages")
@CrossOrigin(origins = "*")
public class StageController {
    
    private final StageService stageService;

    @Operation(summary = "Create a new stage")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The created stage",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = StageDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - User Id not specified
                     - User Id must be a number
                     - Stage name must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PostMapping
    public ResponseEntity<StageDto> createStage(@RequestBody @Valid CreateStageDto stageDto) throws JsonProcessingException {
        return ResponseEntity.ok(stageService.createStage(stageDto));
    }

    @Operation(summary = "Get one stage by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One stage",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = StageDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid stage Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Stage not found",
                    content = @Content)})
    @GetMapping("/{stageId}")
    public ResponseEntity<StageDto> getStageById(@PathVariable Long stageId) throws JsonProcessingException  {
        return ResponseEntity.ok(stageService.getStageById(stageId));
    }

    @Operation(summary = "Update one stage by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated stage",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = StageDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid stage Id
                     - Stage name must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Stage not found",
                    content = @Content)})
    @PutMapping("/{stageId}")
    public ResponseEntity<StageDto> updateStage(@PathVariable Long stageId,
                                                @RequestBody @Valid UpdateStageDto stageDto) throws JsonProcessingException {
        return ResponseEntity.ok(stageService.updateStage(stageId, stageDto));
    }

    @Operation(summary = "Delete one stage by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid experience Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Stage not found",
                    content = @Content)})
    @DeleteMapping("/{stageId}")
    public ResponseEntity<Void> deleteStage(@PathVariable Long stageId) throws JsonProcessingException {
        stageService.deleteStage(stageId);
        return ResponseEntity.noContent().build();
    }
}
