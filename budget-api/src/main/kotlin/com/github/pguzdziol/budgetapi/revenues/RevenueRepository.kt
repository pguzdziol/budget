package com.github.pguzdziol.budgetapi.revenues

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource
interface RevenueRepository : JpaRepository<Revenue, Long>