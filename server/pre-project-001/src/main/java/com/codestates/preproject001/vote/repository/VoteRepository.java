package com.codestates.preproject001.vote.repository;

import com.codestates.preproject001.vote.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findByQuestionAndMember(long questionId, long memberId);
    Optional<Vote> findByAnswerAndMember(long answerId, long memberId);
}