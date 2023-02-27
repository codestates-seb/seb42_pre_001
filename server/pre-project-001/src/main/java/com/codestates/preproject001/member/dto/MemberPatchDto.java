package com.codestates.preproject001.member.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Getter
@AllArgsConstructor
public class MemberPatchDto {
    @ApiModelProperty(required=true)
    @NotSpace(message = "이름은 공백일 수 없습니다.")
    private String name;
    @ApiModelProperty
    @NotSpace
    private String location;
    @ApiModelProperty
    @NotSpace
    private String title;
    @ApiModelProperty
    @NotSpace
    private String aboutMe;
}