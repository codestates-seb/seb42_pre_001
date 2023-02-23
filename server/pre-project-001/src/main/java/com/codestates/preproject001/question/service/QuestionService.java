package com.codestates.preproject001.question.service;

import com.codestates.preproject001.exception.BusinessLogicException;
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

import java.util.List;
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
        verifyRule(question); // 질문 규격? 에 맞는지?
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId()); // 존재하는 Question 인가?

        Optional.ofNullable(question.getTitle()) //제목 수정
                .ifPresent(questionTitle->findQuestion.setTitle(questionTitle));

        Optional.ofNullable(question.getContent()) //내용 수정
                .ifPresent(questionContent->findQuestion.setContent(questionContent));

        Optional.ofNullable(question.getTags())
                .ifPresent(questionTags -> findQuestion.setTags(questionTags));
        // 추가로 expecting 부분도 아직 추가할지 안 정했는데, 추가하게 된다면 위에처럼 하나 추가해서 넣어야 할 듯
        verifyRule(findQuestion); // 수정한 질문 내용 규칙 확인
        
        return questionRepository.save(findQuestion);

    }

    public void deleteQuestion(Long questionId) {
        Question question = findVerifiedQuestion(questionId);
        noAnswerYet(question);
        questionRepository.delete(question);
    }

    public Question findQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);
        question.plusView();
        return question;
    }

    private void noAnswerYet(Question question) {
        if(question.getAnswers().size() != 0) {
            throw new BusinessLogicException(ExceptionCode.ANSWER_EXISTS);
        }
    }

    public Page<Question> findQuestions(int page, int size) { // 질문 목록 페이지네이션으로
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    // content 길이는 20자 이상
    public void verifyRule(Question question) {
        String content = question.getContent();
        if (content.length() < 20) {
            throw new BusinessLogicException(ExceptionCode.POST_NOTENOUGH_LENGTH);
        }
        tagCountCheck(question.getTags());
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return question;
    }

    public Member findMember(long memberId) {
        return memberService.findMember(memberId);
    }

    public void memberVerification(long memberId, long questionId) {
        long askedMemberId = findVerifiedQuestion(questionId).getMember().getMemberId();
        if(memberId != askedMemberId) {
            throw new BusinessLogicException(ExceptionCode.REQUEST_NOT_ALLOWED);
        }
    }

    public void tagCountCheck(List<String> tags) {
        if(tags.size() < 1 || tags.size() > 5) {
            throw new BusinessLogicException(ExceptionCode.NUMBER_OF_TAGS_NOT_CORRECT);
        }
    }

}
