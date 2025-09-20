package com.example.demo.controller;

import com.example.demo.model.Transaction;
import com.example.demo.model.Wallet;
import com.example.demo.service.WalletService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/wallets")
public class WalletController {

    private final WalletService walletService;

    public WalletController(WalletService walletService) {
        this.walletService = walletService;
    }

    // POST /api/wallets/addWallet
    @PostMapping("/addWallet")
    public ResponseEntity<Wallet> addWallet(@Valid @RequestBody Wallet wallet) {
        Wallet saved = walletService.createWallet(wallet);
        return ResponseEntity.ok(saved);
    }

    // POST /api/wallets/transferFunds
    @PostMapping("/transferFunds")
    public ResponseEntity<Transaction> transferFunds(@RequestBody Map<String, String> body) {
        Integer fromId = Integer.valueOf(body.get("fromWalletId"));
        Integer toId = Integer.valueOf(body.get("toWalletId"));
        BigDecimal amount = new BigDecimal(body.get("amount"));

        Transaction tx = walletService.transferFunds(fromId, toId, amount);
        return ResponseEntity.ok(tx);
    }

    // GET /api/wallets/getAllTransactions
    @GetMapping("/getAllTransactions")
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        return ResponseEntity.ok(walletService.getAllTransactions());
    }

    // helper endpoints
    @GetMapping("/{id}")
    public ResponseEntity<Wallet> getWallet(@PathVariable Integer id) {
        return ResponseEntity.ok(walletService.getWalletById(id));
    }

    @GetMapping
    public ResponseEntity<List<Wallet>> listWallets() {
        return ResponseEntity.ok(walletService.getAllWallets());
    }
}