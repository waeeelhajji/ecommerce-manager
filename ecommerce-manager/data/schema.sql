DROP DATABASE IF EXISTS ProductManagmentService;

CREATE DATABASE ProductManagmentService;


USE ProductManagmentService;

CREATE TABLE Products (
id int NOT NULL AUTO_INCREMENT,
name varchar(255),
Qty varchar(255),
Price varchar(255),
primary key (id)
);
