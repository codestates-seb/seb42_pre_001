package com.codestates.preproject001.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),  // 존재하지 않는 회원입니다.
    DELETED_MEMBER(404, "Deleted Member"), // 삭제된 회원입니다.
    UNAUTHORIZED_MEMBER(404, "Unauthorized Member"), // 이메일 인증을 하지 않은 회원입니다.
    MEMBER_EXISTS(409, "Member exists"),    // 이미 존재하는 회원입니다. (회원가입시) -> [비밀번호 찾기]
    ANSWER_EXISTS(409, "Answer Exists"), // 답변이 존재하는 질문입니다. (질문 삭제시)
    NUMBER_OF_TAGS_NOT_CORRECT(406, "Number Of Tags Doesn't Correct"), // 질문 태그 갯수 조건을 어겼을 때 (1~5개)
    QUESTION_NOT_FOUND(404, "Question Not Found"),  // 존재하지 않는 질문입니다.
    ANSWER_NOT_FOUND(404, "Answer Not Found"),  // 존재하지 않는 답변입니다.
    MEMBER_NOT_MATCH(404, "MemberId Is Different With TokenId"),    // 회원 정보가 올바르지 않습니다. (토큰에 담긴 memberId, 바디에 담기 memberId 일치하지 않을 때)
    NOT_AUTHOR(404,"Only The Author Can Request It");   // 질문(답변) 작성자와 (토근에 담긴) memberId와 일치하지 않을 때

    @Getter
    private final int status;

    @Getter
    private final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
