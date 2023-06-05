package com.careerwatch.backend.dto.application.application;

import com.careerwatch.backend.dto.application.task.TaskDto;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
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
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotEmpty(message = "User Id not specified")
    private Long userId;
    @Pattern(regexp = "^(?:\\d+)?\\s*$", message = "Resume Id must not be blank and must be a number")
    private Long resumeId;
    @NotEmpty(message = "Stage Id not specified")
    private Long stageId;
    private List<TaskDto> tasks;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Position must not be blank")
    private String position;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Description must not be blank")
    private String description;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Application date must not be blank")
    private String applicationDate;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Company must not be blank")
    private String company;
}
