package com.codestates.preproject001.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPatchDto {
    private long answerId;
    private long memberId;
    @NotBlank
    private String content;
}
