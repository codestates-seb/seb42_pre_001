package com.codestates.preproject001.question.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class QuestionDeleteDto {
    @ApiModelProperty(required=true)
    private long questionId;
    @ApiModelProperty(required=true)
    private long memberId;
}
