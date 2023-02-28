package com.codestates.preproject001.question.mapper;

import com.codestates.preproject001.answer.dto.AnswerResponseDto;
import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.dto.QuestionPatchDto;
import com.codestates.preproject001.question.dto.QuestionPostDto;
import com.codestates.preproject001.question.dto.QuestionResponseDto;
import com.codestates.preproject001.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper  {
    //answers, myVote, content는 뺐다 -> question 리스트를 띄우는 화면에 필요가 없다.
    default List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        if(questions == null) return null;
        List<QuestionResponseDto> questionResponseDtos = questions.stream().map(question -> {
            QuestionResponseDto questionResponseDto = new QuestionResponseDto();
            questionResponseDto.setQuestionId(question.getQuestionId());
            questionResponseDto.setMemberId(question.getMember().getMemberId());
            questionResponseDto.setMemberName(question.getMember().getName());
            questionResponseDto.setTags(question.getTags());
            questionResponseDto.setCreatedAt(question.getCreatedAt());
            questionResponseDto.setModifiedAt(question.getModifiedAt());
            questionResponseDto.setTitle(question.getTitle());
            questionResponseDto.setView(question.getView());
            questionResponseDto.setVoteCount(question.getQuestionVotes().size());
            questionResponseDto.setAnswerCount(question.getAnswers().size());
            return questionResponseDto;
        }).collect(Collectors.toList());
        return questionResponseDtos;
    }

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if (questionPostDto == null ) {
            return null;
        }
        Question question = new Question();

        Member member = new Member();

        member.setMemberId(questionPostDto.getMemberId());
        question.addMember(member);

        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setTags(questionPostDto.getTags());

        return question;
    }
    default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if (questionPatchDto == null ) {
            return null;
        }
        Question question = new Question();
        Member member = new Member();

        member.setMemberId(questionPatchDto.getMemberId());
        question.addMember(member);

        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setContent(questionPatchDto.getContent());
        question.setTitle(questionPatchDto.getTitle());
        question.setTags(questionPatchDto.getTags());

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if (question == null) {
            return null;
        }
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setMemberName(question.getMember().getName());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());
        questionResponseDto.setMemberId(question.getMember().getMemberId());
        questionResponseDto.setView(question.getView());
        questionResponseDto.setVoteCount(question.getQuestionVotes().size());
        List<Answer> answerList = question.getAnswers();
        List<AnswerResponseDto> answerResponseList = answerList.stream().map(answer ->{
            AnswerResponseDto answerResponseDto = new AnswerResponseDto();
            answerResponseDto.setAnswerId(answer.getAnswerId());
            answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
            answerResponseDto.setMemberId(answer.getMember().getMemberId());
            answerResponseDto.setMemberName(answer.getMember().getName());
            answerResponseDto.setContent(answer.getContent());
            answerResponseDto.setCreatedAt(answer.getCreatedAt());
            answerResponseDto.setModifiedAt(answer.getModifiedAt());
            answerResponseDto.setVoteCount(answer.getAnswerVotes().size());
            return answerResponseDto;
        }).collect(Collectors.toList());
        questionResponseDto.setAnswers(answerResponseList);
        questionResponseDto.setTags(question.getTags());
        return questionResponseDto;
    }


}
