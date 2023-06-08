package com.careerwatch.backend.dto.application.task;

import com.careerwatch.backend.entity.Application;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class TaskDto {
    private Long id;
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "Application Id not specified")
    private Long applicationId;
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotEmpty(message = "Title must not be empty")
    private String title;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Description must not be blank")
    private String description;
}
