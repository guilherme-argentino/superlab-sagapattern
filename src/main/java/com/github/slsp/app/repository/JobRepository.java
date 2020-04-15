package com.github.slsp.app.repository;

import com.github.slsp.app.domain.Job;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the Job entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JobRepository extends CassandraRepository<Job, UUID> {
}
