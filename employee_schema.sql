DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employess (
      id INT AUTO_INCREMENT NOT NULL,
      first_name VARCHAR(30) NOT NULL,
      last_name VARCHAR(30) NOT NULL,
      role_id INT,
      manager_id INT,
      PRIMARY KEY(id),
      FOREIGN KEY(role_id),
      FOREIGN KEY(manager_id)
);