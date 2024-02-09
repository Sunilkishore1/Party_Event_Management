package com.party.manager.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.party.manager.Model.Booking;
import com.party.manager.Repository.BookingRepo;

@Service
public class BookingService {
    @Autowired
    BookingRepo repo;

    public boolean addEvent(Booking event) {
        repo.save(event);
        return true;
    }

    public List<Booking> getAllEvents() {
        return repo.findAll();
    }

    public Optional<Booking> getEventById(int id) {
        return repo.findById(id);
    }

    public boolean deleteById(int id) {
        repo.deleteById(id);
        return true;
    }

    public Booking updateEvent(Booking event, int id) {
        Booking model = repo.findById(id).get();
        model.setBid(event.getBid());
        model.setLink(event.getLink());
        model.setPeople(event.getPeople());
        model.setTime(event.getTime());
        model.setDate(event.getDate());
        model.setStatus(event.getStatus());
        model.setEventType(event.getEventType());
        model.setUser(event.getUser());
        model.setVenue(event.getVenue());

        repo.save(model);
        return model;
    };
}