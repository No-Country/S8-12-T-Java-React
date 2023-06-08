package com.careerwatch.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "APPLICATIONS")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name="RESUME_ID")
    private Long resumeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")

    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "STAGE_ID")
    private Stage stage;

    @Column(name = "POSITION")
    private String position;


    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "APPLICATION_DATE")
    private String applicationDate;

    @Column(name = "COMPANY")
    private String company;

    @PrePersist
    protected void onCreate() {
        this.applicationDate = ZonedDateTime.now(
                ZoneId.of("GMT-3")).format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }
}
