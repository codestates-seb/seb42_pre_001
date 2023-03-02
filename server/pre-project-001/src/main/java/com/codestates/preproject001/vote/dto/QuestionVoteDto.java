package com.codestates.preproject001.vote.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class QuestionVoteDto {
    @ApiModelProperty(required=true)
    private long memberId;
    @ApiModelProperty(required=true)
    private long questionId;
}
