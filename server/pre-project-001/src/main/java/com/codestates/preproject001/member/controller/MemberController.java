package com.codestates.preproject001.member.controller;

import com.codestates.preproject001.member.dto.MemberPatchDto;
import com.codestates.preproject001.member.dto.MemberPostDto;
import com.codestates.preproject001.member.entity.Member;
import com.codestates.preproject001.member.mapper.MemberMapper;
import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.oath.MemberDetails;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;


@RestController
@RequestMapping("/member")
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

    @PatchMapping // path 안 정해서..
    public ResponseEntity patchMember(@PathVariable("") @Positive long memberId,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto) {
        return null;
    }



    @GetMapping // path 안 정해서..
    public ResponseEntity getMember(@AuthenticationPrincipal MemberDetails memberDetails) {

        Member dbMember = memberService.findByEmail(memberDetails.getEmail());
        if (dbMember == null) {
            System.out.println("no");
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<> (mapper.memberToMemberResponseDto(dbMember),HttpStatus.OK);

    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {

        // delete만 넣으면 되지만 일단 service쪽 하고...
        return null;
    }

    //getMembers 추가해야함
}
