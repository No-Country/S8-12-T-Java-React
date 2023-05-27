package com.careerwatch.backend.mapper.resume;

import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.entity.Social;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SocialDtoMapper {
    public SocialDto entityToDto(Social social){
        return SocialDto.builder()
                .id(social.getId())
                .profileId(social.getProfileId())
                .title(social.getTitle())
                .link(social.getLink())
                .build();
    }

    public Social dtoToEntity (SocialDto socialDto){
        return Social.builder()
                .title(socialDto.getTitle())
                .link(socialDto.getLink())
                .build();
    }

    // entitiesToDtos
    public List<SocialDto> entitiesToDtoList(List<Social> socials) {
        return socials.stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }
}
