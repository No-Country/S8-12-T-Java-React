package com.careerwatch.backend.dto.application.stage;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class CreateStageDto {
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotEmpty(message = "User Id not specified")
    private Long userId;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Stage name must not be blank")
    private String stageName;
}
