package com.careerwatch.backend.dto.resume.language;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class LanguageDto {
    private Long id;
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotEmpty(message = "Resume Id is not specified")
    private Long resumeId;
    @NotEmpty(message = "Language cant be empty")
    @Pattern(regexp = "(?i)^(ENGLISH|FRENCH|SPANISH|PORTUGUESE|CHINESE)$", message = "Language is not valid")
    private String language;
    @Pattern(regexp = "(?i)^(A1|A2|B1|B2|C1|C2|Native)$", message = "Language level is not valid")
    private String languageLevel;
}
