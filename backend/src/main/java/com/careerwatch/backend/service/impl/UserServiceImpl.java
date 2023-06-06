package com.careerwatch.backend.service.impl;

import com.careerwatch.backend.dto.user.UpdateUserDto;
import com.careerwatch.backend.dto.user.UserDto;
import com.careerwatch.backend.dto.user.UserIdDto;
import com.careerwatch.backend.entity.User;
import com.careerwatch.backend.exception.NotFoundException;
import com.careerwatch.backend.mapper.user.UserDtoMapper;
import com.careerwatch.backend.repository.UserRepository;
import com.careerwatch.backend.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserDtoMapper mapper;

    @Transactional
    @Override
    public List<UserDto> getAllUsers() {
        return mapper.entitiesToDtoList(userRepository.findAll());
    }

    @Transactional
    @Override
    public UserDto getUserById(Long id) {
        return mapper.entityToDto(userRepository.findById(id)
                .orElseThrow(()-> new NotFoundException("Error: user " + id + " not found")));
    }

    @Override
    public UserIdDto getUserIdByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(()->
                new NotFoundException("Error: user not found"));

        return UserIdDto.builder()
                .id(user.getId())
                .build();
    }

    @Transactional
    @Override
    public UserDto updateUser(Long id, UpdateUserDto userDto) {
        User user = userRepository.findById(id).orElseThrow(()->
                new NotFoundException("Error: user not found"));

        userDto.getEmail().ifPresent(user::setEmail);
        userDto.getProfileImage().ifPresent(user::setProfileImage);

        userRepository.save(user);
        return mapper.entityToDto(user);
    }

    @Transactional
    @Override
    public void deleteUser(Long userId) {
        if (userRepository.existsById(userId))
            throw new NotFoundException("Error: user " + userId + " not found");
        userRepository.deleteById(userId);
    }
}
