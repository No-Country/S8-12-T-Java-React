package com.careerwatch.backend.dto.user;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.stage.StageDto;
import com.careerwatch.backend.dto.resume.resume.ResumeDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UserDto {
    private Long id;
    private String email;
    private String clientSince;
    private String profileImage;
    private List<ResumeDto> resumes;
    private List<StageDto> stages;
    private List<ApplicationDto> applications;
}
