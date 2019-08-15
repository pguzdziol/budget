package com.github.pguzdziol.budgetapi

import com.github.pguzdziol.budgetapi.revenues.Revenue
import com.github.pguzdziol.budgetapi.revenues.RevenueRepository
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import jdk.nashorn.internal.objects.NativeArray.forEach
import org.springframework.boot.ApplicationRunner
import org.springframework.context.annotation.Bean
import java.math.BigDecimal


@SpringBootApplication
class BudgetApiApplication {
    @Bean
    fun init(repository: RevenueRepository) = ApplicationRunner {
        repository.save(Revenue("Wynagrodzenie"))
        repository.save(Revenue("Wynagrodzenie Partnera / Partnerki"))
        repository.save(Revenue("Premia"))
        repository.save(Revenue("Przychody z premii bankowych"))
        repository.save(Revenue("Odsetki bankowe"))
        repository.save(Revenue("Sprzedaż na Allegro itp."))
        repository.save(Revenue("Inne przychody"))
        repository.findAll().forEach(::println)
    }
}

fun main(args: Array<String>) {
    runApplication<BudgetApiApplication>(*args)
}