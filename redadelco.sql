drop database redadelco;

create database redadelco;

use redadelco

create table cadena_productiva(
    id int(145) not null AUTO_INCREMENT,
    nombre LONGTEXT not null,
    primary key (id)
);

create table linea_productiva(
    id int(145) not null AUTO_INCREMENT,
    nombre LONGTEXT not null,
    id_cadena_productiva int(145) not null,
    foreign key (id_cadena_productiva) references cadena_productiva(id) on delete cascade,
    primary key (id)
);

create table genero(
	id int(145) not null AUTO_INCREMENT ,
	nombre LONGTEXT,
	primary key (id)
);

create table grupo_etnico(
	id int(145) not null AUTO_INCREMENT ,
	nombre LONGTEXT,
	primary key (id)
);

create table municipio(
	id int(145) not null AUTO_INCREMENT ,
	nombre LONGTEXT,
	primary key (id)
);

create table vereda(
	id int(145) not null AUTO_INCREMENT ,
	nombre LONGTEXT,
    id_municipio int(145) not null,
    foreign key (id_municipio) references municipio(id) on delete cascade,
	primary key (id)
);

create table finca(
	id int(145) not null AUTO_INCREMENT ,
	nombre LONGTEXT,
    cant_hectareas float,
    direccion LONGTEXT,
    id_vereda int(145),
    foreign key (id_vereda) references vereda(id) on delete cascade,
	primary key (id)
);

create table organizacion(
	id int(145) not null AUTO_INCREMENT ,
	nombre LONGTEXT,
	descripcion LONGTEXT,
	contacto int(145),
	tema_capacitacion LONGTEXT,
	tema_empresarial LONGTEXT,
	id_vereda int(145),
	representante LONGTEXT,
	foreign key (id_vereda) references vereda(id) on delete cascade,
	primary key (id)
);

create table diagnostico(
	id int(145) not null AUTO_INCREMENT ,
	nombre LONGTEXT,
    fecha date,
    hora_inicio time,
    hora_fin time,
    imagen LONGTEXT,
    id_finca int(145),
    foreign key (id_finca) references finca(id) on delete cascade,
	primary key (id)
);

-- table of zona (tabla que indica en que sona se encuentra hubicado un productro /rurar o urbana )
create table zona(
	id int(145) not null AUTO_INCREMENT,
	nombre varchar(45),
	primary key (id)
);
create table discapacidad(
	id int(145) not null AUTO_INCREMENT,
	nombre varchar(45),
	primary key (id)
);

create table conflicto(
	id int(145) not null AUTO_INCREMENT,
	nombre varchar(45),
	primary key (id)
);
create table parentesco(
	id int(145) not null AUTO_INCREMENT,
	nombre varchar(45),
	primary key (id)
);



create table productores(
	id varchar(145) not null,
	nombres LONGTEXT not null,
	apellidos LONGTEXT not null,
	dni int(145) not null,
	fecha_nacimiento date not null,
	telefono int(145) not null,
	id_productor varchar(45),

	id_conflicto int(145),
	id_genero int(145),
	id_organizacion int(145),
	id_finca int(145),
	id_etnia int(145),
	id_parentesco int(145),
	id_discapacitado int(145),
	id_zona int(45),


	foreign key (id_conflicto) references conflicto(id) on delete cascade,
	foreign key (id_parentesco) references parentesco(id) on delete cascade,
	foreign key (id_discapacitado) references discapacidad(id) on delete cascade,
	foreign key (id_genero) references genero(id) on delete cascade,
	foreign key (id_organizacion) references organizacion(id) on delete cascade,
	foreign key (id_finca) references finca(id) on delete cascade,
	foreign key (id_etnia) references grupo_etnico(id) on delete cascade,
	primary key (id)

);

ALTER TABLE productores ADD FOREIGN KEY (id_productor) REFERENCES productores(id);
 
ALTER TABLE productores CHANGE fecha_nacimiento edad int(20);

create table acepta(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT,
	image LONGTEXT,
	fecha_acepta date,
	primary key (id)
);

