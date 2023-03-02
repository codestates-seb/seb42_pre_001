package com.codestates.preproject001.question.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
public class QuestionPatchDto {
    @ApiModelProperty(required=true)
    private long questionId;
    @ApiModelProperty(required=true)
    private long memberId;
    @ApiModelProperty
    @NotSpace(message = "제목을 입력해주세요.")
    private String title;
    @ApiModelProperty
    @NotSpace(message = "내용을 입력해주세요.")
    @Size(min=30)
    private String content;
    @ApiModelProperty
    private List<String> tags;
}
