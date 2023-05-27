package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.resume.ResumeDto;
import com.careerwatch.backend.dto.resume.resume.UpdateResumeDto;
import com.careerwatch.backend.service.ResumeService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/resumes")
public class ResumeController {
    private final ResumeService resumeService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<ResumeDto>> getAllResumesByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(resumeService.getAllResumesByUserId(userId));
    }

    @GetMapping("/resume/{resumeId}")
    public ResponseEntity<ResumeDto> getResumeById( @PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(resumeService.getResumeById(resumeId));
    }

    @PostMapping()
    public ResponseEntity<ResumeDto> createResume(@RequestBody ResumeDto resumeDto) throws JsonProcessingException {
        return ResponseEntity.status(HttpStatus.CREATED).body(resumeService.createResume(resumeDto));
    }

    @PutMapping("/{resumeId}")
    public ResponseEntity<ResumeDto> updateResumeById(@PathVariable Long resumeId, @RequestBody UpdateResumeDto resumeDto) throws JsonProcessingException {
        return ResponseEntity.ok(resumeService.updateResumeById(resumeId, resumeDto));
    }

    @DeleteMapping("/{resumeId}")
    public ResponseEntity<Void> deleteResumeById(@PathVariable Long resumeId) throws JsonProcessingException {
        resumeService.deleteResumeById(resumeId);
        return ResponseEntity.noContent().build();
    }
};