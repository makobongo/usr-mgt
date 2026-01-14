DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,
    name varchar(255),
    email varchar(255) UNIQUE,
    phone varchar(255) UNIQUE,
    password varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE IF EXISTS user_2fa_codes;
CREATE TABLE user_2fa_codes (
    id CHAR(36) PRIMARY KEY,
    user_id CHAR(36) NOT NULL,
    code_hash VARCHAR(255) NOT NULL,
    purpose ENUM('login', 'password_reset', 'email_change') NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    used_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_2fa_codes_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    INDEX idx_user_purpose (user_id, purpose),
    INDEX idx_expires (expires_at)
);