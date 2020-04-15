package com.github.slsp.app.repository;

import com.github.slsp.app.domain.JobHistory;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the JobHistory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JobHistoryRepository extends CassandraRepository<JobHistory, UUID> {
}
