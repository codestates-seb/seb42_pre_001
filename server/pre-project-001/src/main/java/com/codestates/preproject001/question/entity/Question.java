package com.codestates.preproject001.question.entity;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.audit.auditable;
import com.codestates.preproject001.member.entity.Member;
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
public class Question extends auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "MEDIUMTEXT")
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    private int view = 0;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

    public void addMember(Member member) {
        this.member = member;
        if (!member.getQuestions().contains(this)) {
            member.getQuestions().add(this);
        }
    }

    public void addAnswer(Answer answer) {
        answers.add(answer);
        if (answer.getQuestion() != this) {
            answer.addQuestion(this);
        }
    }

    public void plusView() {
        view++;
    }

}
