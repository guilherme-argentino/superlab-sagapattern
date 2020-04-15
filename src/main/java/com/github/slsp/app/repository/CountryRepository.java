package com.github.slsp.app.repository;

import com.github.slsp.app.domain.Country;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the Country entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CountryRepository extends CassandraRepository<Country, UUID> {
}
