package com.github.slsp.app.repository;

import com.github.slsp.app.domain.Region;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the Region entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RegionRepository extends CassandraRepository<Region, UUID> {
}
