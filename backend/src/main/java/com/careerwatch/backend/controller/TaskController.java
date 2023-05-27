package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.task.TaskDto;
import com.careerwatch.backend.dto.application.task.UpdateTaskDto;
import com.careerwatch.backend.service.TaskService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskDto> createTask(@RequestBody TaskDto taskDto) throws JsonProcessingException {
        return ResponseEntity.ok(taskService.createTask(taskDto));
    }

    @GetMapping("/{applicationId}")
    public ResponseEntity<List<TaskDto>> getAllTasksById(@PathVariable Long applicationId) throws JsonProcessingException {
        return ResponseEntity.ok(taskService.getAllTasksByApplicationId(applicationId));
    }

    @GetMapping("/{taskId}")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable Long taskId) throws JsonProcessingException  {
        return ResponseEntity.ok(taskService.getTaskById(taskId));
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<TaskDto> updateTaskById(@PathVariable Long taskId, @RequestBody UpdateTaskDto taskDto) throws JsonProcessingException {
        return ResponseEntity.ok(taskService.updateTaskById(taskId, taskDto));
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable Long taskId) throws JsonProcessingException {
        taskService.deleteTaskById(taskId);
        return ResponseEntity.noContent().build();
    }
}
