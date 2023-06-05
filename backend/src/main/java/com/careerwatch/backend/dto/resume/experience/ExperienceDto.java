package com.careerwatch.backend.dto.resume.experience;

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
public class ExperienceDto {
    private Long id;
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotEmpty(message = "Resume Id not specified")
    private Long resumeId;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Title must not be blank")
    private String title;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Company must not be blank")
    private String company;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Date start must not be blank")
    private String dateStart;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Date end must not be blank")
    private String dateEnd;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Description must not be blank")
    private String description;
}
