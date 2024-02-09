package com.party.manager.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.party.manager.Model.Booking;
import com.party.manager.Service.BookingService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/auth/events")
public class BookingController {

    @Autowired
    BookingService service;

    @PostMapping("")
    public boolean addEvent(@RequestBody Booking event) {
        return service.addEvent(event);
    }

    @GetMapping("")
    public List<Booking> getAllEvents() {
        return service.getAllEvents();
    }

    @GetMapping("/{id}")
    public Optional<Booking> getEventById(@PathVariable int id) {
        return service.getEventById(id);
    }

    @DeleteMapping("/{id}")
    public boolean deleteById(@PathVariable int id) {
        return service.deleteById(id);
    }

    @PutMapping("/{id}")
    public Booking putEvent(@RequestBody Booking event, @PathVariable int id) {
        return service.updateEvent(event, id);
    }

}