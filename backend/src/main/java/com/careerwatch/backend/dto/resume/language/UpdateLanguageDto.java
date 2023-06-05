package com.careerwatch.backend.dto.resume.language;

import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UpdateLanguageDto {
    @Pattern(regexp = "(?i)^(ENGLISH|FRENCH|SPANISH|PORTUGUESE|CHINESE)$", message = "Language is not valid")
    private String language;
    @Pattern(regexp = "(?i)^(A1|A2|B1|B2|C1|C2|Native)$", message = "Language level is not valid")
    private String languageLevel;

    public Optional<String> getLanguage() {
        return Optional.ofNullable(this.language);
    }

    public Optional<String> getLanguageLevel() {
        return Optional.ofNullable(this.languageLevel);
    }
}
