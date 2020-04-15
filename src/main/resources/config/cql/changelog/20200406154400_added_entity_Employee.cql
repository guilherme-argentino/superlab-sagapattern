
CREATE TABLE IF NOT EXISTS employee (
    id uuid,
    firstName text,
    lastName text,
    email text,
    phoneNumber text,
    hireDate timestamp,
    salary bigint,
    commissionPct bigint,
    PRIMARY KEY(id)
);
