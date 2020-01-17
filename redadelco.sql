drop database redadelco

create database redadelco;

use redadelco

create table cadena_productiva(
    id int(45) not null AUTO_INCREMENT,
    nombre varchar(45) not null,
    primary key (id)
);

create table linea_productiva(
    id int(45) not null AUTO_INCREMENT,
    nombre varchar(45) not null,
    id_cadena_productiva int(45) not null,
    foreign key (id_cadena_productiva) references cadena_productiva(id) on delete cascade,
    primary key (id)
);

create table genero(
	id int(45) not null AUTO_INCREMENT ,
	nombre varchar(45),
	primary key (id)
);

create table grupo_etnico(
	id int(45) not null AUTO_INCREMENT ,
	nombre varchar(45),
	primary key (id)
);

create table municipio(
	id int(45) not null AUTO_INCREMENT ,
	nombre varchar(45),
	primary key (id)
);

create table vereda(
	id int(45) not null AUTO_INCREMENT ,
	nombre varchar(45),
    id_municipio int(45) not null,
    foreign key (id_municipio) references municipio(id) on delete cascade,
	primary key (id)
);

create table finca(
	id int(45) not null AUTO_INCREMENT ,
	nombre varchar(45),
    cant_hectareas float not null,
    direccion varchar(45) not null,
    id_vereda int(45) not null,
    foreign key (id_vereda) references vereda(id) on delete cascade,
	primary key (id)
);

create table organizacion(
	id int(45) not null AUTO_INCREMENT ,
	nombre varchar(45),
	descripcion varchar(45),
	contacto int(45),
	tema_capacitacion varchar(45),
	tema_empresarial varchar(45),
	id_vereda int(45),
	representante varchar(45),
	foreign key (id_vereda) references vereda(id) on delete cascade,
	primary key (id)
);

create table diagnostico(
	id int(45) not null AUTO_INCREMENT ,
	nombre varchar(45),
    fecha date not null,
    hora_inicio time not null,
    hora_fin time not null,
    imagen varchar(45) not null,
    id_finca int(45) not null,
    foreign key (id_finca) references finca(id) on delete cascade,
	primary key (id)
);

create table productores(
	id int(45) not null AUTO_INCREMENT,
	nombres varchar(45) not null,
	apellidos varchar(45) not null,
	dni int(45) not null,
	fecha_nacimiento date not null,
	telefono int(45) not null,
	victima int(45) not null,

	id_genero int(45) not null,
	id_organizacion int(45) not null,
	id_finca int(45) not null,
	id_etnia int(45) not null,
	id_parentesco int(45) not null,

	foreign key (id_genero) references genero(id) on delete cascade,
	foreign key (id_organizacion) references organizacion(id) on delete cascade,
	foreign key (id_finca) references finca(id) on delete cascade,
	foreign key (id_etnia) references grupo_etnico(id) on delete cascade,
	primary key (id)

);

ALTER TABLE productores ADD FOREIGN KEY (id_parentesco) REFERENCES productores(id);

create table acepta(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	image varchar(45) not null,
	fecha_acepta date not null,
	primary key (id)
);

create table cultivo(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	hectareas float not null,
	fecha_inicio date not null,

	id_linea_productiva int(45) not null,
	id_productor int(45) not null,
	id_acepta int(45) not null,

	foreign key (id_linea_productiva) references linea_productiva(id) on delete cascade,
	foreign key (id_productor) references productores(id) on delete cascade,
	foreign key (id_acepta) references acepta(id) on delete cascade,
	primary key (id)
);

create table revision_visita(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	fecha_visita date not null,
	hora_inicio time not null,
	hora_fin time not null,
	situcacion_encontrada varchar(1000) not null,
	recomendaciones varchar(1000) not null,
	observacion varchar(1000) not null,
	anexos varchar(1000) not null,
	imagen varchar(1000) not null,

	id_cultivo int(45) not null,

	foreign key (id_cultivo) references cultivo(id) on delete cascade,
	primary key (id)
);

create table tipo_beneficio(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	primary key (id)
);

create table beneficio(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	intencidad int(45) not null,
	id_tipo_beneficio int(45) not null,
	foreign key (id_tipo_beneficio) references tipo_beneficio(id) on delete cascade,
	primary key (id)
);

create table productores_beneficio(
	id int(45) not null AUTO_INCREMENT,
	fecha_inicio datetime not null,
	fecha_fin datetime not null,
	id_productor int(45) not null,
	id_beneficio int(45) not null,

	foreign key (id_productor) references productores(id) on delete cascade,
	foreign key (id_beneficio) references beneficio(id) on delete cascade,

	primary key (id)
);

create table tipo_herramienta(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	precio float not null,
	marca varchar(45) not null,
	primary key (id)
);

create table herramienta(
	id int(45) not null AUTO_INCREMENT,
	descripcion varchar(100) not null,
	id_tipo_herramienta int(45) not null,

	foreign key (id_tipo_herramienta) references tipo_herramienta(id) on delete cascade,

	primary key (id)
);

create table kit(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	image_acta varchar(45) not null,
	primary key (id)
);

create table kit_herramienta(
	id int(45) not null AUTO_INCREMENT,
	id_kit int(45) not null,
	id_herramienta int(45) not null,

	foreign key (id_kit) references kit(id) on delete cascade,
	foreign key (id_herramienta) references herramienta(id) on delete cascade,

	primary key (id)
);

create table kit_user(
	id int(45) not null AUTO_INCREMENT,
	id_kit_herramienta int(45) not null,
	id_productor int(45) not null,

	foreign key (id_kit_herramienta) references kit_herramienta(id) on delete cascade,
	foreign key (id_productor) references productores(id) on delete cascade,

	primary key (id)
);







create table tipo_infraestructura(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	primary key (id)
);

create table infraestructura (
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	descripcion varchar(45),
	planos varchar(45),
	direccion varchar(45),
	responsable varchar(45),
	covertura varchar(45),
	id_tipo_obra int(45),
	id_vereda int(45),

	foreign key (id_tipo_obra) references tipo_infraestructura(id) on delete cascade,
	foreign key (id_vereda) references vereda(id) on delete cascade,
	primary key (id)
);

create table ente_convenio (
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	hubicacion varchar(45),
	descripcion varchar(45),
	id_municipio int(45),
	foreign key (id_municipio) references municipio(id) on delete cascade,
	primary key (id)
);

create table convenio(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	id_infraestructura int(45),
	id_ente_convenio int(45),
	foreign key (id_infraestructura) references infraestructura(id) on delete cascade,
	foreign key (id_ente_convenio) references ente_convenio(id) on delete cascade,
	primary key (id)
);


create table indicadores(
	id int(45) not null AUTO_INCREMENT,
	nombre varchar(45) not null,
	objetivo varchar(45),
	meta int(45),
	observacion varchar(45),
	fuente_verificacion varchar(45),
	archivo varchar(45),
	primary key (id)
);