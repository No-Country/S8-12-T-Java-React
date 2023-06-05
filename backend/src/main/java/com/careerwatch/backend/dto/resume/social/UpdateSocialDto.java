package com.careerwatch.backend.dto.resume.social;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
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
    @Pattern(regexp = "^(?!\\s*$).+", message = "Social title not be blank")
    private String title;
    @Pattern(regexp = "^https?://[\\w.-]+(/\\S+)*$", message = "Social link is not valid")
    private String link;

    public Optional<String> getTitle() {
        return Optional.ofNullable(title);
    }

    public Optional<String> getLink() {
        return Optional.ofNullable(link);
    }

}
