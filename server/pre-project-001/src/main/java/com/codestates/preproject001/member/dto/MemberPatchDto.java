package com.codestates.preproject001.member.dto;

import com.codestates.preproject001.NotSpace.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberPatchDto {
    private long memberId;

    @NotSpace
    private String name;

    @NotSpace
    private String password;

    // 임의로 NotSpace 유효성 검증 클래스 만들어서 적용하긴 했는데
    // 유효성 검증 pattern 따로 만들어서 적용할지 그대로 사용할지...
    // 추가로 스택오버플로우 회원 수정에 email (password 수정도 못 찾긴 했지만..) 수정이 없는 것 같은데 그냥 넣을지...

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }
}

