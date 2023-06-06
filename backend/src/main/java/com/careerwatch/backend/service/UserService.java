package com.careerwatch.backend.service;

import com.careerwatch.backend.dto.user.UpdateUserDto;
import com.careerwatch.backend.dto.user.UserDto;
import com.careerwatch.backend.dto.user.UserIdDto;

import java.util.List;

public interface UserService {
    List<UserDto> getAllUsers();
    UserDto getUserById (Long id);
    UserIdDto getUserIdByEmail (String email);
    UserDto updateUser(Long id, UpdateUserDto userDto);
    void deleteUser (Long id);
}
