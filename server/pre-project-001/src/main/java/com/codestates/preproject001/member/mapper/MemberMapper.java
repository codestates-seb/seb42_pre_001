package com.codestates.preproject001.member.mapper;

import com.codestates.preproject001.answer.dto.AnswerMyPageDto;
import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.dto.MemberMyPageDto;
import com.codestates.preproject001.member.dto.MemberPatchDto;
import com.codestates.preproject001.member.dto.MemberPostDto;
import com.codestates.preproject001.member.dto.MemberResponseDto;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.dto.QuestionMyPageDto;
import com.codestates.preproject001.question.dto.QuestionResponseDto;
import com.codestates.preproject001.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);

    default MemberMyPageDto memberToMemberMyPageDto(Member member) { // 완료
        if (member == null) {
            return null;
        }
        MemberMyPageDto memberMyPageDto = new MemberMyPageDto();
        memberMyPageDto.setMemberId(member.getMemberId());
        memberMyPageDto.setEmail(member.getEmail());
        memberMyPageDto.setName(member.getName());
        memberMyPageDto.setTitle(member.getTitle());
        memberMyPageDto.setLocation(member.getLocation());
        memberMyPageDto.setAboutMe(member.getAboutMe());
        List<Answer> answerList = member.getAnswers(); // 답변 리스트
        List<AnswerMyPageDto> answerMyPageDtoList = answerList.stream().map(answer ->{
            AnswerMyPageDto answerMyPageDto = new AnswerMyPageDto();
            answerMyPageDto.setQuestionId(answer.getQuestion().getQuestionId());
            answerMyPageDto.setTitle(answer.getQuestion().getTitle());
            answerMyPageDto.setCreatedAt(answer.getCreatedAt());
            answerMyPageDto.setAnswerCount(answer.getQuestion().getAnswers().size());
            return answerMyPageDto;
        }).collect(Collectors.toList());
        memberMyPageDto.setAnswers(answerMyPageDtoList);

        List<Question> questionList = member.getQuestions(); // 질문 리스트
        List<QuestionMyPageDto> questionMyPageDtoList = questionList.stream().map(question ->{
            QuestionMyPageDto questionMyPageDto = new QuestionMyPageDto();
            questionMyPageDto.setQuestionId(question.getQuestionId());
            questionMyPageDto.setTitle(question.getTitle());
            questionMyPageDto.setCreatedAt(question.getCreatedAt());
            questionMyPageDto.setAnswerCount(question.getAnswers().size());
            return questionMyPageDto;
        }).collect(Collectors.toList());
        memberMyPageDto.setQuestions(questionMyPageDtoList);

        return memberMyPageDto;
    }
}
