package com.careerwatch.backend.dto.application.application;

import com.careerwatch.backend.dto.application.task.TaskDto;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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
    @NotNull(message = "User Id not specified")
    private Long userId;

    private Long resumeId;
    @NotNull(message = "Stage Id not specified")
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
