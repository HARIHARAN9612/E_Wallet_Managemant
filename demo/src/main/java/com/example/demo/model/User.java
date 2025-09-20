package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class User {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Integer id;

    @Column(unique = true, nullable = false)
    private String email;

    private String username;

    // store minimal for assignment. For real app, store hashed password, roles, etc.
    private String role;   

    public User(String email, Integer id, String role, String username) {
        this.email = email;
        this.id = id;
        this.role = role;
        this.username = username;
    }

    public String getEmail() {
        throw new UnsupportedOperationException("Not supported yet.");
    }
    
    
}
