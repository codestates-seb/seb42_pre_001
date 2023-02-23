package com.codestates.preproject001.member.controller;

import com.codestates.preproject001.dto.MultiResponseDto;
import com.codestates.preproject001.member.dto.MemberPatchDto;
import com.codestates.preproject001.member.dto.MemberPostDto;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.mapper.MemberMapper;
import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.oath.MemberDetails;
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
public class MemberController {
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

    @PatchMapping
    public ResponseEntity patchMember(@AuthenticationPrincipal MemberDetails memberDetails,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto) {
        Member member = mapper.memberPatchDtoToMember(memberPatchDto);
        member.setMemberId(memberDetails.getMemberId());

        return new ResponseEntity(memberService.updateMember(member),HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") long memberId ) {
        Member dbMember = memberService.findMember(memberId);
        return new ResponseEntity<> (mapper.memberToMemberMyPageDto(dbMember),HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page) {
        Page<Member> members = memberService.findMembers(page - 1);
        List<Member> content = members.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.membersToMemberResponseDtos(content), members), HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity deleteMember(@AuthenticationPrincipal MemberDetails memberDetails) {

        Member dbMember = memberService.findByEmail(memberDetails.getEmail());
        memberService.deleteMember(dbMember);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/pwchange") //맨처음 비번바꾸기 버튼누리기 -> 이메일전송 이메일받기
    public ResponseEntity patchPassword(@RequestBody String email) {
        memberService.changePassword(memberService.findByEmail(email));
        return new ResponseEntity(HttpStatus.OK);
    }
}
