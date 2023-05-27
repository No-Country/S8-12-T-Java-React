package com.careerwatch.backend.mapper.resume;

import com.careerwatch.backend.dto.resume.education.EducationDto;
import com.careerwatch.backend.entity.Education;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static java.util.Collections.emptyList;

@Component
@RequiredArgsConstructor
public class EducationDtoMapper {

    public EducationDto entityToDto(Education education){
        return EducationDto.builder()
                .id(education.getId())
                .resumeId(education.getResumeId())
                .title(education.getTitle())
                .institution(education.getInstitution())
                .dateStart(education.getDateStart())
                .dateEnd(education.getDateEnd())
                .description(education.getDescription())
                .build();
    }

    public Education dtoToEntity(EducationDto educationDto) {
        return Education.builder()
                .resumeId(educationDto.getResumeId())
                .title(educationDto.getTitle())
                .institution(educationDto.getInstitution())
                .dateStart(educationDto.getDateStart())
                .dateEnd(educationDto.getDateEnd())
                .description(educationDto.getDescription())
                .build();
    }

    public List<EducationDto> entitiesToDtoList(List<Education> educations){
        List<EducationDto> listEducationsDto = new ArrayList<>(emptyList());

        for (Education education : educations) {
            listEducationsDto.add(entityToDto(education));
        }
        return listEducationsDto;
    }

    public List<Education> dtoListToEntities(List<EducationDto> educationDtos){
        List<Education> listEducations = new ArrayList<>(emptyList());

        for (EducationDto education : educationDtos) {
            listEducations.add(dtoToEntity(education));
        }
        return listEducations;
    }
}
