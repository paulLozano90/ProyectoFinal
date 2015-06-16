
/*Insertar usuarios */

insert into usuarios (nombre,apellido1,apellido2,email,telefono,password) values 
('Paul','Lozano','Cruzado','plc90@hotmail.es',914125468,'123456');

/*Insertar tipo de empresas */

insert into tipoEvento (nombre) values ('Restaurantes');
insert into tipoEvento (nombre) values ('Ocio');
insert into tipoEvento (nombre) values ('Salud y Belleza');

/*Insertar empresas */

insert into empresas (cif,nombre,descripcion,email,telefono,direccion,localidad,codPostal,ciudad) values 
('78786743S','Restaurante Chistu','Restaurantes','chisturestaurante@hotmail.es',912325433,'Calle del hambre Nº21','Madrid',28700,'Madrid');

insert into empresas (cif,nombre,descripcion,email,telefono,direccion,localidad,codPostal,ciudad) values 
('45434543S','Multiaventuras Moya','Deportes','deportesmoya@gmail.es',914125468,'Avenida de las Americas Nº3','San Sebastian de los Reyes',28702,'Madrid');

insert into empresas (cif,nombre,descripcion,email,telefono,direccion,localidad,codPostal,ciudad) values 
('23332332S','Spa Relax and Fun','Belleza y Salud','sparelax@gmail.es',914455468,'Calle del sueño Nº3','Alcobendas',28703,'Madrid');

/*Insertar eventos */

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('1','1','Menú Americano para compartir','Disfruta de un ambiente retro con este deliciso menú para dos con patatas y milkshake',
'Si lo que te encanta es una sabrosa hamburguesa de buey, esta Oferta es para ti. Y si lo que te encanta es degustar los más variados y sorprendentes sándwiches, también',
'35','17', '13/06/2015','01/07/2015','americano.jpg');

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('2','2','Partida de paintball','Disfruta de una partida de paintball con tus amigos',
'Con esta oferta podras liberar toda tu adrenalina y demostrar que eres un auténtico soldado',
'47','22', '13/06/2015','31/07/2015','paintball.jpg');

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('3','3','Sesiones de Rayos UVA','Disfruta de 5 sesiones dobles de rayos UVA My Sun y presume de moreno sin haber ido a la playa.',
'Consigue un bronceado dorado y luminoso incluso cuando no es verano. Además, hazlo sin exponerte al sol gracias a este fantástico descuento que te ofrecemos',
'70','37', '13/06/2015','15/07/2015','rayos.jpg');

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('1','1','Tapeo por Madrid','Tapeo para 2 personas y cubo de cervezas',
'Sea la época del año que sea, tapear es siempre un placer, por eso, hoy hemos preparado esta exquisita y excelente Oferta de tapeo: molletes, cazuelitas, bebidas, ¡y con bebida incluida! ',
'30','15', '13/06/2015','3/09/2015','tapas.jpg');

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('2','2','Partida de minigolf','Disfruta de una partida de minigolf en las mejores instalaciones',
'Si eres un amante del golf  en busca de la diversión asegurada, esta Oferta es tu mejor opción para disfrutar con tu familia o tus amigos',
'20','9', '13/06/2015','15/08/2015','minigolf.jpeg');

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('3','3','Circuito SPA y masaje','Te ofrecemos un circuito SPA de 120 min. y masaje oriental de 50 min',
'Para alcanzar un relax total, un máximo bienestar, pasar un día ajeno al estrés te ofrecemos el refugio ideal. Una sesión de SPA de 2 horas completas individual o en pareja.',
'65','35', '13/06/2015','25/08/2015','spa.jpg');

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('1','1','Menú peruano para dos','Escápate a tierras incas con el paladar con este sensacional menú',
'Regálale a tu paladar un viaje gastronómico hasta Perú sin tener que hacer las maletas. Degusta este menú peruano para 2 personas',
'65','20', '13/06/2015','18/08/2015','peruano.jpg');

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('2','2','Tandas de karts','Si la velocidad te corre por las venas, enfundate el casco',
'Podrás disfrutar de la máxima velocidad con karts .Siéntete como un auténtico profesional de la velocidad',
'19','13', '13/06/2015','15/07/2015','karting.jpg');

insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion, precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) 
values ('3','3','Depilación láser Unisex','Acaba con el vello de tu cuerpo con estas 3 sesiones de Depilación láser diodo',
'¿Pelos tú? Hace tiempo que han desaparecido de tu cuerpo gracias al Láser de Diodo que, aunque parezca la varita mágica de Photoshop, se trata de la depilación definitiva para eliminar el vello.',
'210','40', '13/06/2015','1/08/2015','depilacion.jpg');
