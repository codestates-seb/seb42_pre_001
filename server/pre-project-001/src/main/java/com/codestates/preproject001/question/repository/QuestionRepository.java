package com.codestates.preproject001.question.repository;

import com.codestates.preproject001.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
