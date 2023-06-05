package com.careerwatch.backend.mapper.user;

import com.careerwatch.backend.dto.user.RegisterRequestDto;
import com.careerwatch.backend.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.mindrot.jbcrypt.BCrypt;

@Component
@RequiredArgsConstructor
public class RegisterDtoMapper{

    public User requestToEntity(RegisterRequestDto registerRequestDto){

        return User.builder()
                .email(registerRequestDto.getEmail().toLowerCase())
                .password(BCrypt.hashpw(registerRequestDto.getPassword(), BCrypt.gensalt()))
                .build();
    }
}