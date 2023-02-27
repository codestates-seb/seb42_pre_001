package com.codestates.preproject001.answer.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private long questionId;
    private long memberId;
    private String memberName;
    private String content;
    private LocalDateTime createdAt; // 작성 시간
    private LocalDateTime modifiedAt; // 수정 시간
    private int voteCount;
    private int myVote;
}
