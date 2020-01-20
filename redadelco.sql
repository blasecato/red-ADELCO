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
    cant_hectareas float not null,
    direccion LONGTEXT not null,
    id_vereda int(145) not null,
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
    fecha date not null,
    hora_inicio time not null,
    hora_fin time not null,
    imagen LONGTEXT not null,
    id_finca int(145) not null,
    foreign key (id_finca) references finca(id) on delete cascade,
	primary key (id)
);

create table productores(
	id int(145) not null AUTO_INCREMENT,
	nombres LONGTEXT not null,
	apellidos LONGTEXT not null,
	dni int(145) not null,
	fecha_nacimiento date not null,
	telefono int(145) not null,
	victima int(145) not null,

	id_genero int(145) not null,
	id_organizacion int(145) not null,
	id_finca int(145) not null,
	id_etnia int(145) not null,
	id_parentesco int(145) not null,

	foreign key (id_genero) references genero(id) on delete cascade,
	foreign key (id_organizacion) references organizacion(id) on delete cascade,
	foreign key (id_finca) references finca(id) on delete cascade,
	foreign key (id_etnia) references grupo_etnico(id) on delete cascade,
	primary key (id)

);

ALTER TABLE productores ADD FOREIGN KEY (id_parentesco) REFERENCES productores(id);

create table acepta(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	image LONGTEXT not null,
	fecha_acepta date not null,
	primary key (id)
);

create table cultivo(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	hectareas float not null,
	fecha_inicio date not null,

	id_linea_productiva int(145) not null,
	id_productor int(145) not null,
	id_acepta int(145) not null,

	foreign key (id_linea_productiva) references linea_productiva(id) on delete cascade,
	foreign key (id_productor) references productores(id) on delete cascade,
	foreign key (id_acepta) references acepta(id) on delete cascade,
	primary key (id)
);

create table revision_visita(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	fecha_visita date not null,
	hora_inicio time not null,
	hora_fin time not null,
	situcacion_encontrada LONGTEXT not null,
	recomendaciones LONGTEXT not null,
	observacion LONGTEXT not null,
	anexos LONGTEXT not null,
	imagen LONGTEXT not null,

	id_cultivo int(145) not null,

	foreign key (id_cultivo) references cultivo(id) on delete cascade,
	primary key (id)
);

create table tipo_beneficio(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	primary key (id)
);

create table beneficio(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	intencidad int(145) not null,
	id_tipo_beneficio int(145) not null,
	foreign key (id_tipo_beneficio) references tipo_beneficio(id) on delete cascade,
	primary key (id)
);

create table productores_beneficio(
	id int(145) not null AUTO_INCREMENT,
	fecha_inicio datetime not null,
	fecha_fin datetime not null,
	id_productor int(145) not null,
	id_beneficio int(145) not null,

	foreign key (id_productor) references productores(id) on delete cascade,
	foreign key (id_beneficio) references beneficio(id) on delete cascade,

	primary key (id)
);

create table tipo_herramienta(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	precio float not null,
	marca LONGTEXT not null,
	primary key (id)
);

create table herramienta(
	id int(145) not null AUTO_INCREMENT,
	descripcion varchar(100) not null,
	id_tipo_herramienta int(145) not null,

	foreign key (id_tipo_herramienta) references tipo_herramienta(id) on delete cascade,

	primary key (id)
);

create table kit(
	id int(145) not null AUTO_INCREMENT,
	nombre LONGTEXT not null,
	image_acta LONGTEXT not null,
	primary key (id)
);

create table kit_herramienta(
	id int(145) not null AUTO_INCREMENT,
	id_kit int(145) not null,
	id_herramienta int(145) not null,

	foreign key (id_kit) references kit(id) on delete cascade,
	foreign key (id_herramienta) references herramienta(id) on delete cascade,

	primary key (id)
);

create table kit_user(
	id int(145) not null AUTO_INCREMENT,
	id_kit_herramienta int(145) not null,
	id_productor int(145) not null,

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
