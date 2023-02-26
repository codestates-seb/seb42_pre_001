
package com.codestates.preproject001.answer.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPatchDto {
    private long answerId;
    private long memberId;
    @NotSpace(message = "내용을 입력해주세요.")
    private String content;
}
