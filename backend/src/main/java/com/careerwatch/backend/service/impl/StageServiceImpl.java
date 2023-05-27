package com.careerwatch.backend.service.impl;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.stage.StageDto;
import com.careerwatch.backend.dto.application.stage.UpdateStageDto;
import com.careerwatch.backend.entity.Application;
import com.careerwatch.backend.entity.Stage;
import com.careerwatch.backend.entity.User;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.mapper.application.StageDtoMapper;
import com.careerwatch.backend.repository.ApplicationRepository;
import com.careerwatch.backend.repository.StageRepository;
import com.careerwatch.backend.repository.UserRepository;
import com.careerwatch.backend.service.StageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StageServiceImpl implements StageService {
    
    private final ApplicationRepository applicationRepository;
    private final StageRepository stageRepository;
    private final StageDtoMapper mapper;
    private final UserRepository userRepository;


    @Transactional
    @Override
    public StageDto createStage(StageDto stageDto) {
        Stage stage = mapper.dtoToEntity(stageDto);
        stageRepository.save(stage);
        return mapper.entityToDto(stage);
    }

    @Transactional
    @Override
    public List<StageDto> getAllStagesByUserId(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new NotFoundException("Error: User with id " + userId + " not found"));
        return mapper.entitiesToDtoList(user.getStages());
    }

    @Transactional
    @Override
    public StageDto getStageById (Long id) {
        return mapper.entityToDto(stageRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Error: stage " + id + " not found")));
    }

    @Transactional
    @Override
    public StageDto updateStage (Long id, UpdateStageDto stageDto) {
        
        Stage stage = stageRepository.findById(id).orElseThrow(()->
                new RuntimeException("Error: stage not found"));

        stageDto.getStageName().ifPresent(stage::setStageName);

        if (stageDto.getApplications().isPresent()) {
            List<Application> applicationList = stageDto.getApplications()
                    .orElseThrow(() -> new NotFoundException("Error: application not found"))
                    .stream()
                    .map(ApplicationDto::getId)
                    .map(applicationRepository::findById)
                    .filter(Optional::isPresent)
                    .map(Optional::get)
                    .toList();

            stage.setApplications(applicationList);
        }

        stageRepository.save(stage);
        return mapper.entityToDto(stage);
    }

    @Transactional
    @Override
    public void deleteStage(Long stageId) {
        if (stageRepository.existsById(stageId))
            throw new RuntimeException("Error: stage " + stageId + " not found");
        stageRepository.deleteById(stageId);
    }

}
