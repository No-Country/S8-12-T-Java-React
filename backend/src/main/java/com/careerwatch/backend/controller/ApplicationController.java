package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.application.UpdateApplicationDto;
import com.careerwatch.backend.dto.application.task.TaskDto;
import com.careerwatch.backend.service.ApplicationService;
import com.careerwatch.backend.service.TaskService;
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
@RequestMapping("/api/v1/applications")
@CrossOrigin(origins = "*")
public class ApplicationController {

    private final ApplicationService applicationService;
    private final TaskService taskService;

    @Operation(summary = "Create new Application")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The created application",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ApplicationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - User Id not specified
                     - Resume Id must not be blank and must be a number
                     - Stage Id not specified
                     - Position must not be blank
                     - Description must not be blank
                     - Application date must not be blank
                     - Company must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PostMapping()
    public ResponseEntity<ApplicationDto> createApplication(@Valid @RequestBody ApplicationDto applicationDto) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.createApplication(applicationDto));
    }

    @Operation(summary = "Get one Application by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One Application",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ApplicationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                    
                     - Invalid application Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Application not found",
                    content = @Content),})
    @GetMapping("/{applicationId}")
    public ResponseEntity<ApplicationDto> getApplicationById(@PathVariable Long applicationId) throws JsonProcessingException  {
        return ResponseEntity.ok(applicationService.getApplicationById(applicationId));
    }

    @Operation(summary = "Get all tasks by application Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of all tasks",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = TaskDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = TaskDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                    
                     - Invalid application Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "204", description = "There is no tasks in application ",
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Application not found",
                    content = @Content),})
    @GetMapping("/{applicationId}/tasks")
    public ResponseEntity<List<TaskDto>> getAllTasksByApplicationId(@PathVariable Long applicationId) throws JsonProcessingException {
        return ResponseEntity.ok(taskService.getAllTasksByApplicationId(applicationId));
    }

    @Operation(summary = "Update one application by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated application",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ApplicationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Resume Id must not be blank and must be a number
                     - Stage Id not specified
                     - Position must not be blank
                     - Description must not be blank
                     - Application date must not be blank
                     - Company must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Application not found",
                    content = @Content),})
    @PutMapping("/{applicationId}")
    public ResponseEntity<ApplicationDto> updateApplicationById(@PathVariable Long applicationId, @RequestBody @Valid UpdateApplicationDto applicationDto) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.updateApplicationById(applicationId, applicationDto));
    }

    @Operation(summary = "Update the stage of one application by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated application",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ApplicationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Stage Id not specified
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Application not found",
                    content = @Content),})
    @PutMapping("/{applicationId}/toStage/{stageId}")
    public ResponseEntity<ApplicationDto> updateStageApplication(@PathVariable Long stageId, @PathVariable Long applicationId) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.updateStageApplication(stageId, applicationId));
    }

    @Operation(summary = "Delete one application by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid application Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Application not found",
                    content = @Content),})
    @DeleteMapping("/{applicationId}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long applicationId) throws JsonProcessingException {
        applicationService.deleteApplicationById(applicationId);
        return ResponseEntity.noContent().build();
    }
}