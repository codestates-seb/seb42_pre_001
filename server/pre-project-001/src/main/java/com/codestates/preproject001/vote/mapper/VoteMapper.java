package com.codestates.preproject001.vote.mapper;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.entity.Question;
import com.codestates.preproject001.vote.dto.AnswerVoteDto;
import com.codestates.preproject001.vote.dto.QuestionVoteDto;
import com.codestates.preproject001.vote.entity.Vote;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface VoteMapper {
    default Vote questionVoteDtoToVote(QuestionVoteDto questionVoteDto){
        if(questionVoteDto == null) return null;
        Vote vote = new Vote();
        Member member = new Member();
        member.setMemberId(questionVoteDto.getMemberId());
        Question question = new Question();
        question.setQuestionId(questionVoteDto.getQuestionId());
        vote.setMember(member);
        vote.setQuestion(question);
        vote.setVoteType(Vote.VoteType.QUESTION);
        vote.setAnswer(null);
        return vote;
    }
    default Vote answerVoteDtoToVote(AnswerVoteDto answerVoteDto){
        if(answerVoteDto == null) return null;
        Vote vote = new Vote();
        Member member = new Member();
        member.setMemberId(answerVoteDto.getMemberId());
        Answer answer = new Answer();
        answer.setAnswerId(answerVoteDto.getAnswerId());
        vote.setMember(member);
        vote.setAnswer(answer);
        vote.setVoteType(Vote.VoteType.ANSWER);
        vote.setQuestion(null);
        return vote;
    }
}
