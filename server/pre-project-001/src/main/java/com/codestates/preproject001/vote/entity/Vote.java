package com.codestates.preproject001.vote.entity;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.entity.Question;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @Column(nullable = false)
    @Enumerated(value=EnumType.STRING)
    private VoteType voteType;

    @Column(nullable = false)
    @Enumerated(value=EnumType.STRING)
    private VoteStatus voteStatus;

    public enum VoteType {
        QUESTION("질문"),
        ANSWER("답변");
        @Getter
        private final String type;

        VoteType(String type){
            this.type = type;
        }
    }

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
