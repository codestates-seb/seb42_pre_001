package com.codestates.preproject001.question.dto;

import com.codestates.preproject001.answer.dto.AnswerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;
    private long memberId;
    private String memberName;
    private List<AnswerResponseDto> answers;
    private LocalDateTime createdAt; // 작성 시간
    private LocalDateTime modifiedAt; // 수정 시간
    private String title;
    private String content;
    private long view;

}
