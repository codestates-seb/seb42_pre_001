package com.codestates.preproject001.vote.repository;

import com.codestates.preproject001.vote.entity.AnswerVote;
import com.codestates.preproject001.vote.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
    Optional<QuestionVote> findByQuestionQuestionIdAndMemberMemberId(long questionId, long memberId);
}