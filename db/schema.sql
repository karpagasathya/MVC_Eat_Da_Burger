
CREATE DATABASE burger_db;
USE burger_db;

create table burgers(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN
);