package com.codestates.preproject001.oath;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000","http://localhost:8080")
                .allowedMethods(
                        HttpMethod.GET.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PATCH.name(),
                        HttpMethod.DELETE.name(),
                        HttpMethod.OPTIONS.name()
                )
//                .allowedHeaders("Vary","Origin","Access-Control-Allow-Methods","Access-Control-Allow-Credentials","X-AUTH-TOKEN","Authorization","Refresh")
                .allowedHeaders("*")
//                .exposedHeaders("Access-Control-Allow-Origin","Access-Control-Allow-Methods","Access-Control-Allow-Credentials","X-AUTH-TOKEN","Authorization","Refresh")
                .exposedHeaders("Authorization", "Refresh")
                .allowCredentials(true);
    }
}