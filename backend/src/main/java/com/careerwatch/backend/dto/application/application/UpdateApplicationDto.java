package com.careerwatch.backend.dto.application.application;

import com.careerwatch.backend.dto.application.task.TaskDto;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;

import java.util.List;
import java.util.Optional;

public class UpdateApplicationDto {
    @Pattern(regexp = "^(?:\\d+)?\\s*$", message = "Stage Id must not be blank and must be a number")
    private Long stageId;
    @Pattern(regexp = "^(?:\\d+)?\\s*$", message = "Resume Id must not be blank and must be a number")
    private Long resumeId;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Position must not be blank")
    private String position;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Description must not be blank")
    private String description;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Application Date must not be blank")
    private String applicationDate;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Company must not be blank")
    private String company;
    private List<TaskDto> tasks;

    public Optional<Long> getStageId(){
        return Optional.ofNullable(this.stageId);
    }
    public Optional<List<TaskDto>> getTasks(){
        return Optional.ofNullable(this.tasks);
    }
    public Optional<String> getPosition(){
        return Optional.ofNullable(this.position);
    }
    public Optional<String> getDescription(){
        return Optional.ofNullable(this.description);
    }
    public Optional<String> getApplicationDate(){
        return Optional.ofNullable(this.applicationDate);
    }
    public Optional<String> getCompany(){
        return Optional.ofNullable(this.company);
    }
    public Optional<Long> getResumeId(){
        return Optional.ofNullable(this.resumeId);
    }
}
