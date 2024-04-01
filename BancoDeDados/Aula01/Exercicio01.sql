CREATE DATABASE study;

USE study;

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nameEmployee VARCHAR(50) NOT NULL,
    statusEmployee ENUM('Ativo', 'Inativo') NOT NULL,
    stackEmployee SET('HTML', 'CSS', 'Java', 'Python'),
	dateCreate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO employees (nameEmployee, statusEmployee, stackEmployee) VALUES ('Haroldo Mayworm', 'Ativo', 'HTML,CSS,Java');
INSERT INTO employees (nameEmployee, statusEmployee, stackEmployee) VALUES ('Pedro Silva', 'Inativo', 'Python');
INSERT INTO employees (nameEmployee, statusEmployee, stackEmployee) VALUES ('Jean Costa', 'Inativo', 'HTML,CSS');
INSERT INTO employees (nameEmployee, statusEmployee, stackEmployee) VALUES ('Luiz Souza', 'Ativo', 'Java');

SELECT * FROM employees;