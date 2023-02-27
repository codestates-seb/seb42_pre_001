package com.codestates.preproject001.vote.service;

import com.codestates.preproject001.member.repository.MemberRepository;
import com.codestates.preproject001.vote.entity.Vote;
import com.codestates.preproject001.vote.repository.VoteRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class VoteService {
    private final VoteRepository voteRepository;
    private final MemberRepository memberRepository;

    public VoteService(VoteRepository voteRepository,
                       MemberRepository memberRepository) {
        this.voteRepository = voteRepository;
        this.memberRepository = memberRepository;
    }

    //해당 질문/답변에서 내 투표찾기
    public int verifyMyVote(Vote.VoteType voteType, long questionIdOrAnswerId, long memberId){
        //question일때
        if(voteType == Vote.VoteType.QUESTION){
            Vote myVote = voteRepository.
                    findByQuestionAndMember(questionIdOrAnswerId, memberId)
                            .orElse(null);
            if(myVote==null) return 0;
            return myVote.getVoteStatus() == Vote.VoteStatus.PLUS ? 1 : -1;
        }
        //answer일때
        if(voteType == Vote.VoteType.ANSWER){
            Vote myVote = voteRepository.
                    findByAnswerAndMember(questionIdOrAnswerId, memberId).orElse(null);
            if(myVote==null) return 0;
            return myVote.getVoteStatus() == Vote.VoteStatus.PLUS ? 1 : -1;
        }
        return 0;
    }


    public void voteUp(long questionIdOrAnswerId, long memberId,Vote vote) {
        Vote myVote = null;
        if(vote.getVoteType()== Vote.VoteType.QUESTION){
            myVote = voteRepository.
                    findByQuestionAndMember(questionIdOrAnswerId,memberId).orElse(null);
        } else if (vote.getVoteType()== Vote.VoteType.ANSWER){
            myVote = voteRepository.
                    findByAnswerAndMember(questionIdOrAnswerId,memberId).orElse(null);
        }
        if(myVote==null){
            voteRepository.save(vote);
        } else if(myVote.getVoteStatus()== Vote.VoteStatus.PLUS){
            voteRepository.delete(myVote);
        } else if(myVote.getVoteStatus()== Vote.VoteStatus.MINUS){
            myVote.setVoteStatus(Vote.VoteStatus.PLUS);
            voteRepository.save(myVote);
        }
    }

    public void voteDown(long questionIdOrAnswerId, long memberId, Vote vote){
        Vote myVote = null;
        if(vote.getVoteType()== Vote.VoteType.QUESTION){
            myVote = voteRepository.
                    findByQuestionAndMember(questionIdOrAnswerId,memberId).orElse(null);
        } else if (vote.getVoteType()== Vote.VoteType.ANSWER){
            myVote = voteRepository.
                    findByAnswerAndMember(questionIdOrAnswerId,memberId).orElse(null);
        }
        if(myVote==null){
            voteRepository.save(vote);
        } else if(myVote.getVoteStatus()== Vote.VoteStatus.PLUS){
            myVote.setVoteStatus(Vote.VoteStatus.MINUS);
            voteRepository.save(myVote);
        } else if(myVote.getVoteStatus()== Vote.VoteStatus.MINUS){
            voteRepository.delete(myVote);
        }
    }

}