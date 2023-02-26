package com.codestates.preproject001.member.repository;

import com.codestates.preproject001.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    @Query(value = "SELECT m FROM Member m WHERE m.memberStatus = 'ACTIVE_USER'")
    Page<Member> findAllWhoActive(Pageable pageable);

}
