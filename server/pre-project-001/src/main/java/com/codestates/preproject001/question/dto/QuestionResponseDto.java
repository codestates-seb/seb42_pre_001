package com.codestates.preproject001.question.dto;

import com.codestates.preproject001.answer.dto.AnswerResponseDto;
import com.codestates.preproject001.dto.LoginMemberDto;
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
    private List<String> tags;
    private LocalDateTime createdAt; // 작성 시간
    private LocalDateTime modifiedAt; // 수정 시간
    private String title;
    private String content;
    private int view;
    private int voteCount;
    private int myVote;
    private int answerCount;
}
