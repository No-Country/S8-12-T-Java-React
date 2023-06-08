package com.careerwatch.backend.mapper.application;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.task.TaskDto;
import com.careerwatch.backend.entity.Application;
import com.careerwatch.backend.entity.Stage;
import com.careerwatch.backend.entity.Task;
import com.careerwatch.backend.entity.User;
import com.careerwatch.backend.repository.StageRepository;
import com.careerwatch.backend.repository.TaskRepository;
import com.careerwatch.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ApplicationDtoMapper {

    private final TaskDtoMapper taskMapper;
    private final UserRepository userRepository;
    private final StageRepository stageRepository;
    private final TaskRepository taskRepository;

    public ApplicationDto entityToDto (Application application){

        List<TaskDto> taskDtos =  Collections.emptyList();
        List<Task> existingTaks = taskRepository.findAllByApplicationId(application.getId());
        if(!existingTaks.isEmpty()){
            taskDtos = existingTaks.stream().map(
                    taskMapper::entityToDto
            ).toList();
        }

        return ApplicationDto.builder()
                .id(application.getId())
                .userId(application.getUser().getId())
                .stageId(application.getStage().getId())
                .tasks(taskDtos)
                .position(application.getPosition())
                .description(application.getDescription())
                .applicationDate(application.getApplicationDate())
                .company(application.getCompany())
                .resumeId(application.getResumeId())
                .build();
    };

    public Application dtoToEntity(ApplicationDto applicationDto){

        User userApplication = userRepository.findById(applicationDto.getUserId())
                .orElseThrow(()-> new RuntimeException("Error: User not found"));

        Stage stageApplication = stageRepository.findById(applicationDto.getStageId())
                .orElseThrow(()-> new RuntimeException("Error: Stage not found"));

        return Application.builder()
                .user(userApplication)
                .stage(stageApplication)
                .position(applicationDto.getPosition())
                .description(applicationDto.getDescription())
                .company(applicationDto.getCompany())
                .resumeId(applicationDto.getResumeId())
                .build();
    }

    public List<ApplicationDto> entityToDtoList(List<Application> applications) {
        return applications.stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }

}
