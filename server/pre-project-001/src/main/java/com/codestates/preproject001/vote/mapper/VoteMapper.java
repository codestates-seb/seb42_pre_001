package com.codestates.preproject001.vote.mapper;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.entity.Question;
import com.codestates.preproject001.vote.dto.AnswerVoteDto;
import com.codestates.preproject001.vote.dto.QuestionVoteDto;
import com.codestates.preproject001.vote.entity.AnswerVote;
import com.codestates.preproject001.vote.entity.QuestionVote;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface VoteMapper {
    default QuestionVote questionVoteDtoToQuesitonVote(QuestionVoteDto questionVoteDto){
        if(questionVoteDto == null) return null;
        QuestionVote questionVote = new QuestionVote();
        Member member = new Member();
        member.setMemberId(questionVoteDto.getMemberId());
        Question question = new Question();
        question.setQuestionId(questionVoteDto.getQuestionId());
        questionVote.setMember(member);
        questionVote.setQuestion(question);
        return questionVote;
    }
    default AnswerVote answerVoteDtoToAnswerVote(AnswerVoteDto answerVoteDto){
        if(answerVoteDto == null) return null;
        AnswerVote answerVote = new AnswerVote();
        Member member = new Member();
        member.setMemberId(answerVoteDto.getMemberId());
        Answer answer = new Answer();
        answer.setAnswerId(answerVoteDto.getAnswerId());
        answerVote.setMember(member);
        answerVote.setAnswer(answer);
        return answerVote;
    }
}
