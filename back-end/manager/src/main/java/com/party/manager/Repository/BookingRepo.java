package com.party.manager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.party.manager.Model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Integer> {

}
