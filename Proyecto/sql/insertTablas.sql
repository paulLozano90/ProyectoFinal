
/*Insertar usuarios */

insert into usuarios (nombre,apellido1,apellido2,email,telefono,password) values 
('Paul','Lozano','Cruzado','plc@email.es',914125468,'77/77');


/*Insertar tipo de empresas */

insert into tipoEvento (nombre) values ('Deportes');
insert into tipoEvento (nombre) values ('Restaurantes');
insert into tipoEvento (nombre) values ('Salud y belleza');


/*Insertar empresas */

insert into empresas (cif,nombre,descripcion,email,telefono,direccion,localidad,codPostal,ciudad) values 
('45434543S','Deportes Moya','Empresa de deporte','deportesmoya@gmail.es',914125468,'Avenida de America Nº3','Madrid',28702,'Madrid');

insert into empresas (cif,nombre,descripcion,email,telefono,direccion,localidad,codPostal,ciudad) values 
('23332332S','Spa Relax and fun','Belleza y Salud','sparelax@gmail.es',914455468,'Calle del sueño Nº3','Alcobendas',28703,'Madrid');

insert into empresas (cif,nombre,descripcion,email,telefono,direccion,localidad,codPostal,ciudad) values 
('78786743S','Restaurante Chistu','Restaurantes','chisturestaurante@hotmail.es',912325433,'Calle del hambre Nº21','Madrid',28700,'Madrid');


/*Insertar eventos deportivos */

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (1,1,'Paintball','Batalla de paintball','Batalla de paintball en la sierra de Madrid junto a tus amigos o enemigos',30,15,
(STR_TO_DATE(REPLACE('18/01/2015','/','.') ,GET_FORMAT(date,'EUR'))),(STR_TO_DATE(REPLACE('18/03/2015','/','.') ,GET_FORMAT(date,'EUR'))));

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (1,1,'Piraguas','Recorrido en piragüas por el Manzanares','Recorrido en piragüas por las tranquilas aguas del rio Manzanares',20,15,
(STR_TO_DATE(REPLACE('10/04/2015','/','.') ,GET_FORMAT(date,'EUR'))),(STR_TO_DATE(REPLACE('10/05/2015','/','.') ,GET_FORMAT(date,'EUR'))));

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (1,1,'Karts','Carrera de Karts','Carrera de karts en circuito al aire libre',50,30,
(STR_TO_DATE(REPLACE('25/05/2015','/','.') ,GET_FORMAT(date,'EUR'))),(STR_TO_DATE(REPLACE('25/07/2015','/','.') ,GET_FORMAT(date,'EUR'))));


/*Insertar eventos de restaurantes */

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (2,2,'Menu Peruano','Menu degustacion Peruano','Disfruta de un gran menu Peruano incluyendo arroz estilo Paul',30,12,(STR_TO_DATE(REPLACE('20/07/2015','/','.') ,GET_FORMAT(date,'EUR'))),
(STR_TO_DATE(REPLACE('20/09/2015','/','.') ,GET_FORMAT(date,'EUR'))));

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (2,2,'Restaurante El Pescador','Menú degustación deluxe en el Restaurante El Pescador','Menú degustación deluxe de cocina casera en el restaurante El Pescador',40,20,(STR_TO_DATE(REPLACE('25/08/2015','/','.') ,GET_FORMAT(date,'EUR'))),
(STR_TO_DATE(REPLACE('25/10/2015','/','.') ,GET_FORMAT(date,'EUR'))));

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (2,2,'Desayunos con Encanto','Completo desayuno a domicilio con un gran descuento',' Hoy te proponemos una alternativa original, un estupendo desayuno o merienda a domicilio para 1 o 2 personas.',25,10,(STR_TO_DATE(REPLACE('25/10/2015','/','.') ,GET_FORMAT(date,'EUR'))),
(STR_TO_DATE(REPLACE('25/12/2015','/','.') ,GET_FORMAT(date,'EUR'))));


/*Insertar eventos de salud y belleza */

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (3,3,'Clínica Capilar Laura','Tratamiento para contorno de ojos (bolsas y ojeras)','Ofrecen un tratamiento específico para mejorar el contorno de ojos, y aportarle luz a tu mirada, atenuando las arrugas y disminuyendo la apariencia de bolsas y ojeras.',55,20,(STR_TO_DATE(REPLACE('22/04/2015','/','.') ,GET_FORMAT(date,'EUR'))),
(STR_TO_DATE(REPLACE('22/03/2015','/','.') ,GET_FORMAT(date,'EUR'))));

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (3,3,'Centro internacional del láser II','Ecografía 4D, Vídeo y Canastilla de regalo','Te ponemos en bandeja la oportunidad de que puedas ver perfectamente la carita de tu bebé y sus movimientos a través de la ecografía en 4D gracias al Hello baby eco4',85,35,(STR_TO_DATE(REPLACE('10/04/2015','/','.') ,GET_FORMAT(date,'EUR'))),
(STR_TO_DATE(REPLACE('10/04/2015','/','.') ,GET_FORMAT(date,'EUR'))));

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,precioNormal,precioReducido,fechaCreacion,fechaCaducidad) 
values (3,3,'Hotel Palacio de La Magdalena','Circuito termal en el Hotel Palacio de la Magdalena','Piscina dinámica con cascadas, masajes automáticos de chorros alternantes, tumbonas de burbujas y aeromasaje vertical, termas seca y húmeda, jacuzzi, pediluvios, duchas de contrastes, tumbonas calefactoras con cromoterapia',40,15,(STR_TO_DATE(REPLACE('12/05/2015','/','.') ,GET_FORMAT(date,'EUR'))),
(STR_TO_DATE(REPLACE('12/06/2015','/','.') ,GET_FORMAT(date,'EUR'))));