
package com.codestates.preproject001.answer.dto;

import lombok.Getter;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {
    private long memberId;
    @Positive
    private long questionId;
    @NotBlank(message = "내용을 입력해주세요.")
    private String content;

}
