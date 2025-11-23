DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,
    name varchar(255),
    email varchar(255) UNIQUE,
    phone varchar(255) UNIQUE,
    password varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);