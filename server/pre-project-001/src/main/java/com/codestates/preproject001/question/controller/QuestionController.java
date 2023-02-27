package com.codestates.preproject001.question.controller;


import com.codestates.preproject001.answer.dto.AnswerResponseDto;
import com.codestates.preproject001.dto.LoginMemberDto;
import com.codestates.preproject001.dto.MultiResponseDto;
import com.codestates.preproject001.dto.SingleResponseDto;
import com.codestates.preproject001.exception.BusinessLogicException;
import com.codestates.preproject001.exception.ExceptionCode;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.oath.memberDetails.MemberDetails;
import com.codestates.preproject001.question.dto.*;
import com.codestates.preproject001.question.entity.Question;
import com.codestates.preproject001.question.mapper.QuestionMapper;
import com.codestates.preproject001.question.service.QuestionService;
import com.codestates.preproject001.vote.entity.Vote;
import com.codestates.preproject001.vote.service.VoteService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Api(tags = "Question Controller")
@Slf4j
@Validated
@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final MemberService memberService;
    private final VoteService voteService;

    public QuestionController(QuestionService questionService, QuestionMapper mapper,
                              MemberService memberService, VoteService voteService) {
        this.questionService = questionService;
        this.mapper = mapper;
        this.memberService = memberService;
        this.voteService = voteService;
    }

    @ApiOperation(value = "질문작성")
    @PostMapping    // 질문 작성
    public ResponseEntity postQuestion(@AuthenticationPrincipal MemberDetails memberDetails,
                                       @Valid @RequestBody QuestionPostDto questionPostDto) {
        memberService.matchMember(memberDetails.getMemberId(), questionPostDto.getMemberId());
        Member member = memberService.findMember(memberDetails.getMemberId());
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        question.addMember(member);
        Question createdQuestion = questionService.createQuestion(question);
        LoginMemberDto loginMemberDto = new LoginMemberDto(member.getMemberId(), member.getName());
        QuestionPostResponseDto questionPostResponseDto =
                new QuestionPostResponseDto(createdQuestion.getQuestionId(), loginMemberDto);
        return new ResponseEntity<>(
                new SingleResponseDto<>(questionPostResponseDto), HttpStatus.CREATED);
    }

    @ApiOperation(value = "질문수정")
    @PatchMapping // 질문 수정
    public ResponseEntity patchQuestion(@AuthenticationPrincipal MemberDetails memberDetails,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        memberService.matchMember(memberDetails.getMemberId(), questionPatchDto.getMemberId());
        questionService.memberVerification(questionPatchDto.getMemberId(), questionPatchDto.getQuestionId());
        questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ApiOperation(value = "질문조회")
    @GetMapping("/{question-id}") // 질문 조회
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId,
                                      @AuthenticationPrincipal MemberDetails memberDetails) {
        Question question = questionService.findQuestion(questionId);
        QuestionResponseDto response = mapper.questionToQuestionResponseDto(question);

        if(memberDetails!=null) {
            response.setMyVote(voteService.verifyMyVote
                    (Vote.VoteType.QUESTION, questionId, memberDetails.getMemberId()));

            for (AnswerResponseDto answerResponseDto : response.getAnswers()){
                answerResponseDto.setMyVote(voteService.verifyMyVote
                        (Vote.VoteType.ANSWER, answerResponseDto.getAnswerId(), memberDetails.getMemberId()));
            }

            LoginMemberDto loginMemberDto = new LoginMemberDto(memberDetails.getMemberId(), memberDetails.getName());
            return new ResponseEntity(new SingleResponseDto<>(response, loginMemberDto), HttpStatus.OK);
        }
        return new ResponseEntity(new SingleResponseDto(response), HttpStatus.OK);
    }

    @ApiOperation(value = "질문목록(홈)")
    @GetMapping // 질문 목록
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
            @AuthenticationPrincipal MemberDetails memberDetails,
            @Positive @RequestParam int size) {
        Page<Question> questions = questionService.findQuestions(page - 1, size);
        List<Question> content = questions.getContent();
        List<QuestionResponseDto> questionResponseDtos = mapper.questionsToQuestionResponseDtos(content);
        if(memberDetails != null){
            LoginMemberDto loginMemberDto = new LoginMemberDto(memberDetails.getMemberId(), memberDetails.getName());
            return new ResponseEntity(
                    new MultiResponseDto(questionResponseDtos, questions, loginMemberDto), HttpStatus.OK);
        }

        return new ResponseEntity(new MultiResponseDto(questionResponseDtos, questions), HttpStatus.OK);
    }

    @ApiOperation(value = "질문삭제")
    @DeleteMapping // 질문 삭제
    public ResponseEntity deleteQuestion(@AuthenticationPrincipal MemberDetails memberDetails,
                                         @RequestBody QuestionDeleteDto questionDeleteDto) {
        memberService.matchMember(memberDetails.getMemberId(), questionDeleteDto.getMemberId());
        questionService.memberVerification(questionDeleteDto.getMemberId(), questionDeleteDto.getQuestionId());
        questionService.deleteQuestion(questionDeleteDto.getQuestionId());
        return new ResponseEntity(HttpStatus.NO_CONTENT);

    }

}