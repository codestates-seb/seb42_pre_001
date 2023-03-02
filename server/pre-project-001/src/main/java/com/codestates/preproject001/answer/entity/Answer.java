package com.codestates.preproject001.answer.entity;

import com.codestates.preproject001.audit.auditable;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.entity.Question;
import com.codestates.preproject001.vote.entity.AnswerVote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Answer extends auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    //length 추가?
    @Column(nullable = false, columnDefinition = "MEDIUMTEXT")
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL)
    private List<AnswerVote> answerVotes = new ArrayList<>();

    public void addMember(Member member) {
        this.member = member;
        if(!member.getAnswers().contains(this)) {
            member.getAnswers().add(this);
        }
    }

    public void addQuestion(Question question) {
        this.question = question;
        if(!question.getAnswers().contains(this)) {
            question.getAnswers().add(this);
        }
    }
}
