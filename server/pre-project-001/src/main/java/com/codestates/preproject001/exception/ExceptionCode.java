package com.codestates.preproject001.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member exists"),
    POST_NOTENOUGH_LENGTH(406, "Not Enough Length"), // 질문 내용 20자 이하일 때
    ANSWER_EXISTS(409, "Answer Exists"), // 질문에 답변이 이미 달려있을 때
    REQUEST_NOT_ALLOWED(401, "Request Not Allowed"), // CRUD 요청에 권한이 없을때
    NUMBER_OF_TAGS_NOT_CORRECT(406, "Number Of Tags Doesn't Correct"), // 태그 갯수 조건을 어겼을 때
    QUESTION_NOT_FOUND(404, "Question Not Found"),
    ANSWER_NOT_FOUND(404, "Answer Not Found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
