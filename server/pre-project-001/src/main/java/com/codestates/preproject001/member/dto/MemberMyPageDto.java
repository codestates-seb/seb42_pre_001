package com.codestates.preproject001.member.dto;

import com.codestates.preproject001.answer.dto.AnswerMyPageDto;
import com.codestates.preproject001.answer.dto.AnswerResponseDto;
import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.question.dto.QuestionResponseDto;
import com.codestates.preproject001.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MemberMyPageDto {
    private long memberId;
    private String email;
    private String name;
    private List<QuestionResponseDto> questions;
    private List<AnswerMyPageDto> answers;
}
