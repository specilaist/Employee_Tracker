DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
      id INT AUTO_INCREMENT NOT NULL,
      name VARCHAR(30),
      PRIMARY KEY(id),
);

CREATE TABLE role (
      id INT AUTO_INCREMENT NOT NULL,
      title VARCHAR(30),
      salary DECIMAL(10,2),
      department_id INT,
      PRIMARY KEY(id),
      FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employees (
      id INT AUTO_INCREMENT NOT NULL,
      first_name VARCHAR(30) NOT NULL,
      last_name VARCHAR(30) NOT NULL,
      role_id INT,
      manager_id INT,
      PRIMARY KEY(id),
      FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
      FOREIGN KEY(manager_id) REFERENCES employees(id) ON DELETE SET NULL
);
