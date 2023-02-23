package com.codestates.preproject001.mail;

import com.codestates.preproject001.member.service.MemberService;
import com.codestates.preproject001.oath.MemberDetails;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
public class JoinController {
    MemberService memberService;

    public JoinController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/join/registeremail/{email}/{mailKey}")
    public ResponseEntity emailConfirmForJoin(@PathVariable("email") String email, @PathVariable("mailKey") String mailKey){
        memberService.authorizeEmailForJoin(email, mailKey);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PatchMapping("/pwchange/registeremail/{email}/{mailKey}")
    public ResponseEntity emailConfirmForPwChange(@PathVariable("email") String email, @PathVariable("mailKey") String mailKey,
                                                  @RequestBody String pass){
        memberService.authorizeEmailForPwChange(email, mailKey,pass);
        return new ResponseEntity(HttpStatus.OK);
    }
}
