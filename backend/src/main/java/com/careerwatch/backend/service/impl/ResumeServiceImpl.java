package com.careerwatch.backend.service.impl;

import com.careerwatch.backend.dto.resume.education.EducationDto;
import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.dto.resume.language.LanguageDto;
import com.careerwatch.backend.dto.resume.resume.ResumeDto;
import com.careerwatch.backend.dto.resume.resume.UpdateResumeDto;
import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.entity.*;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.mapper.resume.*;
import com.careerwatch.backend.repository.*;
import com.careerwatch.backend.service.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ResumeServiceImpl implements ResumeService {

    private final ResumeRepository resumeRepository;
    private final ResumeDtoMapper mapper;
    private final ProfileDtoMapper profileDtoMapper;
    private final EducationService educationService;
    private final SocialService socialService;
    private final ExperienceService experienceService;
    private final LanguageService languageService;
    private final ProfileService profileService;
    private final EducationRepository educationRepository;
    private final ExperienceRepository experienceRepository;
    private final LanguageRepository languageRepository;

    @Transactional
    @Override
    public ResumeDto createResume(ResumeDto resumeDto) {
        Resume resume = mapper.dtoToEntity(resumeDto);
        Profile profile = profileDtoMapper.dtoToEntity(resumeDto.getProfile());
        resume.setProfile(profile);
        resumeRepository.save(resume);

        List<SocialDto> socials = resumeDto.getProfile().getSocials();
        if (socials != null) {
            for (SocialDto social : socials) {
                socialService.createSocial(resume.getId(), social);
            }
        }

        List<EducationDto> educations = resumeDto.getEducations();
        if (educations != null) {
            for (EducationDto education : educations) {
                education.setResumeId(resume.getId());
                educationService.createEducation(education);
            }
        }

        List<ExperienceDto> experiences = resumeDto.getExperiences();
        if (experiences != null) {
            for (ExperienceDto experience : experiences) {
                experience.setResumeId(resume.getId());
                experienceService.createExperience(experience);
            }
        }

        List<LanguageDto> languages = resumeDto.getLanguages();
        if (languages != null) {
            for (LanguageDto language : languages) {
                language.setResumeId(resume.getId());
                languageService.createLanguage(language);
            }
        }
        return mapper.entityToDto(resume);
    }

    @Transactional
    @Override
    public List<ResumeDto> getAllResumesByUserId(Long userId) {
        List<Resume> resumes = resumeRepository.findAllByUserId(userId);
        return mapper.entitiesToDtoList(resumes);
    }
    @Transactional
    @Override
    public ResumeDto getResumeById(Long resumeId) {
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new NotFoundException("Error: Resume not found"));
        return mapper.entityToDto(resume);
    }
    @Transactional
    @Override
    public ResumeDto updateResumeById(Long resumeId, UpdateResumeDto resumeDto) {
        Resume existingResume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new NotFoundException("Error: Resume not found"));

        resumeDto.getPresentation().ifPresent(existingResume::setPresentation);
        resumeDto.getResumeName().ifPresent(existingResume::setResumeName);

        resumeDto.getProfile().ifPresent(profileDto -> {
            Profile profile = profileDtoMapper.dtoToEntity(profileDto);
            existingResume.setProfile(profile);
        });

        resumeDto.getExperiences().ifPresent(experiences -> {
            experiences.forEach(experienceDto -> {
                experienceDto.setResumeId(existingResume.getId());
                experienceService.createExperience(experienceDto);
            });
        });

        resumeDto.getLanguages().ifPresent(languages -> {
            languages.forEach(languageDto -> {
                languageDto.setResumeId(existingResume.getId());
                languageService.createLanguage(languageDto);
            });
        });

        Resume updatedResume = resumeRepository.save(existingResume);
        return mapper.entityToDto(updatedResume);
    }

    @Transactional
    @Override
    public void deleteResumeById(Long id) {
        List<Education> educations = educationRepository.findAllByResumeId(id);
        if(educations  != null)
            educations.forEach(educationRepository::delete);
        List<Experience> experiences = experienceRepository.findAllByResumeId(id);
        if(experiences != null)
            experiences.forEach(experienceRepository::delete);
        List<Language> languages = languageRepository.findAllByResumeId(id);
        if(languages != null)
            languages.forEach(languageRepository::delete);
        profileService.deleteProfileByResumeId(id);
        resumeRepository.deleteById(id);
    }
}
