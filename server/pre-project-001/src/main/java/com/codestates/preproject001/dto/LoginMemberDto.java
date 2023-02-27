package com.codestates.preproject001.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginMemberDto {
    private long memberId;
    private String name;
}
