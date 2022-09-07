BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users(
    id INTEGER SERIAL,
    username VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE posts(
    id INTEGER SERIAL,
    author_id INTEGER REFERENCES users(id),
    votes INTEGER DEFAULT 0,
    content TEXT NOT NULL,
    title VARCHAR(255) NOT NULL
);
COMMIT;