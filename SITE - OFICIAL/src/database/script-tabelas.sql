-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database churrasquinho;

use churrasquinho;

create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45)
);

create table votacao (
idVotacao int primary key auto_increment,
carne tinyint,
linguica tinyint,
frango tinyint,
fkUsuario int,
foreign key (fkUsuario) references usuario(id)
);

select nome, email, carne, frango, linguica from usuario
	join votacao
		on fkUsuario = id;