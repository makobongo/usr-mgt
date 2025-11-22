DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    phone varchar(255),
    password varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);