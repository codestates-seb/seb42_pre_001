package com.codestates.preproject001.answer.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class AnswerDeleteDto {
    @ApiModelProperty(required=true)
    private long memberId;
}
