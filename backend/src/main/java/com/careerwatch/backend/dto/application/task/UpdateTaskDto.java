package com.careerwatch.backend.dto.application.task;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UpdateTaskDto {
    @NotNull(message = "Application Id is required")
    private Long applicationId;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Title must not be blank")
    private String title;
    @Pattern(regexp = "^(?!\\s*$).+", message = "Description must not be blank")
    private String description;

    public Optional<Long> getApplicationId(){
        return Optional.ofNullable(this.applicationId);
    }
    public Optional<String> getTitle(){
        return Optional.ofNullable(this.title);
    }
    public Optional<String> getDescription(){
        return Optional.ofNullable(this.description);
    }
}
