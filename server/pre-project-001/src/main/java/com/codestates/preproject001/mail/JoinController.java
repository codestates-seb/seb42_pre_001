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

    @GetMapping("/join/registeremail")
    public ResponseEntity emailConfirmForJoin(@RequestParam("email") String email, @RequestParam("mail_key") String mailKey){
        memberService.authorizeEmailForJoin(email, mailKey);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PatchMapping("/pwchange/registeremail")
    public ResponseEntity emailConfirmForPwChange(@RequestParam("email") String email, @RequestParam("mail_key") String mailKey,
                                                  @RequestBody String pass){
        memberService.authorizeEmailForPwChange(email, mailKey,pass);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/pwchange") //맨처음 비번바꾸기 버튼누리기 -> 이메일전송 이메일받기
    public ResponseEntity patchPassword(@RequestBody MailBody mailBody) {
        memberService.changePassword(memberService.findByEmail(mailBody.getEmail()));
        return new ResponseEntity(HttpStatus.OK);
    }
}
