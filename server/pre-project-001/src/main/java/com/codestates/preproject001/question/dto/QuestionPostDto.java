package com.codestates.preproject001.question.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
public class QuestionPostDto {
    @ApiModelProperty(required=true)
    private long memberId;
    @ApiModelProperty(required=true)
    @NotBlank(message = "제목을 입력해주세요.")
    private String title;
    @ApiModelProperty(required=true)
    @NotBlank(message = "내용을 입력해주세요.")
    @Size(min=20)
    private String content;
    @ApiModelProperty
    private List<String> tags;
}
