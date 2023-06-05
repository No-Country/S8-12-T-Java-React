package com.careerwatch.backend.service;

import com.careerwatch.backend.dto.user.AuthenticationRequestDto;
import com.careerwatch.backend.dto.user.RegisterRequestDto;
import com.careerwatch.backend.dto.user.RegisterResponseDto;

public interface AuthService {
    RegisterResponseDto register (RegisterRequestDto registerDto);
    RegisterResponseDto authenticate (AuthenticationRequestDto registerDto);
}
