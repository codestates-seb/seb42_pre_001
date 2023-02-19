package com.codestates.preproject001.question.controller;


import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.question.dto.QuestionPatchDto;
import com.codestates.preproject001.question.dto.QuestionPostDto;
import com.codestates.preproject001.question.mapper.QuestionMapper;
import com.codestates.preproject001.question.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("") // url 미정으로 비워두기
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final MemberService memberService;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, MemberService memberService) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        // 서비스쪽 구현하면서 진행 예정

        return null;
    }

    @PatchMapping("") // url 미정으로 비워두기
    public ResponseEntity patchQuestion(@PathVariable("") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        // 서비스쪽 구현하면서 진행 예정

        return null;
    }

    @GetMapping("") // url 미정으로 비워두기 / 질문 조회
    public ResponseEntity getQuestion(@PathVariable("") @Positive long questionId) {
        // 서비스쪽 구현하면서 진행 예정

        return null;
    }

    @GetMapping // 질문 목록,
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        // 서비스쪽 구현하면서 진행 예정

        return null;
    }

    @DeleteMapping("") // url 미정으로 비워두기 / 질문 삭제
    public ResponseEntity deleteQuestion(@PathVariable("") @Positive long questionId) {
        // 서비스쪽 구현하면서 진행 예정

        return null;
    }


}