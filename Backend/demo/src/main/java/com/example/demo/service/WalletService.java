package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Transaction;
import com.example.demo.model.Wallet;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.repository.WalletRepository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.regex.Pattern;

@Service
public class WalletService {

    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;

    private final Pattern PHONE_PATTERN = Pattern.compile("^\\+?\\d{10,15}$");

    public WalletService(WalletRepository walletRepository, TransactionRepository transactionRepository) {
        this.walletRepository = walletRepository;
        this.transactionRepository = transactionRepository;
    }

    public Wallet createWallet(Wallet wallet) {
        // validate phone
        if (wallet.getPhone() == null || !PHONE_PATTERN.matcher(wallet.getPhone()).matches()) {
            throw new BadRequestException("Invalid phone format. Provide phone with 10-15 digits, optional +.");
        }

        // check unique email and phone
        walletRepository.findByEmail(wallet.getEmail()).ifPresent(w -> {
            throw new BadRequestException("Email already in use.");
        });

        walletRepository.findByPhone(wallet.getPhone()).ifPresent(w -> {
            throw new BadRequestException("Phone already in use.");
        });

        if (wallet.getBalance() == null) {
            wallet.setBalance(BigDecimal.ZERO);
        }

        return walletRepository.save(wallet);
    }

    @Transactional
    public Transaction transferFunds(Integer fromId, Integer toId, BigDecimal amount) {
        if (fromId.equals(toId)) {
            throw new BadRequestException("Cannot transfer to the same wallet.");
        }
        if (amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new BadRequestException("Transfer amount must be positive.");
        }

        Wallet sender = walletRepository.findById(fromId)
                .orElseThrow(() -> new ResourceNotFoundException("Sender wallet not found: " + fromId));
        Wallet receiver = walletRepository.findById(toId)
                .orElseThrow(() -> new ResourceNotFoundException("Receiver wallet not found: " + toId));

        if (((BigDecimal) sender.getBalance()).compareTo(amount) < 0) {
            throw new BadRequestException("Insufficient balance in sender's wallet.");
        }

        sender.setBalance(((BigDecimal) sender.getBalance()).subtract(amount));
        receiver.setBalance(((BigDecimal) receiver.getBalance()).add(amount));

        walletRepository.save(sender);
        walletRepository.save(receiver);

        Transaction tx = new Transaction(fromId, toId, amount, LocalDateTime.now());
        return transactionRepository.save(tx);
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Wallet getWalletById(Integer id) {
        return walletRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Wallet not found: " + id));
    }

    public List<Wallet> getAllWallets() {
        return walletRepository.findAll();
    }
}