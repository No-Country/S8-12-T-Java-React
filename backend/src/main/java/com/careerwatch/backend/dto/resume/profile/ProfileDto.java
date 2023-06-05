package com.careerwatch.backend.dto.resume.profile;
import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
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
    @Pattern(regexp = "^(?!\\s*$).+", message = "Full name must not be blank")
    private String fullName;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Profile title must not be blank")
    private String title;
    @Pattern(regexp = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$", message = "Email direction isn't valid")
    private String email;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Phone must not be blank")
    private String phone;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Location must not be blank")
    private String location;
    @Pattern(regexp = "^https?://[\\w.-]+(/\\S+)*$", message = "Image URL is not valid")
    private String imgResume;
    private List<SocialDto> socials;
}
