
package com.codestates.preproject001.answer.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Data
@Getter
@Setter
public class AnswerPatchDto {
    @ApiModelProperty(required=true)
    private long answerId;
    @ApiModelProperty(required=true)
    private long memberId;
    @NotSpace(message = "내용을 입력해주세요.")
    @Size(min=20)
    @ApiModelProperty
    private String content;
}
