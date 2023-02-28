package com.codestates.preproject001.question.dto;

import com.codestates.preproject001.dto.LoginMemberDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class QuestionPostResponseDto {
    private long questionId;
    private LoginMemberDto loginMember;

}
