package com.careerwatch.backend.mapper.resume;

import com.careerwatch.backend.dto.resume.SocialDto;
import com.careerwatch.backend.entity.Social;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SocialDtoMapper {
    public SocialDto entityToDto(Social social){
        return SocialDto.builder()
                .id(social.getId())
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

}