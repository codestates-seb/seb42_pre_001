package com.codestates.preproject001.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member exists"),
    POST_NOTENOUGH_LENGTH(406, "Not Enough Length"), // 질문 내용 20자 이하일 때
    QUESTION_NOT_FOUND(404, "Question Not Found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
