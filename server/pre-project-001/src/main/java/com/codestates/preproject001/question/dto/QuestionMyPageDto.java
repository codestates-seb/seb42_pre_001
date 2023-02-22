package com.codestates.preproject001.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionMyPageDto {
    private long questionId;
    private String title;
    private LocalDateTime createdAt;
    private long answerCount;
}
