package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User createUser(User user) {
        repo.findByEmail(user.getEmail()).ifPresent(u -> {
            throw new BadRequestException("Email already used");
        });
        return repo.save(user);
    }

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User getUserById(Integer id) {
        return repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found: " + id));
    }

    public void deleteUser(Integer id) {
        User u = getUserById(id);
        repo.delete(u);
    }
}