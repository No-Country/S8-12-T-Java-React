package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.language.LanguageDto;
import com.careerwatch.backend.dto.resume.language.UpdateLanguageDto;
import com.careerwatch.backend.service.LanguageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/languages")
public class LanguageController {
    private final LanguageService languageService;

    @PostMapping
    public ResponseEntity<LanguageDto> createLanguage(@RequestBody LanguageDto languageDto) throws JsonProcessingException {
        return ResponseEntity.ok(languageService.createLanguage(languageDto));
    }
    @GetMapping("/{languageId}")
    public ResponseEntity<LanguageDto> getLanguageById(@PathVariable Long languageId) throws JsonProcessingException  {
        return ResponseEntity.ok(languageService.getLanguageById(languageId));
    }
    @PutMapping("/{languageId}")
    public ResponseEntity<LanguageDto> updateLanguage(@PathVariable Long languageId, @RequestBody UpdateLanguageDto languageDto) throws JsonProcessingException {
        return ResponseEntity.ok(languageService.updateLanguageById(languageId, languageDto));
    }
    @DeleteMapping("/{languageId}")
    public ResponseEntity<Void> deleteLanguage(@PathVariable Long languageId) throws JsonProcessingException {
        languageService.deleteLanguageById(languageId);
        return ResponseEntity.noContent().build();
    }
}
