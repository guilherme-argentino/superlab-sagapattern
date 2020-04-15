package com.github.slsp.app.service;

import com.github.slsp.app.domain.Country;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Service Interface for managing {@link Country}.
 */
public interface CountryService {

    /**
     * Save a country.
     *
     * @param country the entity to save.
     * @return the persisted entity.
     */
    Country save(Country country);

    /**
     * Get all the countries.
     *
     * @return the list of entities.
     */
    List<Country> findAll();

    /**
     * Get the "id" country.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Country> findOne(UUID id);

    /**
     * Delete the "id" country.
     *
     * @param id the id of the entity.
     */
    void delete(UUID id);
}
