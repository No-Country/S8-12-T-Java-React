package com.careerwatch.backend.mapper.resume;

import com.careerwatch.backend.dto.resume.experience.ExperienceDto;
import com.careerwatch.backend.entity.Experience;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ExperienceDtoMapper {

    public ExperienceDto entityToDto (Experience experience){
        return ExperienceDto.builder()
                .id(experience.getId())
                .resumeId(experience.getResumeId())
                .title(experience.getTitle())
                .company(experience.getCompany())
                .dateStart(experience.getDateStart())
                .dateEnd(experience.getDateEnd())
                .description(experience.getDescription())
                .build();
    }

    public Experience dtoToEntity (ExperienceDto experienceDto){
        return Experience.builder()
                .resumeId(experienceDto.getResumeId())
                .title(experienceDto.getTitle())
                .company(experienceDto.getCompany())
                .dateStart(experienceDto.getDateStart())
                .dateEnd(experienceDto.getDateEnd())
                .description(experienceDto.getDescription())
                .build();
    }
    public List<ExperienceDto> entitiesToDtoList(List<Experience> experiences) {
        return experiences.stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }

    public List<Experience> dtoListToEntities(List<ExperienceDto> experienceDtos) {
        return experienceDtos.stream()
                .map(this::dtoToEntity)
                .collect(Collectors.toList());
    }
}
