
CREATE TABLE IF NOT EXISTS location (
    id uuid,
    streetAddress text,
    postalCode text,
    city text,
    stateProvince text,
    PRIMARY KEY(id)
);
