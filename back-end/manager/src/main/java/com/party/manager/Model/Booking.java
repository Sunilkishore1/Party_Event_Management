package com.party.manager.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Booking {
    @Id
    @Column(name = "b_id")
    private int bid;
    private String eventType;
    private String link;
    private int people;
    private String time;
    private String date;
    private String status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "venue_id")
    public Venue venue;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    public User user;

    // @ManyToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "user_id", referencedColumnName = "uid")
    // private User user;
}