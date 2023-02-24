package com.codestates.preproject001;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class PreProject001Application {

	public static void main(String[] args) {
		SpringApplication.run(PreProject001Application.class, args);
	}
}
