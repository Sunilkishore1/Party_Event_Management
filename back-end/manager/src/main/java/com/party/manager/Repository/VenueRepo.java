package com.party.manager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.manager.Model.Venue;

public interface VenueRepo extends JpaRepository<Venue, Integer> {

}
