package com.careerwatch.backend.dto.resume.social;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
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
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotEmpty(message = "Profile Id cant be empty")
    private Long profileId;
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotEmpty(message = "Social title cant be empty")
    private String title;
    @Pattern(regexp = "^https?://[\\w.-]+(/\\S+)*$", message = "Social link is not valid")
    private String link;
}
