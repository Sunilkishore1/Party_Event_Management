package com.party.manager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.manager.Model.AdminEvent;

public interface AdminEventRepo extends JpaRepository<AdminEvent, Integer> {

}
