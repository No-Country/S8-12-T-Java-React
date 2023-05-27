package com.careerwatch.backend.service;

import java.util.List;

import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.dto.resume.social.UpdateSocialDto;

public interface SocialService {
  
    SocialDto createSocial(Long resumeId, SocialDto socialDto);
    List<SocialDto> getAllSocialsByResumeId(Long resumeId);
    SocialDto getSocialById(Long socialId);
    SocialDto updateSocialById(Long socialId, UpdateSocialDto socialDto);
    void deleteSocialById(Long socialId);
    
}
