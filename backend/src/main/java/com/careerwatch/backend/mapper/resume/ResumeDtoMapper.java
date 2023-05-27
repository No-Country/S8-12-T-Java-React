package com.careerwatch.backend.mapper.resume;

import com.careerwatch.backend.dto.resume.education.EducationDto;
import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.dto.resume.language.LanguageDto;
import com.careerwatch.backend.dto.resume.profile.ProfileDto;
import com.careerwatch.backend.dto.resume.resume.ResumeDto;
import com.careerwatch.backend.entity.Profile;
import com.careerwatch.backend.entity.Resume;
import com.careerwatch.backend.entity.User;
import com.careerwatch.backend.repository.*;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ResumeDtoMapper {
    private final UserRepository userRepository;
    private final ExperienceRepository experienceRepository;
    private final LanguageRepository languageRepository;
    private final EducationRepository educationRepository;
    private final EducationDtoMapper educationDtoMapper;
    private final ProfileDtoMapper profileDtoMapper;
    private final ExperienceDtoMapper experienceDtoMapper;
    private final LanguageDtoMapper languageDtoMapper;

    public ResumeDto entityToDto (Resume resume){

        List<ExperienceDto> experienceDtoList = experienceRepository.findAllByResumeId(resume.getId())
                .stream().map(
                        experienceDtoMapper::entityToDto)
                .toList();

        List<LanguageDto> languageDtoList = languageRepository.findAllByResumeId(resume.getId())
                .stream().map(
                        languageDtoMapper::entityToDto)
                .toList();
        List<EducationDto> educationDtoList = educationRepository.findAllByResumeId(resume.getId())
                .stream().map(
                        educationDtoMapper::entityToDto)
                .toList();

        ProfileDto profileDto = profileDtoMapper.entityToDto(resume.getProfile());

        return ResumeDto.builder()
                .id(resume.getId())
                .userId(resume.getUser().getId())
                .presentation(resume.getPresentation())
                .resumeName(resume.getResumeName())
                .profile(profileDto)
                .educations(educationDtoList)
                .experiences(experienceDtoList)
                .languages(languageDtoList)
                .build();
    }

    public Resume dtoToEntity (ResumeDto resumeDto){
        User userResume = userRepository.findById(resumeDto.getUserId())
                .orElseThrow(()-> new RuntimeException("Error: User not found"));

        return Resume.builder()
                .user(userResume)
                .presentation(resumeDto.getPresentation())
                .resumeName(resumeDto.getResumeName())
                .build();
    }

    public List<ResumeDto> entitiesToDtoList(List<Resume> resumes) {
        return resumes.stream()
                .map(this::entityToDto)
                .toList();
    }
}
