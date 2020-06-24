import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { json2excel, excel2json } from 'js2excel';
import exel from "../../assets/image/excel.png";
import { producer } from '../../services/Producer/ProducerActions';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Reincorporacion = () => {

	const dispatch = useDispatch()
	const { incorporacionDate } = useSelector(state => state.producer)

	useEffect(() => {
		dispatch(producer.getProducerIncorporacion());
	}, [])

	// const handleToExel = () => {
	// 	const jsonConvert = []
	// 	cropsProducer.forEach(item => {
	// 		jsonConvert.push({
	// 			codigo: item.id,
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
				<Card title={<p>Victimas: {incorporacionDate && incorporacionDate.victimsProducurs.length}</p>}
					
				>
					{incorporacionDate && <Table rowKey="dni" dataSource={incorporacionDate.victimsProducurs}>
						<Column title="Nombre." dataIndex="nombres" Key="nombres" />
						<Column title="Apellido" dataIndex="apellidos" Key="apellidos" />
						<Column title="DNI" dataIndex="dni" Key="dni" />
						<Column title="Telefono" dataIndex="telefono" Key="telefono" />
						<Column title="Edad" dataIndex="edad" Key="edad" />
					</Table>}
				</Card>
			</div>
			<div className="queryuser__content">
				<div className="users--title">
					<h1>EX Combatientes</h1>
				</div>
				<div className="btn-exel">
					<button className="btn-exel--exel"
					//onClick={handleToExel}
					><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				<Card title={<p>EX Combatientes: {incorporacionDate && incorporacionDate.excombatantsProducurs.length}</p>}
					
				>
					{incorporacionDate && <Table rowKey="id" dataSource={incorporacionDate.excombatantsProducurs}>
						<Column title="Nombre." dataIndex="nombres" Key="nombres" />
						<Column title="Apellido" dataIndex="apellidos" Key="apellidos" />
						<Column title="DNI" dataIndex="dni" Key="dni" />
						<Column title="Telefono" dataIndex="telefono" Key="telefono" />
						<Column title="Edad" dataIndex="edad" Key="edad" />
					</Table>}
				</Card>
			</div>
		</div>
	)
}
