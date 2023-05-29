package com.careerwatch.backend.dto.application.application;

import com.careerwatch.backend.dto.application.task.TaskDto;

import java.util.List;
import java.util.Optional;

public class UpdateApplicationDto {
    private Long userId;
    private Long stageId;
    private Long resumeId;
    private List<TaskDto> tasks;
    private String position;
    private String description;
    private String applicationDate;
    private String company;

    public Optional<Long> getUserId(){
        return Optional.ofNullable(this.userId);
    }
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
