package com.github.slsp.app.repository;

import com.github.slsp.app.domain.Location;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the Location entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LocationRepository extends CassandraRepository<Location, UUID> {
}
