package com.careerwatch.backend.service.impl;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.application.UpdateApplicationDto;
import com.careerwatch.backend.dto.application.task.TaskDto;
import com.careerwatch.backend.entity.Application;
import com.careerwatch.backend.entity.Stage;
import com.careerwatch.backend.entity.Task;
import com.careerwatch.backend.entity.User;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.mapper.application.ApplicationDtoMapper;
import com.careerwatch.backend.mapper.application.TaskDtoMapper;
import com.careerwatch.backend.repository.ApplicationRepository;
import com.careerwatch.backend.repository.StageRepository;
import com.careerwatch.backend.repository.TaskRepository;
import com.careerwatch.backend.repository.UserRepository;
import com.careerwatch.backend.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final ApplicationDtoMapper mapper;
    private final UserRepository userRepository;
    private final StageRepository stageRepository;
    private final TaskDtoMapper taskMapper;
    private final TaskRepository taskRepository;

    @Override
    public ApplicationDto createApplication(ApplicationDto applicationDto) {
        Application application = mapper.dtoToEntity(applicationDto);
        applicationRepository.save(application);
        if (applicationDto.getTasks() != null){
            for(TaskDto taskDto : applicationDto.getTasks()){
                Task task = taskMapper.dtoToEntity(taskDto);
                task.setApplicationId(application.getId());
                taskRepository.save(task);
            }
        }
        return mapper.entityToDto(application);
    }

    @Override
    public List<ApplicationDto> getAllApplicationsByUserId(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new NotFoundException("Error: user with id " + userId + " not found"));
        return mapper.entityToDtoList(user.getApplications());
    }

    @Override
    public ApplicationDto getApplicationById(Long applicationId) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(()-> new NotFoundException("Error: application with id " + applicationId + " not found"));
        return mapper.entityToDto(application);
    }

    @Override
    public ApplicationDto updateStageApplication(Long stageId, Long applicationId) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(()-> new NotFoundException("Error: application with id " + applicationId + " not found"));
        Stage stage = stageRepository.findById(stageId)
                .orElseThrow(()-> new NotFoundException("Error: stage with id " + stageId + " not found"));
        application.setStage(stage);
        return mapper.entityToDto(application);
    }

    @Override
    public ApplicationDto updateApplicationById(Long applicationId, UpdateApplicationDto applicationDto) {
        Application existingApplication = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Error: application with id " + applicationId + " not found"));


        applicationDto.getStageId().ifPresent(stageId -> {
            Stage stageApplication = stageRepository.findById(stageId)
                    .orElseThrow(() -> new RuntimeException("Error: Stage with id " + stageId + " not found"));
            existingApplication.setStage(stageApplication);
        });

        applicationDto.getTasks().ifPresent(tasks -> {
            for (TaskDto task : tasks){
                task.setApplicationId(existingApplication.getId());
                taskRepository.save(taskMapper.dtoToEntity(task));
            }
        });

        applicationDto.getPosition().ifPresent(existingApplication::setPosition);
        applicationDto.getDescription().ifPresent(existingApplication::setDescription);
        applicationDto.getCompany().ifPresent(existingApplication::setCompany);
        applicationDto.getResumeId().ifPresent(existingApplication::setResumeId);

        Application updatedApplication = applicationRepository.save(existingApplication);

        return mapper.entityToDto(updatedApplication);
    }

    @Override
    public void deleteApplicationById(Long applicationId) {
        List<Task> tasks = taskRepository.findAllByApplicationId(applicationId);
        if (!tasks.isEmpty()){
            tasks.forEach(taskRepository::delete);
        }
        applicationRepository.deleteById(applicationId);
    }
}
