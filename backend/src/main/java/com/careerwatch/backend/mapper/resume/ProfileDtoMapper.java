package com.careerwatch.backend.mapper.resume;

import com.careerwatch.backend.dto.resume.profile.ProfileDto;
import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.entity.Profile;
import com.careerwatch.backend.entity.Resume;
import com.careerwatch.backend.entity.Social;
import com.careerwatch.backend.repository.ProfileRepository;
import com.careerwatch.backend.repository.ResumeRepository;
import com.careerwatch.backend.repository.SocialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ProfileDtoMapper {

    private final SocialDtoMapper socialDtoMapper;
    private final SocialRepository socialRepository;

    public ProfileDto entityToDto (Profile profile) {

        List<SocialDto> socialDtos = new ArrayList<>();
        if (profile.getId() != null) {
            List<Social> socials = socialRepository.findAllByProfileId(profile.getId());
            for (Social social : socials){
                socialDtos.add(socialDtoMapper.entityToDto(social));
            }
        }

        return ProfileDto.builder()
                .id(profile.getId())
                .fullName(profile.getFullName())
                .title(profile.getTitle())
                .email(profile.getEmail())
                .phone(profile.getPhone())
                .location(profile.getLocation())
                .imgResume(profile.getImgResume())
                .socials(socialDtos)
                .build();
    }

    public Profile dtoToEntity(ProfileDto profileDto) {

        return Profile.builder()
                .fullName(profileDto.getFullName())
                .title(profileDto.getTitle())
                .email(profileDto.getEmail())
                .phone(profileDto.getPhone())
                .location(profileDto.getLocation())
                .imgResume(profileDto.getImgResume())
                .build();
    }


}
