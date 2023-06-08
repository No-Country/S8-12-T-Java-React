package com.careerwatch.backend.dto.resume.experience;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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
public class UpdateExperienceDto {
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "Resume Id not specified")
    private Long resumeId;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Title must not be blank")
    private String title;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Company must not be blank")
    private String company;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Date start title must not be blank")
    private String dateStart;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Date end title must not be blank")
    private String dateEnd;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Description title must not be blank")
    private String description;

    public Optional<Long> getResumeId() {
        return Optional.ofNullable(this.resumeId);
    }

    public Optional<String> getTitle() {
        return Optional.ofNullable(this.title);
    }

    public Optional<String> getCompany() {
        return Optional.ofNullable(this.company);
    }

    public Optional<String> getDateStart() {
        return Optional.ofNullable(this.dateStart);
    }

    public Optional<String> getDateEnd() {
        return Optional.ofNullable(this.dateEnd);
    }

    public Optional<String> getDescription() {
        return Optional.ofNullable(this.description);
    }

}
