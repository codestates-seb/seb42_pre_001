package com.codestates.preproject001.answer.repository;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
