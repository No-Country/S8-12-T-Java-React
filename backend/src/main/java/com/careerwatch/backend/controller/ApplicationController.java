package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.application.UpdateApplicationDto;
import com.careerwatch.backend.service.ApplicationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/applications")
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping()
    public ResponseEntity<ApplicationDto> createApplication(@RequestBody ApplicationDto applicationDto) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.createApplication(applicationDto));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ApplicationDto>> getAllApplicationsByUserId(@PathVariable Long userId) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.getAllApplicationsByUserId(userId));
    }

    @GetMapping("/{applicationId}")
    public ResponseEntity<ApplicationDto> getApplicationById(@PathVariable Long applicationId) throws JsonProcessingException  {
        return ResponseEntity.ok(applicationService.getApplicationById(applicationId));
    }

    @PutMapping("/{applicationId}")
    public ResponseEntity<ApplicationDto> updateApplicationById(@PathVariable Long applicationId, @RequestBody UpdateApplicationDto applicationDto) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.updateApplicationById(applicationId, applicationDto));
    }

    @PutMapping("/stage/{stageId}/application/{applicationId}")
    public ResponseEntity<ApplicationDto> updateStageApplication(@PathVariable Long stageId, @PathVariable Long applicationId) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.updateStageApplication(stageId, applicationId));
    }

    @DeleteMapping("/{applicationId}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long applicationId) throws JsonProcessingException {
        applicationService.deleteApplicationById(applicationId);
        return ResponseEntity.noContent().build();
    }
    
}