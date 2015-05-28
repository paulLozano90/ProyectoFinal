
create database unete;

use unete;

CREATE TABLE empresas(
id_empresa INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
cif VARCHAR(20),
nombre VARCHAR(20),
descripcion VARCHAR(50),
email VARCHAR(10),
telefono INT(10),
direccion VARCHAR(30),
localidad VARCHAR(30),
codPostal INT(5),
ciudad VARCHAR(20)
);

/*drop table empresas;*/

insert into empresas (cif,nombre,descripcion,email,telefono,direccion,localidad,codPostal,ciudad) values 
('12345678S','Pepes','Empresa de deporte','pps@email.es',914125468,'Calle Emilio','Madrid',28702,'Madrid');

CREATE TABLE usuarios(
id_usuario INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(30),
apellido1 VARCHAR(30),
apellido2 VARCHAR(30),
email VARCHAR(40),
telefono INT(9),
password VARCHAR(20)
);

insert into usuarios (nombre,apellido1,apellido2,email,telefono,contraseña) values 
('Paul','Lozano','Cruzado','plc@email.es',914125468,'77/77');

CREATE TABLE tipoEvento(
idTipo INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(20)
);

insert into tipoEvento (nombre) values ('Deportes');
insert into tipoEvento (nombre) values ('Restaurantes');
insert into tipoEvento (nombre) values ('Salud y belleza');

CREATE TABLE eventos
(id_evento INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
id_empresa INT (3) NOT NULL,
idTipo INT (3) NOT NULL,
nombre VARCHAR(20),
descripcion VARCHAR(50),
precioNormal FLOAT (4),
precioReducido FLOAT (4),
fechaCreacion date,
fechaCaducidad date,
CONSTRAINT fk_empresas FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa),
CONSTRAINT fk_tipo FOREIGN KEY (idTipo) REFERENCES tipoEvento(idTipo)
);

insert into eventos (id_empresa,idTipo,nombre,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (1,1,'Piraguismo','Descripcion',50,25,(STR_TO_DATE(REPLACE('15/01/2015','/','.') ,GET_FORMAT(date,'EUR'))),
(STR_TO_DATE(REPLACE('15/01/2015','/','.') ,GET_FORMAT(date,'EUR'))));

CREATE TABLE usuariosEventos
(id_evento INT (3) NOT NULL,
id_usuario INT (3) NOT NULL,
localizador VARCHAR(20),
fechaSolicitud date,
PRIMARY KEY (id_evento,id_usuario),
CONSTRAINT fk_eventos FOREIGN KEY (id_evento) REFERENCES eventos(id_evento),
CONSTRAINT fk_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


