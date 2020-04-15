package com.github.slsp.app.repository;

import com.github.slsp.app.domain.Task;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the Task entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TaskRepository extends CassandraRepository<Task, UUID> {
}
