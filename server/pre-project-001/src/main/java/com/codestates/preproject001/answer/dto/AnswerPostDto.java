package com.codestates.preproject001.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {
    private long mId; // memberId, post에서 어떤 member인지, 어떤 question인지 확인하는게 둘다 필요한가 잘 모르겠음..

    @NotBlank
    private String content;

}
