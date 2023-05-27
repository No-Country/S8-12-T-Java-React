package com.careerwatch.backend.entity;

import com.careerwatch.backend.enumeration.ELanguage;
import com.careerwatch.backend.enumeration.ELanguageLevel;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "LANGUAGES")
public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "RESUME_ID")
    private Long resumeId;

    @Column(name = "LANGUAGE")
    private ELanguage language;

    @Column(name = "LANGUAGE_LEVEL")
    private ELanguageLevel languageLevel;
}