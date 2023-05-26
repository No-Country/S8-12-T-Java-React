package com.careerwatch.backend.service.impl;

import com.careerwatch.backend.dto.application.task.TaskDto;
import com.careerwatch.backend.dto.application.task.UpdateTaskDto;
import com.careerwatch.backend.entity.Application;
import com.careerwatch.backend.entity.Task;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.mapper.application.TaskDtoMapper;
import com.careerwatch.backend.repository.ApplicationRepository;
import com.careerwatch.backend.repository.TaskRepository;
import com.careerwatch.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {

    private final ApplicationRepository applicationRepository;
    private final TaskDtoMapper mapper;
    private final TaskRepository taskRepository;


    @Override
    public TaskDto createTask(TaskDto taskDto) {
        Task task = mapper.dtoToEntity(taskDto);
        taskRepository.save(task);
        return mapper.entityToDto(task);
    }

    @Override
    public List<TaskDto> getAllTasksByApplicationId(Long applicationId) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(()-> new NotFoundException("Error: application with id " + applicationId + " not found"));
        return mapper.entitiesToDtoList(application.getTasks());
    }

    @Override
    public TaskDto getTaskById(Long taskId) {
        return mapper.entityToDto(taskRepository.findById(taskId)
                .orElseThrow(()-> new NotFoundException("Error: task with id + " + taskId + " not found")));
    }

    @Override
    public TaskDto updateTaskById(Long taskId, UpdateTaskDto taskDto) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(()-> new NotFoundException("Error: task with id + " + taskId + " not found"));

        taskDto.getTitle().ifPresent(task::setTitle);
        taskDto.getDescription().ifPresent(task::setDescription);

        if (taskDto.getApplicationId().isPresent()){
            Application application = applicationRepository.findById(taskDto.getApplicationId()
                    .orElseThrow(()->new RuntimeException("Error : task with id " + taskDto.getApplicationId() + " not found")))
                    .orElseThrow(()-> new RuntimeException("Error : application not found"));
            task.setApplication(application);
        }
        taskRepository.save(task);
        return mapper.entityToDto(task);
    }

    @Override
    public void deleteTaskById(Long taskId) {
        taskRepository.deleteById(taskId);
    }
}
