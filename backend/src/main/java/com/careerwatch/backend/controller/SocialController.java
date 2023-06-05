package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.social.SocialDto;
import com.careerwatch.backend.dto.resume.social.UpdateSocialDto;
import com.careerwatch.backend.service.SocialService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/socials")
@CrossOrigin(origins = "*")
public class SocialController {

    private final SocialService socialService;

    
    @PostMapping
    public ResponseEntity<SocialDto> createSocial(@PathVariable Long resumeId,
                                                  @Valid @RequestBody SocialDto socialDto) throws JsonProcessingException {
        return ResponseEntity.ok(socialService.createSocial(resumeId, socialDto));
    }
    @GetMapping("/{socialId}")
    public ResponseEntity<SocialDto> getSocialById(@PathVariable Long socialId) throws JsonProcessingException  {
        return ResponseEntity.ok(socialService.getSocialById(socialId));
    }
    @PutMapping("/{socialId}")
    public ResponseEntity<SocialDto> updateSocial(@PathVariable Long socialId,
                                                  @Valid @RequestBody UpdateSocialDto socialDto) throws JsonProcessingException {
        return ResponseEntity.ok(socialService.updateSocialById(socialId, socialDto));
    }
    @DeleteMapping("/{socialId}")
    public ResponseEntity<Void> deleteSocial(@PathVariable Long socialId) throws JsonProcessingException {
        socialService.deleteSocialById(socialId);
        return ResponseEntity.noContent().build();
    }
    
}
