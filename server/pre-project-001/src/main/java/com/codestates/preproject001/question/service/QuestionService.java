package com.codestates.preproject001.question.service;

import com.codestates.preproject001.exception.BussinessLogicException;
import com.codestates.preproject001.exception.ExceptionCode;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.question.entity.Question;
import com.codestates.preproject001.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class QuestionService {
    private final MemberService memberService;
    private final QuestionRepository questionRepository;

    public QuestionService(MemberService memberService, QuestionRepository questionRepository) {
        this.memberService = memberService;
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        Member member = memberService.findVerifiedMember(question.getMember().getMemberId());

        verifyRule(question); // 질문 규격? 에 맞는지?
        question.setMember(member);
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId()); // 존재하는 Question 인가?

        Optional.ofNullable(question.getTitle()) //제목 수정
                .ifPresent(questionTitle->findQuestion.setTitle(questionTitle));

        Optional.ofNullable(question.getContent()) //내용 수정
                .ifPresent(questionContent->findQuestion.setContent(questionContent));
        // 단순히 질문을 수정하는 로직정도인데, 질문과 질문 작성자가 맞는지 확인하는 로직.. 을 생각하고 구현해야할 듯
        // 추가로 expecting 부분도 아직 추가할지 안 정했는데, 추가하게 된다면 위에처럼 하나 추가해서 넣어야 할 듯
        verifyRule(findQuestion); // 수정한 질문 내용 규칙 확인
        
        Question savedQuestion = questionRepository.save(findQuestion);

        return savedQuestion;
    }

    public void deleteQuestion(Long questionId) {
        Question question = findVerifiedQuestion(questionId);

        // 작성자와 question id 일치하는지 확인하는 로직이 필요한지?

        questionRepository.delete(question);
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) { // 질문 목록 페이지네이션으로
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    public void verifyRule(Question question) {
        String content = question.getContent();
        if (content.length() <= 20) {
            throw new BussinessLogicException(ExceptionCode.POST_NOTENOUGH_LENGTH);
        }
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(
                () -> new BussinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return question;
    }
}
