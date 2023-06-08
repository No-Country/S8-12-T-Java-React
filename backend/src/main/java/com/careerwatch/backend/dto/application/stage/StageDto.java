package com.careerwatch.backend.dto.application.stage;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
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
public class StageDto {
    private Long id;
    private Long userId;
    private String stageName;
    private List<ApplicationDto> applications;
}
