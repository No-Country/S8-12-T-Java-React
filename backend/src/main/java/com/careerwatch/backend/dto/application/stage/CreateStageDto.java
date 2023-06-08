package com.careerwatch.backend.dto.application.stage;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class CreateStageDto {

    @NotNull(message = "User Id is required")
    private Long userId;
    @NotBlank(message = "Stage name is required")
    @Pattern(regexp = "^(?!\\s*$).+", message = "Stage name must not be blank")
    private String stageName;
}
