package com.codestates.preproject001.member.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberPatchDto {
    @NotSpace(message = "이름은 공백일 수 없습니다.")
    private String name;
    private String location;
    private String title;
    private String aboutMe;
}