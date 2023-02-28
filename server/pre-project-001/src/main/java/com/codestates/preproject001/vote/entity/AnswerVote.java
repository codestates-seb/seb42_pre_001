package com.codestates.preproject001.vote.entity;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class AnswerVote implements Vote{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerVoteId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @Column(nullable = false)
    @Enumerated(value=EnumType.STRING)
    private VoteStatus voteStatus;

    public enum VoteStatus {
        PLUS(1),
        MINUS(-1);

        @Getter
        private final int status;

        VoteStatus(int status){
            this.status = status;
        }
    }
}
