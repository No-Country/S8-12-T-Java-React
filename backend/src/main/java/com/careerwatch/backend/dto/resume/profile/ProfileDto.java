package com.careerwatch.backend.dto.resume.profile;
import com.careerwatch.backend.dto.resume.social.SocialDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ProfileDto {
    private Long id;
    private String fullName;
    private String title;
    private String email;
    private String phone;
    private String location;
    private String imgResume;
    private List<SocialDto> socials;
}
