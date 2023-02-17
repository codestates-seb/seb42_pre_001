package com.codestates.preproject001.member.service;

import com.codestates.preproject001.exception.BussinessLogicException;
import com.codestates.preproject001.exception.ExceptionCode;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
    // 패스워드 암호화 di, question / answer repository di 받기(회원 정보 조회 activity)

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        // 패스워드 암호화 등 로직은 추후 구현..

        return memberRepository.save(member);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        // 수정 로직 추후 구현.. 수정 가능한 부분(ex : name, password)이 무엇인지 명확하지 않아 일단 나중
        
        return memberRepository.save(findMember);
    }

    public void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) {
            throw new BussinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public Member findVerifiedMember(Long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);
        Member findMember = member.orElseThrow(() -> new BussinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;


    }


}
