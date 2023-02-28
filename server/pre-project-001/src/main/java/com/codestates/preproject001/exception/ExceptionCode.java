package com.codestates.preproject001.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    DELETED_MEMBER(404, "Deleted Member"), // 삭제한 멤버를 조회했을 때
    UNAUTHORIZED_MEMBER(404, "Unauthorized Member"), // 이메일 인증을 안한 멤버를 조회했을 때
    MEMBER_EXISTS(409, "Member exists"),
    POST_NOTENOUGH_LENGTH(406, "Not Enough Length"), // 질문 내용 20자 이하일 때
    ANSWER_EXISTS(409, "Answer Exists"), // 질문에 답변이 이미 달려있을 때
    REQUEST_NOT_ALLOWED(401, "Request Not Allowed"), // CRUD 요청에 권한이 없을때
    NUMBER_OF_TAGS_NOT_CORRECT(406, "Number Of Tags Doesn't Correct"), // 태그 갯수 조건을 어겼을 때
    QUESTION_NOT_FOUND(404, "Question Not Found"),
    ANSWER_NOT_FOUND(404, "Answer Not Found"),
    MEMBER_NOT_MATCH(404, "MemberId Is Different With TokenId"),
    CANNOT_VOTE_TO_ME(404,"Can't Vote to my QnA");

    @Getter
    private final int status;

    @Getter
    private final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
