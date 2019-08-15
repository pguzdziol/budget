package com.github.pguzdziol.budgetapi.revenues

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.GetMapping

@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
class RevenueController(private val repository: RevenueRepository) {

    @GetMapping("/revenues")
    fun getRevenues(): List<Revenue> {
        return repository.findAll()
    }

    @PostMapping("/revenues")
    fun addRevenue(@RequestBody revenue: Revenue) {
        repository.save(revenue)
    }
}