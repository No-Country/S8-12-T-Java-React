package com.careerwatch.backend.dto.resume.social;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class SocialDto {
    private Long id;
    private Long profileId;
    private String title;
    private String link;
}
