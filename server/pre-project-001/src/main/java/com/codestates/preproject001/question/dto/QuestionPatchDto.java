package com.codestates.preproject001.question.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionPatchDto {
    private long questionId;
    private long memberId;
    @NotSpace(message = "제목을 입력해주세요.")
    private String title;
    @NotSpace(message = "내용을 입력해주세요.")
    private String content;
    private List<String> tags;
}
