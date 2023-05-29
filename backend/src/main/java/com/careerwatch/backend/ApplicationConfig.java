package com.careerwatch.backend;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    @Bean
    public OpenAPI customOpenAPI(){
        Contact contact = new Contact();

        contact.name("Brayan and Emiliano").email("emilianoescobedo9@gmail.com");

        return new OpenAPI()
                .info(new Info()
                        .title("CareerWatch REST API")
                        .version("0.1")
                        .description("Application to manage your job search. Its allows to create a resume, job applications, and stages and task for those applications. Developed with SpringBoot 3.")
                        .termsOfService("https://swagger.io.terms")
                        .license(new License().name("Apache License, Version 2.0").url("http://www.apache.org/licenses/"))
                        .contact(contact));
    }
}
