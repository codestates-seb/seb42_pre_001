package com.codestates.preproject001.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {
    private long memberId;
    private long questionId;
    @NotBlank
    private String content;

}
