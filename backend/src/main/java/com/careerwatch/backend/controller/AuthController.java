package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.user.AuthenticationRequestDto;
import com.careerwatch.backend.dto.user.RegisterRequestDto;
import com.careerwatch.backend.dto.user.RegisterResponseDto;
import com.careerwatch.backend.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    @Operation(summary = "Register a new user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "JWT token returned",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = AuthController.class)) }),
            @ApiResponse(responseCode = "400", description = """
                      Possible Responses:

                    - Email is required
                    - Email direction isn't valid
                    - Password is required
                    - Password must contain at least 8 characters including letters, numbers, spaces and commas
                    """,
                    content = @Content)})
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody
                                          @Valid RegisterRequestDto request) throws IOException {
        RegisterResponseDto registerResponse = authService.register(request);
        return new ResponseEntity<>(registerResponse, HttpStatus.OK);
    }

    @Operation(summary = "Authenticate a user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "JWT token returned",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = AuthController.class)) }),
            @ApiResponse(responseCode = "400", description = """
                      Possible Responses:

                    - email can't be empty
                    - Password can't be empty
                    """,
                    content = @Content)})
    @PostMapping("/authenticate")
    public ResponseEntity<?> AuthUser(@RequestBody
                                          @Valid AuthenticationRequestDto request) throws IOException {
        RegisterResponseDto registerResponse = authService.authenticate(request);
        return new ResponseEntity<>(registerResponse, HttpStatus.OK);
    }

}