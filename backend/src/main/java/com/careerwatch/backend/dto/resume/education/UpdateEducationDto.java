package com.careerwatch.backend.dto.resume.education;

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
public class UpdateEducationDto {
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "Resume Id not specified")
    private Long resumeId;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Title must not be blank")
    private String title;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Institution must not be blank")
    private String institution;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Date Start must not be blank")
    private String dateStart;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Date End must not be blank")
    private String dateEnd;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Description must not be blank")
    private String description;

    public Optional<String> getTitle(){
        return Optional.ofNullable(this.title);
    }
    public Optional<String> getInstitution(){
        return Optional.ofNullable(this.institution);
    }
    public Optional<String> getDateStart(){
        return Optional.ofNullable(this.dateStart);
    }
    public Optional<String> getDateEnd(){
        return Optional.ofNullable(this.dateEnd);
    }
    public Optional<String> getDescription(){
        return Optional.ofNullable(this.description);
    }
}
