DROP DATABASE IF EXISTS ProductManagmentService;

CREATE DATABASE ProductManagmentService;


USE ProductManagmentService;

CREATE TABLE Products (
id int NOT NULL AUTO_INCREMENT,
name varchar(255),
Qty INT NOT NULL,
Price INT NOT NULL,
primary key (id)
);
