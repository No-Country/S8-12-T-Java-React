package com.careerwatch.backend.dto.resume.profile;

import com.careerwatch.backend.dto.resume.social.SocialDto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Optional;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UpdateProfileDto {
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

    public Optional<String> getFullName(){
        return Optional.ofNullable(this.fullName);
    }
    public Optional<String> getTitle(){
        return Optional.ofNullable(this.title);
    }
    public Optional<String> getEmail(){
        return Optional.ofNullable(this.email);
    }
    public Optional<String> getPhone(){
        return Optional.ofNullable(this.phone);
    }
    public Optional<String> getLocation(){
        return Optional.ofNullable(this.location);
    }
    public Optional<String> getImgResume(){
        return Optional.ofNullable(this.imgResume);
    }
}
