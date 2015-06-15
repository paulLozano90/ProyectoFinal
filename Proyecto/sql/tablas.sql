
/*drop table */
/*drop database unete; */

create database unete;
use unete;

CREATE TABLE usuarios(
idUsuario INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR(30),
apellido1 VARCHAR(30),
apellido2 VARCHAR(30),
email VARCHAR(30),
telefono INT(9),
password VARCHAR(20)
);

CREATE TABLE empresas(
idEmpresa INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
cif VARCHAR(20),
nombre VARCHAR(50),
descripcion VARCHAR(100),
email VARCHAR(30),
telefono INT(10),
direccion VARCHAR(40),
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
nombre VARCHAR(50),
descripCorta VARCHAR(100),
descripcion VARCHAR(250),
precioNormal FLOAT (4),
precioReducido FLOAT (4),
fechaCreacion VARCHAR(10),
fechaCaducidad VARCHAR(10),
foto VARCHAR(50),
CONSTRAINT fk_empresas FOREIGN KEY (idEmpresa) REFERENCES empresas(idEmpresa),
CONSTRAINT fk_tipo FOREIGN KEY (idTipo) REFERENCES tipoEvento(idTipo)
);

CREATE TABLE usuariosEventos
(idDescuento INT (3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
idEvento INT (3) NOT NULL,
idUsuario INT (3) NOT NULL,
localizador VARCHAR(20),
fechaSolicitud VARCHAR(20),
CONSTRAINT fk_eventos FOREIGN KEY (idEvento) REFERENCES eventos(idEvento),
CONSTRAINT fk_usuarios FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
);