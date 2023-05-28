package com.careerwatch.backend.mapper.application;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.stage.StageDto;
import com.careerwatch.backend.entity.Application;
import com.careerwatch.backend.entity.Stage;
import com.careerwatch.backend.entity.User;
import com.careerwatch.backend.repository.ApplicationRepository;
import com.careerwatch.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class StageDtoMapper {

    private final ApplicationDtoMapper applicationMapper;
    private final UserRepository userRepository;
    private final ApplicationRepository applicationRepository;

    public StageDto entityToDto (Stage stage){

        List<ApplicationDto> applicationDtos = stage.getApplications().stream().map(
                applicationMapper::entityToDto
        ).toList();

        return StageDto.builder()
                .id(stage.getId())
                .userId(stage.getUser().getId())
                .stageName(stage.getStageName())
                .applications(applicationDtos)
                .build();
    }

    public Stage dtoToEntity (StageDto stageDto){

        User userStage = userRepository.findById(stageDto.getUserId())
                .orElseThrow(()-> new RuntimeException("Error: User not found"));

        List<Application> applications = new ArrayList<>();
        if (stageDto.getApplications() != null){
            for (ApplicationDto appDto : stageDto.getApplications()){
                applications.add(applicationRepository.findById(appDto.getId())
                        .orElseThrow(()-> new RuntimeException("Error: Application not found")));
            }
        }


        return Stage.builder()
                .stageName(stageDto.getStageName())
                .user(userStage)
                .applications(applications)
                .build();
    }

    public List<StageDto> entitiesToDtoList(List<Stage> stages) {
        return stages.stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }

}
