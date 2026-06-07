DROP DATABASE IF EXISTS nanopantano;
CREATE DATABASE nanopantano;
use nanopantano;
CREATE TABLE login (
 idLOGIN INT NOT NULL AUTO_INCREMENT,
 USERNAME VARCHAR(45) NOT NULL UNIQUE,
 PASSWORD VARCHAR(45) NOT NULL ,
 TIPOUSUARIO VARCHAR(45) NOT NULL,
 PRIMARY KEY (idLOGIN) );
INSERT INTO login (USERNAME, PASSWORD, TIPOUSUARIO) VALUES ('admin', '1234','administrador');

CREATE TABLE tablajson(
idEjercicio INT NOT NULL AUTO_INCREMENT,
columnajson JSON,
PRIMARY KEY (idEjercicio));

insert into tablajson(columnajson) values('{"id" : "1","pregunta" : "Una simple pregunta de prueba1","respuesta" : "una simple respuesta de prueba1","drags" : [{"imagen" : "https://via.placeholder.com/150","valor" : "Fidel Castro"},{"imagen" : "https://via.placeholder.com/150","valor" : "George W. Bush"},{"imagen" : "https://via.placeholder.com/150","valor" : "Vidente Fox"},{"imagen" : "https://via.placeholder.com/150","valor" : "Ricardo Lagos"}],"targets" : [{"imagen" : "https://via.placeholder.com/150","valor" : "Mexico"},{"imagen" : "https://via.placeholder.com/150","valor" : "Chile"},{"imagen" : "https://via.placeholder.com/150","valor" : "Cuba"},{"imagen" : "https://via.placeholder.com/150","valor" : "Estados Unidos"}]}');
insert into tablajson(columnajson) values('{"id" : "2","pregunta" : "Una simple pregunta de prueba2","respuesta" : "una simple respuesta de prueba2","drags" : [{"imagen" : "https://via.placeholder.com/150","valor" : "Fidel Castro"},{"imagen" : "https://via.placeholder.com/150","valor" : "George W. Bush"},{"imagen" : "https://via.placeholder.com/150","valor" : "Vidente Fox"},{"imagen" : "https://via.placeholder.com/150","valor" : "Ricardo Lagos"}],"targets" : [{"imagen" : "https://via.placeholder.com/150","valor" : "Mexico"},{"imagen" : "https://via.placeholder.com/150","valor" : "Chile"},{"imagen" : "https://via.placeholder.com/150","valor" : "Cuba"},{"imagen" : "https://via.placeholder.com/150","valor" : "Estados Unidos"}]}');
insert into tablajson(columnajson) values('{"id" : "3","pregunta" : "Una simple pregunta de prueba3","respuesta" : "una simple respuesta de prueba3","drags" : [{"imagen" : "https://via.placeholder.com/150","valor" : "Fidel Castro"},{"imagen" : "https://via.placeholder.com/150","valor" : "George W. Bush"},{"imagen" : "https://via.placeholder.com/150","valor" : "Vidente Fox"},{"imagen" : "https://via.placeholder.com/150","valor" : "Ricardo Lagos"}],"targets" : [{"imagen" : "https://via.placeholder.com/150","valor" : "Mexico"},{"imagen" : "https://via.placeholder.com/150","valor" : "Chile"},{"imagen" : "https://via.placeholder.com/150","valor" : "Cuba"},{"imagen" : "https://via.placeholder.com/150","valor" : "Estados Unidos"}]}');





