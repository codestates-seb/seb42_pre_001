package com.codestates.preproject001.member.entity;

import io.jsonwebtoken.Claims;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Map;

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

    public Member(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
    public Member(Map<String,Object> claims){
        this.email = claims.get("username").toString();
    }

    // JPA 설정 및 question, answer 클래스 미구현으로 매핑 및 필드 미설정?
    // List<Question> / List<Answer> 추후 구현

}
