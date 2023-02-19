package com.codestates.preproject001.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;

    private long mId;
    // private List<AnswerResponseDto> answers; // AnswerResponseDto 만들고 주석 풀기...
    private boolean answered;
    private LocalDateTime createdAt; // 작성 시간
    private LocalDateTime modifiedAt; // 수정 시간
    private String title;
    private String content;
    // private String expecting; // expecting 부분 안 쓰면 삭제 


}
