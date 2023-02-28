package com.codestates.preproject001.answer.controller;

import com.codestates.preproject001.answer.dto.AnswerDeleteDto;
import com.codestates.preproject001.answer.dto.AnswerPatchDto;
import com.codestates.preproject001.answer.dto.AnswerPostDto;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.answer.mapper.AnswerMapper;
import com.codestates.preproject001.answer.service.AnswerService;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.oath.memberDetails.MemberDetails;
import com.codestates.preproject001.question.entity.Question;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Api(tags = "Answer Controller")
@Validated
@RestController
@RequestMapping("/answers")
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;
    private final MemberService memberService;

    public AnswerController(AnswerService answerService, AnswerMapper mapper, MemberService memberService) {
        this.answerService = answerService;
        this.mapper = mapper;
        this.memberService = memberService;
    }

    @ApiOperation(value = "답변작성")
    @PostMapping
    public ResponseEntity postAnswer(@AuthenticationPrincipal MemberDetails memberDetails,
                                     @ApiParam(required = true) @Valid @RequestBody AnswerPostDto answerPostDto) {
        memberService.matchMember(memberDetails.getMemberId(), answerPostDto.getMemberId());
        Member member = memberService.findMember(answerPostDto.getMemberId());
        Question question = answerService.findQuestion(answerPostDto.getQuestionId());
        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);
        answer.addMember(member);
        answer.addQuestion(question);
        answerService.createAnswer(answer);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ApiOperation(value = "답변수정")
    @PatchMapping
    public ResponseEntity patchAnswer(@AuthenticationPrincipal MemberDetails memberDetails,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        memberService.matchMember(memberDetails.getMemberId(), answerPatchDto.getMemberId());
        answerService.memberVerification(answerPatchDto.getMemberId(), answerPatchDto.getAnswerId());
        answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 리스트를 받아오는 게, 답변 리스트를 그냥 받아오는 게 조금 이상한 거 같음..
    // 특정 질문을 검색했을 때 답변 목록이 나오도록 해야 할 거 같은 느낌
//    @GetMapping  //페이지네이션 안하는쪽으로 해보기 -> 안하면 삭제
//    public ResponseEntity getAnswers(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Answer> answers = answerService.findAnswers(page - 1, size);
//        List<Answer> content = answers.getContent();
//
//        return new ResponseEntity<>(new MultiResponseDto<>(mapper.answersToAnswerResponseDtos(content), answers), HttpStatus.OK);
//    }

    @ApiOperation(value = "답변삭제")
    @DeleteMapping
    public ResponseEntity deleteAnswer(@AuthenticationPrincipal MemberDetails memberDetails,
                                       @RequestBody AnswerDeleteDto answerDeleteDto) {
        memberService.matchMember(memberDetails.getMemberId(), answerDeleteDto.getMemberId());
        answerService.memberVerification(answerDeleteDto.getMemberId(), answerDeleteDto.getAnswerId());
        answerService.deleteAnswer(answerDeleteDto.getAnswerId());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
