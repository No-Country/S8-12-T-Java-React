package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.stage.StageDto;
import com.careerwatch.backend.dto.application.stage.UpdateStageDto;
import com.careerwatch.backend.service.StageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/stages")
public class StageController {
    
    private final StageService stageService;

    
    @PostMapping
    public ResponseEntity<StageDto> createStage(@RequestBody StageDto stageDto) throws JsonProcessingException {
        return ResponseEntity.ok(stageService.createStage(stageDto));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<StageDto>> getAllStagesById(@PathVariable Long userId) throws JsonProcessingException {
        return ResponseEntity.ok(stageService.getAllStagesByUserId(userId));
    }

    @GetMapping("/{stageId}")
    public ResponseEntity<StageDto> getStageById(@PathVariable Long stageId) throws JsonProcessingException  {
        return ResponseEntity.ok(stageService.getStageById(stageId));
    }

    @PutMapping("/{stageId}")
    public ResponseEntity<StageDto> updateStage(@PathVariable Long stageId, @RequestBody UpdateStageDto stageDto) throws JsonProcessingException {
        return ResponseEntity.ok(stageService.updateStage(stageId, stageDto));
    }

    @DeleteMapping("/{stageId}")
    public ResponseEntity<Void> deleteStage(@PathVariable Long stageId) throws JsonProcessingException {
        stageService.deleteStage(stageId);
        return ResponseEntity.noContent().build();
    }
}
