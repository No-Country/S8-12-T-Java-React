package com.careerwatch.backend.dto.resume.resume;

import com.careerwatch.backend.dto.resume.education.EducationDto;
import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.dto.resume.language.LanguageDto;
import com.careerwatch.backend.dto.resume.profile.ProfileDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ResumeDto {
    private Long id;
    @NotNull(message = "User ID can't be empty")
    private Long userId;
    private String presentation;
    @NotBlank(message = "Resume name can't be empty")
    private String resumeName;
    private ProfileDto profile;
    private List<EducationDto> educations;
    private List<ExperienceDto> experiences;
    private List<LanguageDto> languages;
}
