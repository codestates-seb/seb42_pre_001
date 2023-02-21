package com.codestates.preproject001.question.mapper;

import com.codestates.preproject001.answer.dto.AnswerResponseDto;
import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.dto.QuestionPatchDto;
import com.codestates.preproject001.question.dto.QuestionPostDto;
import com.codestates.preproject001.question.dto.QuestionResponseDto;
import com.codestates.preproject001.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper  {
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if (questionPostDto == null ) {
            return null;
        }
        Question question = new Question();

        Member member = new Member();
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        return question;
    }
    default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if (questionPatchDto == null ) {
            return null;
        }
        Question question = new Question();
        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setContent(questionPatchDto.getContent());
        question.setTitle(questionPatchDto.getTitle());

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if (question == null) {
            return null;
        }
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setAnswered(question.isAnswered());
        questionResponseDto.setTitle(questionResponseDto.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());
        questionResponseDto.setMemberId(question.getMember().getMemberId());
        questionResponseDto.setMemberName(question.getMember().getName());
        List<Answer> answerList = question.getAnswers();
        List<AnswerResponseDto> answerResponseList = answerList.stream().map(answer ->{
            AnswerResponseDto answerResponseDto = new AnswerResponseDto();
            answerResponseDto.setAnswerId(answer.getAnswerId());
            answerResponseDto.setQuestionId(question.getQuestionId());
            answerResponseDto.setMId(answer.getMember().getMemberId());
            answerResponseDto.setContent(answer.getContent());
            answerResponseDto.setCreatedAt(answer.getCreatedAt());
            answerResponseDto.setModifiedAt(answer.getModifiedAt());
            return answerResponseDto;
        }).collect(Collectors.toList());

        questionResponseDto.setAnswers(answerResponseList);

        return questionResponseDto;
    }


}
