package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.stage.StageDto;
import com.careerwatch.backend.dto.resume.resume.ResumeDto;
import com.careerwatch.backend.dto.user.UpdateUserDto;
import com.careerwatch.backend.dto.user.UserDto;
import com.careerwatch.backend.service.ApplicationService;
import com.careerwatch.backend.service.ResumeService;
import com.careerwatch.backend.service.StageService;
import com.careerwatch.backend.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;
    private final ResumeService resumeService;
    private final StageService stageService;
    private final ApplicationService applicationService;
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() throws JsonProcessingException {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long userId) throws JsonProcessingException  {
        return ResponseEntity.ok(userService.getUserById(userId));
    }
    @GetMapping("/{userId}/resumes")
    public ResponseEntity<List<ResumeDto>> getAllResumesByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(resumeService.getAllResumesByUserId(userId));
    }
    @GetMapping("/{userId}/stages")
    public ResponseEntity<List<StageDto>> getAllStagesById(@PathVariable Long userId) throws JsonProcessingException {
        return ResponseEntity.ok(stageService.getAllStagesByUserId(userId));
    }
    @GetMapping("{userId}/applications")
    public ResponseEntity<List<ApplicationDto>> getAllApplicationsByUserId(@PathVariable Long userId) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.getAllApplicationsByUserId(userId));
    }
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long userId, @RequestBody UpdateUserDto userDto) throws JsonProcessingException {
        return ResponseEntity.ok(userService.updateUser(userId, userDto));
    }
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) throws JsonProcessingException {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
}