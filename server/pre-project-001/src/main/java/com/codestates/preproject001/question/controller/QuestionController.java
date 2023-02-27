package com.codestates.preproject001.question.controller;

import com.codestates.preproject001.dto.MultiResponseDto;
import com.codestates.preproject001.dto.SingleResponseDto;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.question.dto.QuestionDeleteDto;
import com.codestates.preproject001.question.dto.QuestionPatchDto;
import com.codestates.preproject001.question.dto.QuestionPostDto;
import com.codestates.preproject001.question.entity.Question;
import com.codestates.preproject001.question.mapper.QuestionMapper;
import com.codestates.preproject001.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Validated
@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping // 질문 작성
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {

        Member member = questionService.findMember(questionPostDto.getMemberId());
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        question.addMember(member);
        questionService.createQuestion(question);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}") // 질문 수정
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
            @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionService.memberVerification(questionPatchDto.getMemberId(), questionId);
        questionPatchDto.setQuestionId(questionId);
        questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{question-id}") // 질문 조회
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity(
                new SingleResponseDto(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }

    @GetMapping // 질문 목록
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
            @Positive @RequestParam int size) {
        Page<Question> questions = questionService.findQuestions(page - 1, size);
        List<Question> content = questions.getContent();
        return new ResponseEntity(
                new MultiResponseDto(mapper.questionsToQuestionResponseDtos(content), questions), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}") // 질문 삭제 / 멤버 정보를 어떻게 가져오지?!
    public ResponseEntity deleteQuestion(@RequestBody QuestionDeleteDto questionDeleteDto,
            @PathVariable("question-id") @Positive long questionId) {
        questionService.memberVerification(questionDeleteDto.getMemberId(), questionId);
        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);

    }

}