package com.example.demo.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
public class Transaction {
    
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;

    private Integer fromWalletId;
    private Integer toWalletId;

    private BigDecimal amount;

    private LocalDateTime timestamp;

     public Transaction() {}

    public Transaction(Integer fromWalletId, Integer toWalletId, BigDecimal amount, LocalDateTime timestamp) {
        this.amount = amount;
        this.fromWalletId = fromWalletId;
        this.timestamp = timestamp;
        this.toWalletId = toWalletId;
        this.transactionId = transactionId;
    }


}

