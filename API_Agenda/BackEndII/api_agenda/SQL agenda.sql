create database agenda;

use agenda;

create table contato (
id int not null auto_increment primary key,
nome varchar(100) not null,
telefone varchar (15) not null,
email varchar(100) not null
);

insert into contato(nome, telefone, email) values
('Vanessa', '69992707070', 'vanessinha@gmail.com'),
('Pedrinho', '69984025038', 'pedrodograu@gmail.com.br'),
('Victor' , '69993618962', 'vamp@gmail.com.br');

select *from contato;