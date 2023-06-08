package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.application.application.ApplicationDto;
import com.careerwatch.backend.dto.application.stage.StageDto;
import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.dto.resume.resume.ResumeDto;
import com.careerwatch.backend.dto.user.UpdateUserDto;
import com.careerwatch.backend.dto.user.UserDto;
import com.careerwatch.backend.dto.user.UserIdDto;
import com.careerwatch.backend.service.ApplicationService;
import com.careerwatch.backend.service.ResumeService;
import com.careerwatch.backend.service.StageService;
import com.careerwatch.backend.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;
    private final ResumeService resumeService;
    private final StageService stageService;
    private final ApplicationService applicationService;

    @Operation(summary = "Get all users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of users",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = UserDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = UserDto.class)) }),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content)})
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() throws JsonProcessingException {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @Operation(summary = "Get one user by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "One user",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = UserDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid user Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long userId) throws JsonProcessingException  {
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @Operation(summary = "Get all resumes by user Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of resumes",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResumeDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResumeDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid resume Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})
    @GetMapping("/{userId}/resumes")
    public ResponseEntity<List<ResumeDto>> getAllResumesByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(resumeService.getAllResumesByUserId(userId));
    }

    @Operation(summary = "Get all stages by user Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of all stages",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = StageDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = StageDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid user Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})
    @GetMapping("/{userId}/stages")
    public ResponseEntity<List<StageDto>> getAllStagesById(@PathVariable Long userId) throws JsonProcessingException {
        return ResponseEntity.ok(stageService.getAllStagesByUserId(userId));
    }

    @Operation(summary = "Get all applications by user Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "A list of applications",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ApplicationDto.class)) }),
            @ApiResponse(responseCode = "200", description = "A empty list",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ApplicationDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid user Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})
    @GetMapping("{userId}/applications")
    public ResponseEntity<List<ApplicationDto>> getAllApplicationsByUserId(@PathVariable Long userId) throws JsonProcessingException {
        return ResponseEntity.ok(applicationService.getAllApplicationsByUserId(userId));
    }

    @Operation(summary = "Update one user by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The updated user",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = UserDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Email direction isn't valid
                     - The profile image URL provided is not valid
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long userId,
                                              @RequestBody @Valid UpdateUserDto userDto) throws JsonProcessingException {
        return ResponseEntity.ok(userService.updateUser(userId, userDto));
    }

    @Operation(summary = "Get id of a user by email")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Id of one user",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = UserIdDto.class)) }),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Email direction isn't valid
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})
    @GetMapping("/email/{userEmail}")
    public ResponseEntity<UserIdDto> getUserByEmail(@PathVariable String userEmail) throws JsonProcessingException {
        return ResponseEntity.ok(userService.getUserIdByEmail(userEmail));
    }

    @Operation(summary = "Delete one user by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "No content"),
            @ApiResponse(responseCode = "400", description = """
                     Possible responses:
                     
                     - Invalid user Id
                    """,
                    content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) throws JsonProcessingException {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
}