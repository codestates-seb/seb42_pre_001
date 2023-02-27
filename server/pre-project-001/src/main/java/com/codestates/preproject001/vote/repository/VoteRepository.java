package com.codestates.preproject001.vote.repository;

import com.codestates.preproject001.vote.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findByQuestionAndMember(@Param("questionId") long questionId, @Param("memberId") long memberId);
    Optional<Vote> findByAnswerAndMember(@Param("answerId")long answerId, @Param("memberId") long memberId);
}