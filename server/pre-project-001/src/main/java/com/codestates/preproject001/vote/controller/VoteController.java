package com.codestates.preproject001.vote.controller;

import com.codestates.preproject001.answer.service.AnswerService;
import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.oath.memberDetails.MemberDetails;
import com.codestates.preproject001.question.entity.Question;
import com.codestates.preproject001.question.service.QuestionService;
import com.codestates.preproject001.vote.dto.AnswerVoteDto;
import com.codestates.preproject001.vote.dto.QuestionVoteDto;
import com.codestates.preproject001.vote.entity.AnswerVote;
import com.codestates.preproject001.vote.entity.QuestionVote;
import com.codestates.preproject001.vote.mapper.VoteMapper;
import com.codestates.preproject001.vote.service.VoteService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "Vote Controller")
@RestController
public class VoteController {
    private final MemberService memberService;
    private final QuestionService questionService;
    private final AnswerService answerService;
    private final VoteService voteService;
    private final VoteMapper voteMapper;

    public VoteController(MemberService memberService, QuestionService questionService,
                          AnswerService answerService, VoteService voteService,
                          VoteMapper voteMapper) {
        this.memberService = memberService;
        this.questionService = questionService;
        this.answerService = answerService;
        this.voteService = voteService;
        this.voteMapper = voteMapper;
    }

    @ApiOperation(value = "질문 투표 업버튼")
    @PostMapping("/questions/vote/up")
    public ResponseEntity questionVoteUp(@AuthenticationPrincipal MemberDetails memberDetails,
                                         @RequestBody QuestionVoteDto questionVoteDto){
        voteService.verifyNotMyVote(memberDetails.getMemberId(),questionVoteDto.getMemberId());
        QuestionVote questionVote = voteMapper.questionVoteDtoToQuesitonVote(questionVoteDto);
        questionVote.setVoteStatus(QuestionVote.VoteStatus.PLUS);
        questionService.findQuestion(questionVoteDto.getQuestionId()).getQuestionVotes().add(questionVote);

        voteService.questionVoteUp(questionVote.getQuestion().getQuestionId(), questionVote.getMember().getMemberId(), questionVote);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value = "질문 투표 다운버튼")
    @PostMapping("/questions/vote/down")
    public ResponseEntity questionVoteDown(@AuthenticationPrincipal MemberDetails memberDetails,
                                           @RequestBody QuestionVoteDto questionVoteDto){
        voteService.verifyNotMyVote(memberDetails.getMemberId(),questionVoteDto.getMemberId());
        QuestionVote questionVote = voteMapper.questionVoteDtoToQuesitonVote(questionVoteDto);
        questionVote.setVoteStatus(QuestionVote.VoteStatus.MINUS);
        questionService.findQuestion(questionVoteDto.getQuestionId()).getQuestionVotes().add(questionVote);

        voteService.questionVoteDown(questionVote.getQuestion().getQuestionId(), questionVote.getMember().getMemberId(), questionVote);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value = "답변 투표 업버튼")
    @PostMapping("/answers/vote/up")
    public ResponseEntity answerVoteUp(@AuthenticationPrincipal MemberDetails memberDetails,
                                 @RequestBody AnswerVoteDto answerVoteDto){
        voteService.verifyNotMyVote(memberDetails.getMemberId(),answerVoteDto.getMemberId());
        AnswerVote answerVote = voteMapper.answerVoteDtoToAnswerVote(answerVoteDto);
        answerVote.setVoteStatus(AnswerVote.VoteStatus.PLUS);
        answerService.findAnswer(answerVoteDto.getAnswerId()).getAnswerVotes().add(answerVote);

        voteService.answerVoteUp(answerVote.getAnswer().getAnswerId(), answerVote.getMember().getMemberId(), answerVote);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value = "답변 투표 다운버튼")
    @PostMapping("/answers/vote/down")
    public ResponseEntity answerVoteDown(@AuthenticationPrincipal MemberDetails memberDetails,
                                   @RequestBody AnswerVoteDto answerVoteDto){
        voteService.verifyNotMyVote(memberDetails.getMemberId(),answerVoteDto.getMemberId());
        AnswerVote answerVote = voteMapper.answerVoteDtoToAnswerVote(answerVoteDto);
        answerVote.setVoteStatus(AnswerVote.VoteStatus.MINUS);
        answerService.findAnswer(answerVoteDto.getAnswerId()).getAnswerVotes().add(answerVote);

        voteService.answerVoteDown(answerVote.getAnswer().getAnswerId(), answerVote.getMember().getMemberId(), answerVote);
        return new ResponseEntity(HttpStatus.OK);
    }
}
