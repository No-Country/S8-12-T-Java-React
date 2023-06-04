package com.careerwatch.backend.service.impl;

import com.careerwatch.backend.dto.user.AuthenticationRequestDto;
import com.careerwatch.backend.dto.user.RegisterRequestDto;
import com.careerwatch.backend.dto.user.RegisterResponseDto;
import com.careerwatch.backend.entity.User;
import com.careerwatch.backend.exception.AlreadyExistException;
import com.careerwatch.backend.exception.InvalidPasswordException;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.security.JwtService;
import com.careerwatch.backend.mapper.user.RegisterDtoMapper;
import com.careerwatch.backend.repository.UserRepository;
import com.careerwatch.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    @Autowired
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final RegisterDtoMapper mapper;
    @Override
    public RegisterResponseDto register(RegisterRequestDto request) {
        if (userRepository.existsByEmail(request.getEmail().toLowerCase())){
            throw new AlreadyExistException("Error: Email already taken");
        }
        User newUser = mapper.requestToEntity(request);

        userRepository.save(newUser);
        String jwtToken = jwtService.generateToken(newUser);
        RegisterResponseDto registerResponse = new RegisterResponseDto();
        registerResponse.setToken(jwtToken);
        return registerResponse;
    }

    @Override
    public RegisterResponseDto authenticate(AuthenticationRequestDto request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new NotFoundException("Error: Username not found"));
        boolean passwordMatches = BCrypt.checkpw(request.getPassword(), user.getPassword());
        if (!passwordMatches) {
            throw new InvalidPasswordException("Error: Invalid password");
        }
        String jwtToken = jwtService.generateToken(user);
        return RegisterResponseDto.builder()
                .token(jwtToken).build();
    }
}
