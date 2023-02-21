package com.codestates.preproject001.question.mapper;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.dto.QuestionPatchDto;
import com.codestates.preproject001.question.dto.QuestionPostDto;
import com.codestates.preproject001.question.dto.QuestionResponseDto;
import com.codestates.preproject001.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper  {
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if (questionPostDto == null ) {
            return null;
        }
        Question question = new Question();

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
        List<Answer> answerList = question.getAnswers();
        // List<AnswerResponseDto> answerResponseList = answerList.stream().map(answer ->{}).collect(Collectors.toList());
        // answerResponseDto 만들면 { } 안에 채워넣기...

        return questionResponseDto;
    }


}
