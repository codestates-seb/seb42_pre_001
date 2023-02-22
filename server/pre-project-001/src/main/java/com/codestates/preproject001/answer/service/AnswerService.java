package com.codestates.preproject001.answer.service;

import com.codestates.preproject001.answer.entity.Answer;
import com.codestates.preproject001.answer.repository.AnswerRepository;
import com.codestates.preproject001.exception.BusinessLogicException;
import com.codestates.preproject001.exception.ExceptionCode;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.question.entity.Question;
import com.codestates.preproject001.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class AnswerService {
    private final MemberService memberService;
    private final QuestionService questionService;
    private final AnswerRepository answerRepository;

    public AnswerService(MemberService memberService, QuestionService questionService, AnswerRepository answerRepository) {
        this.memberService = memberService;
        this.questionService = questionService;
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        Member member = memberService.findVerifiedMember(answer.getMember().getMemberId());
        Question question = questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId());
        answer.addMember(member);
        answer.addQuestion(question);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        Answer savedAnswer = answerRepository.save(findAnswer);

        return savedAnswer;

    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        answerRepository.delete(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    // getAnswers 수정하게 되면 findAnswers 부분도 수정해야함.
    public Page<Answer> findAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size, Sort.by("answerId").descending()));
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

    public Member findMember(long memberId) {
        return memberService.findMember(memberId);
    }

    public Question findQuestion(long questionId) {
        return questionService.findQuestion(questionId);
    }

    public void memberVerification(long memberId, long answerId) {
        long answeredMemberId = findAnswer(answerId).getMember().getMemberId();
        if(memberId != answeredMemberId) {
            throw new BusinessLogicException(ExceptionCode.REQUEST_NOT_ALLOWED);
        }
    }
}
