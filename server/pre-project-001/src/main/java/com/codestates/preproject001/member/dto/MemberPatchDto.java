package com.codestates.preproject001.member.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class MemberPatchDto {
    private String name;
    private String location;
    private String title;
    private String aboutMe;
}