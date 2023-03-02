package com.codestates.preproject001.answer.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
public class AnswerMyPageDto { // 마이페이지 answer 목록에는 답변한 질문의 제목, id, 작성시간이 있길래 이거만 따로 받아오기 위함..
    @ApiModelProperty(required=true)
    private long answerId;
    private String title;
    private LocalDateTime createdAt;
    private long answerCount;
}
