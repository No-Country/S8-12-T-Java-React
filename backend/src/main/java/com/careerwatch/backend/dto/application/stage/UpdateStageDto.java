package com.careerwatch.backend.dto.application.stage;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Optional;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UpdateStageDto {
    @Pattern(regexp = "^(?!\\s*$).+", message = "Stage name must not be blank")
    private String stageName;
    private List<ApplicationDto> applications;

    public Optional<String> getStageName() {
        return Optional.ofNullable(stageName);
    }

    public Optional<List<ApplicationDto>> getApplications() {
        return Optional.ofNullable(applications);
    }
    
}