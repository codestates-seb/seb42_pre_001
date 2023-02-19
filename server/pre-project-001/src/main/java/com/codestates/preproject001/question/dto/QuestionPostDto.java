package com.codestates.preproject001.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class QuestionPostDto {
    @Positive
    private long mId;

    @NotBlank
    private String title;

    @NotBlank
    private String content;


}
