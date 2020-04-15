package com.github.slsp.app.repository;

import com.github.slsp.app.domain.Department;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the Department entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DepartmentRepository extends CassandraRepository<Department, UUID> {
}
