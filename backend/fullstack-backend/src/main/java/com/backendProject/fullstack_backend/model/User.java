package com.backendProject.fullstack_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity //atomotically generate user table once we connect to mysql database
public class User {
    @Id
    @GeneratedValue

    private long id;
    private String username;
    private String name;
    private String email;


}
