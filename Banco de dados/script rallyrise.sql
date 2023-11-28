create database rallyrise;
use rallyrise;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(60),
email varchar(60),
dtNasc date,
senha varchar(20)
);

create table resultadoQuiz (
idResultado int auto_increment,
dtHora datetime default current_timestamp,
pontuacao int,
fkUsuario int,
primary key (idResultado, fkUsuario),
constraint fk_usuario foreign key (fkUsuario) references usuario(idUsuario)
);

select * from usuario;
select * from resultadoQuiz;	

select nome, TIMESTAMPDIFF(YEAR, dtNasc, now()) AS idade from usuario;
select avg(TIMESTAMPDIFF(YEAR, dtNasc, now())) as Média_idade from usuario;
select count(idUsuario) Total_usuarios from usuario;
select round(avg(pontuacao)) from resultadoQuiz;
select round(avg(pontuacao)) from resultadoQuiz join usuario on idUsuario = fkUsuario
 where TIMESTAMPDIFF(YEAR, dtNasc, now()) >= 18 and TIMESTAMPDIFF(YEAR, dtNasc, now()) <= 25;
select TIMESTAMPDIFF(YEAR, dtNasc, now()) AS idade, 
	round(avg(pontuacao)) MédiaPontos 
from resultadoQuiz 
join usuario on fkUsuario = idUsuario group by idade;



select nome, email from usuario where year(dtNasc) > 2000;

select dtHora 'Data e hora', pontuacao Pontuação, nome Usuário from resultadoQuiz join usuario on idUsuario = fkUsuario;

select nome from usuario where nome like 'm%';