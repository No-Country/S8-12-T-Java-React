package com.careerwatch.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "SOCIALS")
public class Social {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "PROFILE_ID")
    private Long profileId;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "LINK")
    private String link;
}
