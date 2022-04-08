CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animal(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  gender VARCHAR(45) NOT NULL,
  species VARCHAR(45) NOT NULL,
  age INT NOT NULL,
  location VARCHAR(45) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE manager(
  manager_id INT PRIMARY KEY AUTO_INCREMENT,
  firt_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE employee(
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES manager (manager_id)
)ENGINE=InnoDB;

CREATE TABLE animal_employee(
  animal_id INT,
  employee_id INT,
  CONSTRAINT PRIMARY KEY(animal_id, employee_id),
  FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
  FOREIGN KEY (employee_id) REFERENCES employee (employee_id)
)ENGINE=InnoDB;