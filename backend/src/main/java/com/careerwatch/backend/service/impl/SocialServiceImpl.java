package com.careerwatch.backend.service.impl;

import com.careerwatch.backend.entity.Profile;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.dto.resume.social.UpdateSocialDto;
import com.careerwatch.backend.entity.Social;
import com.careerwatch.backend.mapper.resume.SocialDtoMapper;
import com.careerwatch.backend.repository.SocialRepository;
import com.careerwatch.backend.service.SocialService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SocialServiceImpl implements SocialService {
    
    private final SocialRepository socialRepository;
    private final SocialDtoMapper mapper;
    private final ProfileRepository profileRepository;


    @Override
    public SocialDto createSocial(SocialDto socialDto) {
        Social social = mapper.dtoToEntity(socialDto);
        socialRepository.save(social);
        return mapper.entityToDto(social);
    }


    @Override
    public List<SocialDto> getAllSocialsByResumeId(Long resumeId) {
        Profile profile = profileRepository.findByResumeId(resumeId)
                .orElseThrow(()-> new NotFoundException("Error: resume with id " + resumeId + " not found"));
        List<SocialDto> socialDtoList = mapper.entitiesToDtoList(profile.getSocials());

        return socialDtoList;
    }
    
    @Override
    public SocialDto getSocialById(Long socialId) {
        Social social = socialRepository.findById(socialId).orElseThrow(()->
                new NotFoundException("Error: social with id " + socialId + " not found"));

        return mapper.entityToDto(social);
    }
    
    @Override
    public SocialDto updateSocialById(Long socialId, UpdateSocialDto socialDto) {
        Social social = socialRepository.findById(socialId).orElseThrow(()->
                new NotFoundException("Error: social with id " + socialId + " not found"));
        
        socialDto.getTitle().ifPresent(social::setTitle);
        socialDto.getLink().ifPresent(social::setLink);
        
        socialRepository.save(social);
        return mapper.entityToDto(social);
    }
    
    @Override
    public void deleteSocialById(Long socialId) {
        if (socialRepository.existsById(socialId))
            throw new NotFoundException("Error: social with id " + socialId + " not found");

        socialRepository.deleteById(socialId);
    }
}
