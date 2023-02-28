package com.codestates.preproject001.member.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
@AllArgsConstructor
public class MemberPatchDto {
    @ApiModelProperty(required=true)
    @NotSpace(message = "이름은 공백일 수 없습니다.")
    private String name;
    @ApiModelProperty
    @NotSpace(message = "위치를 입력해주세요.")
    private String location;
    @ApiModelProperty
    @NotSpace(message = "직함을 입력해주세요")
    private String title;
    @ApiModelProperty
    @NotSpace(message = "자기소개를 입력해주세요")
    private String aboutMe;
}