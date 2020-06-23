DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(40),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);
