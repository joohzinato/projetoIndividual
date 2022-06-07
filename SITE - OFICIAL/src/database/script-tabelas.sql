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
idVotacao int auto_increment,
carne tinyint,
linguica tinyint,
frango tinyint,
fkUsuario int,
foreign key (fkUsuario) references usuario(id),
primary key (idVotacao, fkUsuario)
);

select nome, email, carne, frango, linguica from usuario
	join votacao
		on fkUsuario = id;
        
select count(idVotacao) as 'Quantidade de votos', 
		(select count(carne) from usuario
			join votacao
				on fkUsuario = id
					where carne = true) as 'Quantidade que gostam de Carne' ,
		(select count(linguica) from usuario
			join votacao
				on fkUsuario = id
					where linguica = true) as 'Quantidade que gostam de Linguiça', 
		(select count(frango) from usuario
			join votacao
				on fkUsuario = id
					where frango = true) as 'Quantidade que gostam de Frango' from usuario
						join votacao
							on fkUsuario = id;