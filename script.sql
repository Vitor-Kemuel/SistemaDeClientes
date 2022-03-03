CREATE DATABASE cadastro;

use cadastro;

CREATE TABLE cliente(
    id int(5) ZEROFILL NOT NULL AUTO_INCREMENT,
    nome varchar(70) NOT NULL,
    data_de_nascimento varchar(10) NOT NULL,
    cpf varchar(14) NOT NULL,
    telefone varchar(15) NOT NULL,
    email varchar(40) NOT NULL,
    endereco varchar(80) NOT NULL,
    observacoes varchar(300),
    PRIMARY KEY(id)
);