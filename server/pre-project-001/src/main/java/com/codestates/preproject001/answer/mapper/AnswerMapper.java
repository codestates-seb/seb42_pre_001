package com.codestates.preproject001.answer.mapper;

import com.codestates.preproject001.answer.dto.AnswerPatchDto;
import com.codestates.preproject001.answer.dto.AnswerPostDto;
import com.codestates.preproject001.answer.dto.AnswerPostResponseDto;
import com.codestates.preproject001.answer.dto.AnswerResponseDto;
import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default AnswerPostResponseDto answerToAnswerPostResponseDto(Answer answer){
        AnswerPostResponseDto answerPostResponseDto = new AnswerPostResponseDto();
        answerPostResponseDto.setAnswerId(answer.getAnswerId());
        return answerPostResponseDto;
    }
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if (answerPostDto == null) {
            return null;
        }
        Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());

        return answer;
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if (answerPatchDto == null) {
            return null;
        }
        Answer answer = new Answer();
        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setContent(answerPatchDto.getContent());

        return answer;
    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if (answer == null) {
            return null;
        }
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        Member member = new Member(); // memberName 필드 추가

        answerResponseDto.setMemberName(answer.getMember().getName()); // memberName 필드 추가
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
        answerResponseDto.setMemberId(answer.getMember().getMemberId());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setModifiedAt(answer.getModifiedAt());

        return answerResponseDto;
    }

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);

}
