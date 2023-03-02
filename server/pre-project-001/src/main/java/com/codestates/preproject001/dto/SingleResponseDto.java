package com.codestates.preproject001.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
public class SingleResponseDto<T> {
    private T data;
    private LoginMemberDto loginMember;

    public SingleResponseDto(T data, LoginMemberDto loginMember) {
        this.data = data;
        this.loginMember = loginMember;
    }

    public SingleResponseDto(T data) {
        this.data = data;
        this.loginMember = null;
    }
}