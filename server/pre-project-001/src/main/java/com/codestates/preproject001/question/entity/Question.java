package com.codestates.preproject001.question.entity;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    //답변여부 (변수명 이대로 괜찮은가)
    @Column(nullable = false)
    private boolean answered;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();
    public void addMember(Member member) {
        this.member = member;
        if(!member.getQuestions().contains(this)) {
            member.getQuestions().add(this);
        }
    }

    public void addAnswer(Answer answer) {
        answers.add(answer);
        if(answer.getQuestion() != this) {
            answer.addQuestion(this);
        }
    }

}
