package com.codestates.preproject001.question.repository;

import com.codestates.preproject001.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
