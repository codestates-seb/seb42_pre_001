package com.codestates.preproject001.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class MemberPostDto {

    @NotBlank(message = "이메일을 입력해주세요.")
    @Email(message = "이메일 양식을 맞춰 입력해주세요.")
    private String email;

    @Pattern(regexp = "^[A-Za-z0-9$@!%*#?&]{8,}$",
            message = "비밀번호는 최소 8자 이상이어야 합니다. 비밀번호는 영어 대소문자와 특수문자($,@,!,%,*,#,?,&)로 이루어져야 합니다.")
    private String password;

    @NotBlank(message = "이름을 입력해주세요.")
    private String name;


}
