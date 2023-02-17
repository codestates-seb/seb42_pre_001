package com.codestates.preproject001.answer.entity;

import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    //length 추가?
    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;


    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

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
