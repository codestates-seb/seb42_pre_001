package com.codestates.preproject001.member.service;

import com.codestates.preproject001.exception.BusinessLogicException;
import com.codestates.preproject001.exception.ExceptionCode;
import com.codestates.preproject001.mail.KeyMaker;
import com.codestates.preproject001.mail.MailHandler;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.repository.MemberRepository;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    JavaMailSender mailSender;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, JavaMailSender mailSender) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.mailSender = mailSender;
    }
    // 패스워드 암호화 di, question / answer repository di 받기(회원 정보 조회 activity)

    public Member createMember(Member member) { // 1번 회원가입(메일인증X) -> 메일전송
        //이메일중복확인
        verifyExistsEmail(member.getEmail());
        //비번암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
        //memberStatus설정
        member.setMemberStatus(Member.MemberStatus.UNAUTHORIZED_USER);
        //메일 인증 key값 넣어주기
        String mailKey = new KeyMaker().makeKey(30,false);
        member.setMailKey(mailKey);
        //회원가입
        memberRepository.save(member);
        try{
            MailHandler sendMail = new MailHandler(mailSender);
            sendMail.setSubject("[인증메일발송]");
            sendMail.setText(
                    "메일인증"+
                            "<br><a href ='http://preproject001.s3-website.ap-northeast-2.amazonaws.com?email=" + member.getEmail()+
                            "&mail_key=" + member.getMailKey() +
                            "' target='_blank'>이메일 인증 확인</a>"
            );
            sendMail.setFrom("tkdgur591@gmail.com", "음냐");
            sendMail.setTo(member.getEmail(),"받는사람");
            sendMail.send();
        } catch (Exception e) {
            System.out.println("email에러"); //나중에 예외처리하기
        }
        return member;
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName())
                .ifPresent(name->findMember.setName(name));

        Optional.ofNullable(member.getLocation())
                .ifPresent(location->findMember.setLocation(location));

        Optional.ofNullable(member.getTitle())
                .ifPresent(title->findMember.setTitle(title));

        Optional.ofNullable(member.getAboutMe())
                .ifPresent(aboutMe->findMember.setAboutMe(aboutMe));

        return memberRepository.save(findMember);
    }

    public Member findMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        return findMember;
    }

    //쿼리로 deleted는 안되게 find
    public Page<Member> findMembers(int page) {
        return memberRepository.findAll(PageRequest.of(page, 36, Sort.by("memberId").descending()));
    }

    public void deleteMember(Member member) {
        member.setMemberStatus(Member.MemberStatus.DELETED_USER);
        memberRepository.save(member);
    }

    public void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public Member findVerifiedMember(Long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);
        Member findMember = member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;


    }

    public Member findByEmail (String email){
        Optional<Member> member = memberRepository.findByEmail(email);
        Member findMember = member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    //memberDetails(token) id와 요청 Body에서의 id비교
    public void matchMember(long memberId1, long memberId2){
        if(memberId1 != memberId2) throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
    }

    public void authorizeEmailForJoin (String email,String mailKey){ //회원가입 이메일을 확인하는코드
        //예외처리
        Optional<Member> member = memberRepository.findByEmail(email);
        Member findMember = member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        if(findMember.getMemberStatus() != Member.MemberStatus.UNAUTHORIZED_USER){
            System.out.println("이미 계정이 생성된 이메일 입니다");
        } else {
            if(findMember.getMailKey().equals(mailKey)){
                findMember.setMemberStatus(Member.MemberStatus.ACTIVE_USER);
                System.out.println("메일 인증 성공");
                memberRepository.save(findMember);

            }else{
                System.out.println("메일키값이 다릅니다");
            }
        }
    }


    public void changePassword (Member member){
        //memberStatus설정
        if(member.getMemberStatus()== Member.MemberStatus.DELETED_USER||member.getMemberStatus()== Member.MemberStatus.UNAUTHORIZED_USER) {
            System.out.println("삭제된회원 or 인증되지않은 회원");
        } else{
            //메일 인증 key값 넣어주기
            String mailKey = new KeyMaker().makeKey(20,false);
            member.setMailKey(mailKey);
            //인증키 저장
            memberRepository.save(member);
            try{
                MailHandler sendMail = new MailHandler(mailSender);
                sendMail.setSubject("[인증메일발송]");
                sendMail.setText(
                        "메일인증"+
                                "<br><a href ='http://preproject001.s3-website.ap-northeast-2.amazonaws.com?email=" + member.getEmail()+
                                "&mail_key=" + member.getMailKey() +
                                "' target='_blank'>이메일 인증 확인</a>"
                );
                sendMail.setFrom("tkdgur591@gmail.com", "음냐");
                sendMail.setTo(member.getEmail(),"받는사람");
                sendMail.send();
            } catch (Exception e) {
                System.out.println("email에러"); //나중에 예외처리하기
            }
        }
    }
    public void authorizeEmailForPwChange (String email, String mailKey, String pass){//이메일을 확인하는코드 + 실제로 비번바꿈
        //예외처리
        Optional<Member> member = memberRepository.findByEmail(email);
        Member findMember = member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        if(findMember.getMemberStatus()== Member.MemberStatus.ACTIVE_USER) {
            if(findMember.getMailKey().equals(mailKey)) {
                System.out.println("메일 인증 성공");
                String encryptedPassword = passwordEncoder.encode(pass);
                findMember.setPassword(encryptedPassword);
                memberRepository.save(findMember);
            } else {
                System.out.println("메일키값이 다릅니다");
            }
        }
        System.out.println("활동중인 회원이 아닙니다");
    }
}
