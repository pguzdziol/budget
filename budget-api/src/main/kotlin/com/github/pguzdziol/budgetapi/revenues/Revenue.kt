package com.github.pguzdziol.budgetapi.revenues

import java.math.BigDecimal
import java.math.BigInteger
import javax.persistence.*

@Entity
data class Revenue(
        @Column(nullable = false)
        val revenueCategory: String,

        @Column(nullable = false)
        val plannedAmount: BigDecimal = BigDecimal(BigInteger.ZERO),

        @Column(nullable = false)
        val actualAmount: BigDecimal = BigDecimal(BigInteger.ZERO),

        @Column(nullable = false)
        val comment: String = ""
) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0
}