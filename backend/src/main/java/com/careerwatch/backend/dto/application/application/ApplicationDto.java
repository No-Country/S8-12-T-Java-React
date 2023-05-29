package com.careerwatch.backend.dto.application.application;

import com.careerwatch.backend.dto.application.task.TaskDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ApplicationDto {
    private Long id;
    private Long userId;
    private Long stageId;
    private List<TaskDto> tasks;
    private String position;
    private String description;
    private String applicationDate;
    private String company;
    private Long resumeId;
}
