package com.codestates.preproject001.vote.service;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.exception.BusinessLogicException;
import com.codestates.preproject001.exception.ExceptionCode;
import com.codestates.preproject001.member.repository.MemberRepository;
import com.codestates.preproject001.vote.entity.AnswerVote;
import com.codestates.preproject001.vote.entity.QuestionVote;
import com.codestates.preproject001.vote.entity.Vote;
import com.codestates.preproject001.vote.repository.AnswerVoteRepository;
import com.codestates.preproject001.vote.repository.QuestionVoteRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class VoteService {
    private final QuestionVoteRepository questionVoteRepository;
    private final AnswerVoteRepository answerVoteRepository;
    private final MemberRepository memberRepository;

    public VoteService(QuestionVoteRepository questionVoteRepository,
                       AnswerVoteRepository answerVoteRepository,
                       MemberRepository memberRepository) {
        this.questionVoteRepository = questionVoteRepository;
        this.answerVoteRepository = answerVoteRepository;
        this.memberRepository = memberRepository;
    }

    //해당 질문/답변에서 내 투표찾기
    public int findMyQuestionVote(long questionId, long memberId) {
        //question일때
        QuestionVote myVote = questionVoteRepository.
                findByQuestionQuestionIdAndMemberMemberId(questionId, memberId).orElse(null);
        if (myVote == null) return 0;
        return myVote.getVoteStatus() == QuestionVote.VoteStatus.PLUS ? 1 : -1;
    }


    public int findMyAnswerVote(long answerId, long memberId){
        //answer일때
        AnswerVote myVote = answerVoteRepository.
                findByAnswerAnswerIdAndMemberMemberId(answerId, memberId).orElse(null);
        if(myVote==null) return 0;
        return myVote.getVoteStatus() == AnswerVote.VoteStatus.PLUS ? 1 : -1;
    }

    public void questionVoteUp(long questionId, long memberId, QuestionVote questionVote) {
        QuestionVote myVote = questionVoteRepository.
                findByQuestionQuestionIdAndMemberMemberId(questionId,memberId).orElse(null);
        if(myVote==null){
            questionVoteRepository.save(questionVote);
        } else if(myVote.getVoteStatus()== QuestionVote.VoteStatus.PLUS){
            questionVoteRepository.delete(myVote);
        } else if(myVote.getVoteStatus()== QuestionVote.VoteStatus.MINUS){
            myVote.setVoteStatus(QuestionVote.VoteStatus.PLUS);
            questionVoteRepository.save(myVote);
        }
    }

    public void answerVoteUp(long answerId, long memberId, AnswerVote answerVote) {
        AnswerVote myVote = answerVoteRepository.
                findByAnswerAnswerIdAndMemberMemberId(answerId,memberId).orElse(null);
        if(myVote==null){
            answerVoteRepository.save(answerVote);
        } else if(myVote.getVoteStatus()== AnswerVote.VoteStatus.PLUS){
            answerVoteRepository.delete(myVote);
        } else if(myVote.getVoteStatus()== AnswerVote.VoteStatus.MINUS){
            myVote.setVoteStatus(AnswerVote.VoteStatus.PLUS);
            answerVoteRepository.save(myVote);
        }
    }

    public void questionVoteDown(long questionId, long memberId, QuestionVote questionVote){
        QuestionVote myVote = questionVoteRepository.
                findByQuestionQuestionIdAndMemberMemberId(questionId,memberId).orElse(null);
        if(myVote==null){
            questionVoteRepository.save(questionVote);
        } else if(myVote.getVoteStatus()== QuestionVote.VoteStatus.PLUS){
            myVote.setVoteStatus(QuestionVote.VoteStatus.MINUS);
            questionVoteRepository.save(myVote);
        } else if(myVote.getVoteStatus()== QuestionVote.VoteStatus.MINUS){
            questionVoteRepository.delete(myVote);
        }
    }

    public void answerVoteDown(long answerId, long memberId, AnswerVote answerVote){
        AnswerVote myVote = answerVoteRepository.
                findByAnswerAnswerIdAndMemberMemberId(answerId,memberId).orElse(null);
        if(myVote==null){
            answerVoteRepository.save(answerVote);
        } else if(myVote.getVoteStatus()== AnswerVote.VoteStatus.PLUS){
            myVote.setVoteStatus(AnswerVote.VoteStatus.MINUS);
            answerVoteRepository.save(myVote);
        } else if(myVote.getVoteStatus()== AnswerVote.VoteStatus.MINUS){
            answerVoteRepository.delete(myVote);
        }
    }

    public void verifyNotMyVote(long memberId1, long memberId2) {
        if(memberId1==memberId2)
            new BusinessLogicException(ExceptionCode.CANNOT_VOTE_TO_ME);
    }

}