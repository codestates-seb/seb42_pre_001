package com.codestates.preproject001.oath.memberDetails;

import com.codestates.preproject001.member.entity.Member;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Getter
public class MemberDetails extends Member implements UserDetails {

    public MemberDetails(Member member) { // 생성자
        this.setMemberId(member.getMemberId());
        this.setPassword(member.getPassword());
        this.setEmail(member.getEmail());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}