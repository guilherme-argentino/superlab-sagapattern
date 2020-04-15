package com.github.slsp.app.repository;

import com.github.slsp.app.domain.Employee;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the Employee entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EmployeeRepository extends CassandraRepository<Employee, UUID> {
}
