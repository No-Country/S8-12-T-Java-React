package com.careerwatch.backend.dto.user;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthenticationRequestDto {
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotBlank(message = "email can't be empty")
    String email;
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
    @NotBlank(message = "password can't be empty")
    String password;
}
