package com.careerwatch.backend.dto.resume.social;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UpdateSocialDto {

    private String title;
    private String link;

    public Optional<String> getTitle() {
        return Optional.ofNullable(title);
    }

    public Optional<String> getLink() {
        return Optional.ofNullable(link);
    }

}
