package com.careerwatch.backend.service;
import com.careerwatch.backend.dto.application.task.TaskDto;
import com.careerwatch.backend.dto.application.task.UpdateTaskDto;

import java.util.List;

public interface TaskService {

    TaskDto createTask (TaskDto taskDto);
    List<TaskDto> getAllTasksByApplicationId (Long applicationId);
    TaskDto getTaskById (Long taskId);
    TaskDto updateTaskById (Long taskId, UpdateTaskDto task);
    void deleteTaskById (Long taskId);

}
