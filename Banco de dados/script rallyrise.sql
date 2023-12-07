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

create table feedback (
idFeedback int primary key auto_increment,
titulo varchar(20),
descricao varchar(100),
fkUsuario int,
constraint fk__usuario foreign key (fkUsuario) references usuario(idUsuario)
);

select * from usuario;
select * from resultadoQuiz;	
select * from feedback;

select  nome, titulo, descricao from usuario join feedback on fkUsuario = idUsuario;
select count(idFeedback) from feedback;
select count(idUsuario), DATE_FORMAT(dtHora,'%d-%m-%Y') Dia from resultadoQuiz join usuario on fkUsuario = idUsuario group by Dia;
select max(idUsuario) from usuario group by idUsuario;
select nome, TIMESTAMPDIFF(YEAR, dtNasc, now()) AS idade from usuario;
select avg(TIMESTAMPDIFF(YEAR, dtNasc, now())) as Média_idade from usuario;
select round(avg(pontuacao)) from resultadoQuiz;
select round(avg(pontuacao)) from resultadoQuiz join usuario on idUsuario = fkUsuario
 where TIMESTAMPDIFF(YEAR, dtNasc, now()) >= 18 and TIMESTAMPDIFF(YEAR, dtNasc, now()) <= 25;
select TIMESTAMPDIFF(YEAR, dtNasc, now()) AS idade, 
	round(avg(pontuacao)) MédiaPontos 
from resultadoQuiz 
join usuario on fkUsuario = idUsuario group by idade;

select nome, email from usuario where year(dtNasc) > 2000;
SELECT count(idUsuario) total_usuarios, round(avg(TIMESTAMPDIFF(YEAR, dtNasc, now()))) as media_idade,  round(avg(pontuacao)) media_pontos 
	FROM usuario join resultadoQuiz on fkUsuario = idUsuario;

select dtHora 'Data e hora', pontuacao Pontuação, nome Usuário from resultadoQuiz join usuario on idUsuario = fkUsuario;

select nome from usuario where nome like 'm%';

  select TIMESTAMPDIFF(YEAR, dtNasc, now()) AS idade, 
            round(avg(pontuacao)) mediaPontos 
        from resultadoQuiz 
        join usuario on fkUsuario = idUsuario group by idade order by idade;