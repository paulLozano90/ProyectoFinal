
/*drop table */
/*drop database unete; */

create database unete;
use unete;

CREATE TABLE usuarios(
idUsuario INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(30),
apellido1 VARCHAR(30),
apellido2 VARCHAR(30),
email VARCHAR(40),
telefono INT(9),
password VARCHAR(20)
);


CREATE TABLE empresas(
idEmpresa INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
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


CREATE TABLE tipoEvento(
idTipo INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(20)
);



CREATE TABLE eventos
(idEvento INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
idEmpresa INT (3) NOT NULL,
idTipo INT (3) NOT NULL,
nombre VARCHAR(20),
descripCorta VARCHAR(30),
descripcion VARCHAR(50),
precioNormal FLOAT (4),
precioReducido FLOAT (4),
fechaCreacion date,
fechaCaducidad date,
CONSTRAINT fk_empresas FOREIGN KEY (idEmpresa) REFERENCES empresas(idEmpresa),
CONSTRAINT fk_tipo FOREIGN KEY (idTipo) REFERENCES tipoEvento(idTipo)
);


CREATE TABLE usuariosEventos
(idEvento INT (3) NOT NULL,
idUsuario INT (3) NOT NULL,
localizador VARCHAR(20),
fechaSolicitud date,
PRIMARY KEY (idEvento,idUsuario),
CONSTRAINT fk_eventos FOREIGN KEY (idEvento) REFERENCES eventos(idEvento),
CONSTRAINT fk_usuarios FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
);


