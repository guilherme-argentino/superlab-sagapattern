
CREATE TABLE IF NOT EXISTS job (
    id uuid,
    jobTitle text,
    minSalary bigint,
    maxSalary bigint,
    PRIMARY KEY(id)
);
