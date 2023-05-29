package com.careerwatch.backend.mapper.application;

import com.careerwatch.backend.dto.application.task.TaskDto;
import com.careerwatch.backend.entity.Application;
import com.careerwatch.backend.entity.Task;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class TaskDtoMapper {

    private final ApplicationRepository applicationRepository;
    public TaskDto entityToDto(Task task){
        return TaskDto.builder()
                .id(task.getId())
                .applicationId(task.getApplicationId())
                .title(task.getTitle())
                .description(task.getDescription())
                .build();
    }

    public Task dtoToEntity(TaskDto taskDto){

        return Task.builder()
                .title(taskDto.getTitle())
                .description(taskDto.getDescription())
                .build();
    }

    public List<TaskDto> entitiesToDtoList(List<Task> tasks) {
        return tasks.stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }
}
