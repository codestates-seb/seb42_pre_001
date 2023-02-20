package com.codestates.preproject001.member.controller;

import com.codestates.preproject001.member.dto.MemberPatchDto;
import com.codestates.preproject001.member.dto.MemberPostDto;
import com.codestates.preproject001.member.mapper.MemberMapper;
import com.codestates.preproject001.member.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/member") // RequestMapping 설정.. 정하고 넣기
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        // 아직 미구현, service 쪽 구현하면서 진행 예정
        return null;
    }

    @PatchMapping("/{member-id}") // path 안 정해서..
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto) {
        // 아직 미구현, service 쪽 구현하면서 진행 예정
        return null;
    }

    @GetMapping("/{member-id}") // path 안 정해서..
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        // 아직 미구현, service 쪽 구현하면서 진행 예정
        return null;
    }

    @DeleteMapping("/{member-id}") // path 안 정해서..
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {
        // delete만 넣으면 되지만 일단 service쪽 하고...
        return null;
    }

    //getMembers 추가해야함
}
