package com.party.manager.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class AdminEvent {
    @Id
    @Column(name = "aid")
    private int aid;

    private String type;
    private String link;
    private String des;
    private int peop;
    private String time;
}