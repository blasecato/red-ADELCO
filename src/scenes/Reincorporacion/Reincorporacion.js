import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { json2excel, excel2json } from 'js2excel';
import exel from "../../assets/image/excel.png";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Reincorporacion = () => {

	

	// const handleToExel = () => {
	// 	const jsonConvert = []
	// 	cropsProducer.forEach(item => {
	// 		jsonConvert.push({
	// 			cosigo: item.id,
	// 			Municipio: item.idMunicipio2.nombre,
	// 			Vereda: item.idVereda2.nombre,
	// 			CodigoProductor: item.codigoProductor2.nombres + ' ' + item.codigoProductor2.apellidos,
	// 			LineaProductiva: item.idLineaProductiva2.nombre,
	// 			dniProductor: item.dniProductor,
	// 			hectareas: item.hectareas
	// 		})
	// 	})
	// 	console.log(jsonConvert)
	// 	json2excel({
	// 		data: jsonConvert,
	// 		name: 'user-info-data',
	// 		formateDate: 'yyyy/mm/dd'
	// 	});
	// }


	return (
		<div className="queryuser">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Victimas</h1>
				</div>
				<div className="btn-exel">
					<button className="btn-exel--exel"
						// onClick={handleToExel}
					><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				<Card title={<p>Ex Combatintes</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table  rowKey="id">
						<Column title="Nombre." dataIndex="dniProductor" Key="dniProductor" />
						<Column title="Apellido" dataIndex="codigoProductor2.nombres" Key="codigoProductor2" />
						<Column title="DNI" dataIndex="hectareas" Key="hectareas" />
						<Column title="Telefono" dataIndex="idVereda2.nombre" Key="idVereda2" />
						<Column title="CODIGO" dataIndex="idMunicipio2.nombre" Key="idMunicipio2" />
						<Column title="Edad" dataIndex="idLineaProductiva2.nombre" Key="idLineaProductiva2" />
					
					</Table>
				</Card>
			</div>
            <div className="queryuser__content">
				<div className="users--title">
					<h1>EX Combatintes</h1>
				</div>
				<div className="btn-exel">
					<button className="btn-exel--exel"
						// onClick={handleToExel}
					><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				<Card title={<p>Victimas</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table  rowKey="id">
                    <Column title="Nombre." dataIndex="dniProductor" Key="dniProductor" />
						<Column title="Apellido" dataIndex="codigoProductor2.nombres" Key="codigoProductor2" />
						<Column title="DNI" dataIndex="hectareas" Key="hectareas" />
						<Column title="Telefono" dataIndex="idVereda2.nombre" Key="idVereda2" />
						<Column title="CODIGO" dataIndex="idMunicipio2.nombre" Key="idMunicipio2" />
						<Column title="Edad" dataIndex="idLineaProductiva2.nombre" Key="idLineaProductiva2" />
					</Table>
				</Card>
			</div>
		</div>
	)
}
