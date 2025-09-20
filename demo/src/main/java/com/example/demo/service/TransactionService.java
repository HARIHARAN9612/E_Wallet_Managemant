package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.model.Transaction;
import com.example.demo.repository.TransactionRepository;

import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository txRepo;

    public TransactionService(TransactionRepository txRepo) {
        this.txRepo = txRepo;
    }

    public List<Transaction> getAllTransactions() {
        return txRepo.findAll();
    }

}