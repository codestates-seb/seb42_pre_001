package com.codestates.preproject001.answer.controller;

import com.codestates.preproject001.answer.dto.AnswerPatchDto;
import com.codestates.preproject001.answer.dto.AnswerPostDto;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.answer.mapper.AnswerMapper;
import com.codestates.preproject001.answer.service.AnswerService;
import com.codestates.preproject001.dto.MultiResponseDto;
import com.codestates.preproject001.dto.SingleResponseDto;
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
@RequestMapping("") // url 미정으로 비워두기
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }

    @PatchMapping("/{}")
    public ResponseEntity patchAnswer(@PathVariable("") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }

    // 리스트를 받아오는 게, 답변 리스트를 그냥 받아오는 게 조금 이상한 거 같음..
    // 특정 질문을 검색했을 때 답변 목록이 나오도록 해야 할 거 같은 느낌
    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Answer> answers = answerService.findAnswers(page - 1, size);
        List<Answer> content = answers.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.answersToAnswerResponseDtos(content), answers), HttpStatus.OK);
    }

    @DeleteMapping("/{}")
    public ResponseEntity deleteAnswer(@PathVariable("") @Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




}
