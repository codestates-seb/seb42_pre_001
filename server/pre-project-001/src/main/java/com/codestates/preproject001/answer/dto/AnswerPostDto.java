
package com.codestates.preproject001.answer.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Data
@Getter
public class AnswerPostDto {
    @ApiModelProperty(required=true)
    private long memberId;
    @ApiModelProperty(required=true)
    @Positive
    private long questionId;
    @ApiModelProperty(required=true)
    @NotBlank(message = "내용을 입력해주세요.")
    @Size(min=20)
    private String content;

}