create table cultivo(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT,
	hectareas float,
	fecha_inicio date,

	id_linea_productiva int(145),
	id_productor varchar(45),
	id_acepta int(145),

	foreign key (id_linea_productiva) references linea_productiva(id) on delete cascade,
	foreign key (id_productor) references productores(id) on delete cascade,
	foreign key (id_acepta) references acepta(id) on delete cascade,
	primary key (id)
);

create table revision_visita(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT,
	fecha_visita date,
	hora_inicio time,
	hora_fin time,
	situcacion_encontrada LONGTEXT,
	recomendaciones LONGTEXT,
	observacion LONGTEXT,
	anexos LONGTEXT,
	imagen LONGTEXT,

	id_cultivo int(145) not null,

	foreign key (id_cultivo) references cultivo(id) on delete cascade,
	primary key (id)
);

create table tipo_beneficio(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT,
	primary key (id)
);

create table beneficio(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT,
	intencidad int(145),
	id_tipo_beneficio int(145),
	foreign key (id_tipo_beneficio) references tipo_beneficio(id) on delete cascade,
	primary key (id)
);

create table productores_beneficio(
	id int(145) not null AUTO_INCREMENT,
	fecha_inicio datetime,
	fecha_fin datetime,
	id_productor varchar(45),
	id_beneficio int(145),

	foreign key (id_productor) references productores(id) on delete cascade,
	foreign key (id_beneficio) references beneficio(id) on delete cascade,

	primary key (id)
);

create table tipo_herramienta(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT,
	precio float,
	marca LONGTEXT,
	primary key (id)
);

create table herramienta(
	id int(145) not null AUTO_INCREMENT,
	descripcion varchar(100),
	id_tipo_herramienta int(145),

	foreign key (id_tipo_herramienta) references tipo_herramienta(id) on delete cascade,

	primary key (id)
);

create table kit(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT,
	image_acta LONGTEXT,
	primary key (id)
);

create table kit_herramienta(
	id int(145) not null AUTO_INCREMENT,
	id_kit int(145),
	id_herramienta int(145),

	foreign key (id_kit) references kit(id) on delete cascade,
	foreign key (id_herramienta) references herramienta(id) on delete cascade,

	primary key (id)
);

create table kit_user(
	id int(145) not null AUTO_INCREMENT,
	id_kit_herramienta int(145),
	id_productor varchar(45),

	foreign key (id_kit_herramienta) references kit_herramienta(id) on delete cascade,
	foreign key (id_productor) references productores(id) on delete cascade,

	primary key (id)
);







create table tipo_infraestructura(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	primary key (id)
);

create table infraestructura (
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	descripcion LONGTEXT,
	planos LONGTEXT,
	direccion LONGTEXT,
	responsable LONGTEXT,
	covertura LONGTEXT,
	id_tipo_obra int(145),
	id_vereda int(145),

	foreign key (id_tipo_obra) references tipo_infraestructura(id) on delete cascade,
	foreign key (id_vereda) references vereda(id) on delete cascade,
	primary key (id)
);

create table ente_convenio (
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	hubicacion LONGTEXT,
	descripcion LONGTEXT,
	id_municipio int(145),
	foreign key (id_municipio) references municipio(id) on delete cascade,
	primary key (id)
);

create table convenio(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	id_infraestructura int(145),
	id_ente_convenio int(145),
	foreign key (id_infraestructura) references infraestructura(id) on delete cascade,
	foreign key (id_ente_convenio) references ente_convenio(id) on delete cascade,
	primary key (id)
);

create table objetivo(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT,
	descripcion LONGTEXT,
	primary key (id)
);

create table indicadores(
	id varchar(45) not null,
	descripcion LONGTEXT not null,
	meta int(145),
	observacion LONGTEXT,
	fuente_verificacion LONGTEXT,
	archivo LONGTEXT,
	id_objetivo int(145),
	foreign key (id_objetivo) references objetivo(id) on delete cascade,
	primary key (id)
);
