package com.careerwatch.backend.service;

import com.careerwatch.backend.dto.application.stage.StageDto;
import com.careerwatch.backend.dto.application.stage.UpdateStageDto;

import java.util.List;

public interface StageService {
    
    StageDto createStage(StageDto stageDto);
    List<StageDto> getAllStagesByUserId (Long userId);
    StageDto getStageById (Long id);
    StageDto updateStage (Long id, UpdateStageDto stage);
    void deleteStage(Long id);

}
