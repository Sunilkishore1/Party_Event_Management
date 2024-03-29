package com.party.manager.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.party.manager.Model.Venue;
import com.party.manager.Repository.VenueRepo;

@Service
public class VenueService {
    @Autowired
    VenueRepo repo;

    public boolean addVenue(Venue venue) {
        repo.save(venue);
        return true;
    }

    public List<Venue> getAllVenues() {
        return repo.findAll();
    }

    public Optional<Venue> getVenueById(int id) {
        return repo.findById(id);
    }

    public boolean deleteById(int id) {
        repo.deleteById(id);
        return true;
    }

    public Venue updateVenue(Venue venue, int id) {
        Venue model = repo.findById(id).get();
        model.setId(venue.getId());
        model.setDescrip(venue.getDescrip());
        model.setAvail(venue.getAvail());
        model.setLink(venue.getLink());
        model.setLocation(venue.getLocation());
        model.setName(venue.getName());
        model.setPrice(venue.getPrice());

        repo.save(model);
        return model;
    };
}
