package com.careerwatch.backend.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterRequestDto {
    @NotBlank(message = "Email is required")
    @Email(regexp = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$",
            message = "Email direction isn't valid")
    private String email;

    @NotBlank(message = "Password is required")
    @Pattern(regexp = "^([a-zA-Z0-9,ñ]){8,20}$",
            message = "Password must contain at least 8 characters including letters, numbers, spaces and commas")
    private String password;
}