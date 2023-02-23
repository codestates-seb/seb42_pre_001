package com.codestates.preproject001.member.entity;


import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    //이하 컬럼들 length 설정? 필요
    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Enumerated(value=EnumType.STRING)
    @Column(nullable = false)
    private MemberStatus memberStatus;

    @Column
    private String mailKey;

    public enum MemberStatus {
        UNAUTHORIZED_USER("이메일이 인증되지 않은 회원"),
        ACTIVE_USER("활동중인 회원"),
        DELETED_USER("삭제된 회원");
        @Getter
        private String status;
        MemberStatus(String status){
            this.status = status;
        }
    }

    public Member(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
    public Member(Map<String,Object> claims){
        this.email = claims.get("username").toString();
    }

    @OneToMany(mappedBy = "member")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    public void addAnswer(Answer answer) {
        answers.add(answer);
        if(answer.getMember() != this) {
            answer.addMember(this);
        }
    }

    public void addQuestion(Question question) {
        questions.add(question);
        if(question.getMember() != this) {
            question.addMember(this);
        }
    }

    // (완료) JPA 설정 및 question, answer 클래스 미구현으로 매핑 및 필드 미설정?
    // (완료) List<Question> / List<Answer> 추후 구현

}
