package com.codestates.preproject001.member.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import com.codestates.preproject001.answer.dto.AnswerMyPageDto;
import com.codestates.preproject001.answer.dto.AnswerResponseDto;
import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.question.dto.QuestionMyPageDto;
import com.codestates.preproject001.question.dto.QuestionResponseDto;
import com.codestates.preproject001.question.entity.Question;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MemberMyPageDto {
    private long memberId;
    private String email;
    private String name;
    private List<QuestionMyPageDto> questions;
    private List<AnswerMyPageDto> answers;
    private String location;
    private String title;
    private String aboutMe;
}
