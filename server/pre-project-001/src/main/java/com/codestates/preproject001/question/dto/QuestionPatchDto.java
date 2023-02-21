package com.codestates.preproject001.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class QuestionPatchDto {
    private long questionId;
    private long memberId;
    private String title;
    private String content;

}
