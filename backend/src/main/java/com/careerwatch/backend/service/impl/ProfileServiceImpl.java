package com.careerwatch.backend.service.impl;

import com.careerwatch.backend.dto.resume.profile.ProfileDto;
import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.dto.resume.profile.UpdateProfileDto;
import com.careerwatch.backend.entity.Profile;
import com.careerwatch.backend.entity.Resume;
import com.careerwatch.backend.entity.Social;
import com.careerwatch.backend.exception.CantBeEmptyException;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.mapper.resume.ProfileDtoMapper;
import com.careerwatch.backend.mapper.resume.SocialDtoMapper;
import com.careerwatch.backend.repository.ProfileRepository;
import com.careerwatch.backend.repository.ResumeRepository;
import com.careerwatch.backend.repository.SocialRepository;
import com.careerwatch.backend.service.ProfileService;
import com.careerwatch.backend.service.SocialService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService{

    private final ResumeRepository resumeRepository;
    private final ProfileDtoMapper mapper;
    private final ProfileRepository profileRepository;
    private final SocialService socialService;
    private final SocialRepository socialRepository;

    @Transactional
    @Override
    public ProfileDto getProfileByResumeId(Long resumeId) {
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(()-> new NotFoundException("Error: resume " + resumeId + " not found"));
        return mapper.entityToDto(resume.getProfile());
    }
    @Transactional
    @Override
    public ProfileDto updateProfileByResumeId(Long resumeId, UpdateProfileDto profileDto) {
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(()-> new NotFoundException("Error: resume " + resumeId + " not found"));

        profileDto.getFullName().ifPresent(resume.getProfile()::setFullName);
        profileDto.getTitle().ifPresent(resume.getProfile()::setTitle);
        profileDto.getEmail().ifPresent(resume.getProfile()::setEmail);
        profileDto.getPhone().ifPresent(resume.getProfile()::setPhone);
        profileDto.getLocation().ifPresent(resume.getProfile()::setLocation);
        profileDto.getImgResume().ifPresent(resume.getProfile()::setImgResume);

        if (profileDto.getSocials() != null){
            for (SocialDto socialDto : profileDto.getSocials()) {
                socialService.createSocial(resume.getProfile().getId(), socialDto);
            }
        }

        profileRepository.save(resume.getProfile());
        return mapper.entityToDto(resume.getProfile());
    }

    @Transactional
    @Override
    public void deleteProfileByResumeId(Long resumeId) {
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(()-> new NotFoundException("Error: resume " + resumeId + " not found"));
        List<Social> socials = socialRepository.findAllByProfileId(resume.getProfile().getId());
        socials.forEach(social -> socialService.deleteSocialById(social.getId()));
        profileRepository.delete(resume.getProfile());
    }
}
