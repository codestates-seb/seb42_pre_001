package com.codestates.preproject001.member.controller;

import com.codestates.preproject001.dto.MultiResponseDto;
import com.codestates.preproject001.dto.SingleResponseDto;
import com.codestates.preproject001.member.dto.MemberPatchDto;
import com.codestates.preproject001.member.dto.MemberPostDto;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.mapper.MemberMapper;
import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.oath.memberDetails.MemberDetails;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping("/members")
@Validated
public class MemberController { //1차 완료
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/join")
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PatchMapping//프로필 고치기
    public ResponseEntity patchMyProfile(@AuthenticationPrincipal MemberDetails memberDetails,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto) {
        Member member = mapper.memberPatchDtoToMember(memberPatchDto);
        member.setMemberId(memberDetails.getMemberId());
        memberService.updateMember(member);

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/{member-id}") //멤버 페이지로 가게함 (마이페이지)
    public ResponseEntity getMember(@PathVariable("member-id") long memberId) {
        Member dbMember = memberService.findMember(memberId);
        return new ResponseEntity<> (new SingleResponseDto<>(mapper.memberToMemberMyPageDto(dbMember)),HttpStatus.OK);
    }


    @GetMapping //user목록을 띄워준다
    public ResponseEntity getMembers(@Positive @RequestParam int page) {
        Page<Member> members = memberService.findMembers(page - 1);
        List<Member> content = members.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.membersToMemberResponseDtos(content), members), HttpStatus.OK);
    }

    @DeleteMapping //memberStatus를 deleted로 변경(삭제) + 쿼리문으로 이메일찾기+삭제로변경 한번에 날려주기
    public ResponseEntity deleteMember(@AuthenticationPrincipal MemberDetails memberDetails) {

        Member member = memberService.findVerifiedMember(memberDetails.getMemberId());
        memberService.deleteMember(member);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}