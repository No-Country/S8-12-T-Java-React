package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.task.TaskDto;
import com.careerwatch.backend.dto.application.task.UpdateTaskDto;
import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
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
@RequestMapping("/api/v1/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService taskService;

    @Operation(summary = "Create a new task")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The created task",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = TaskDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Application Id not specified
                     - Title must not be empty
                     - Description must not be blank
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @PostMapping
    public ResponseEntity<TaskDto> createTask(@Valid @RequestBody TaskDto taskDto) throws JsonProcessingException {
        return ResponseEntity.ok(taskService.createTask(taskDto));
    }

    @Operation(summary = "Get one task by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One task",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = TaskDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid task Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Task not found",
                    content = @Content)})
    @GetMapping("/task/{taskId}")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable Long taskId) throws JsonProcessingException  {
        return ResponseEntity.ok(taskService.getTaskById(taskId));
    }

    @Operation(summary = "Update one task by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated task",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = TaskDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid task Id
                     - Title must not be blank
                     - Description must not be blank
                     - Invalid experience Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Task not found",
                    content = @Content)})
    @PutMapping("/{taskId}")
    public ResponseEntity<TaskDto> updateTaskById(@PathVariable Long taskId,
                                                  @Valid @RequestBody UpdateTaskDto taskDto) throws JsonProcessingException {
        return ResponseEntity.ok(taskService.updateTaskById(taskId, taskDto));
    }

    @Operation(summary = "Delete one task by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid task Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Task not found",
                    content = @Content)})
    @DeleteMapping("/{taskId}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable Long taskId) throws JsonProcessingException {
        taskService.deleteTaskById(taskId);
        return ResponseEntity.noContent().build();
    }
}
