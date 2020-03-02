import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { crop } from '../../../services/crop/cropActions';
import { json2excel, excel2json } from 'js2excel';
import exel from "../../../assets/image/excel.png";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Cultivo = () => {

	const data = [
		{
			"userId": 1,
			"userPhoneNumber": 1888888888,
			"userAddress": 'xxxx',
			"date": '2013/09/10 09:10'  // string
		},
		{
			"userId": 2,
			"userPhoneNumber": 1888888888,
			"userAddress": 'xxxx',
			"date": new Date()
		},
		{
			"userId": 3,
			"userPhoneNumber": 1888888888,
			"userAddress": 'xxxx',
			"date": new Date()
		}
	]

	const dispatch = useDispatch()
	const { cropsProducer } = useSelector(state => state.crop)

	useEffect(() => {
		dispatch(crop.getCropsProducer())
	}, [])

	const handleToExel = () => {
		const jsonConvert = []
		cropsProducer.forEach(item => {
			jsonConvert.push({
				cosigo: item.id,
				Municipio: item.idMunicipio2.nombre,
				Vereda: item.idVereda2.nombre,
				CodigoProductor: item.codigoProductor2.nombres + ' ' + item.codigoProductor2.apellidos,
				LineaProductiva: item.idLineaProductiva2.nombre,
				dniProductor: item.dniProductor,
				hectareas: item.hectareas
			})
		})
		console.log(jsonConvert)
		json2excel({
			data: jsonConvert,
			name: 'user-info-data',
			formateDate: 'yyyy/mm/dd'
		});
	}


	return (
		<div className="queryuser">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Listado de Cultivos</h1>
				</div>
				<div className="button">
					<Link to="/registercultivos" className="btn-register">Registrar Cultivo</Link>
				</div>
				<div className="btn-exel">
					<button className="btn-exel--exel"
						onClick={handleToExel}
					><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				<Card title={<p>Cultivos</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={cropsProducer} rowKey="id">
						<Column title="identificacion propietario." dataIndex="dniProductor" Key="dniProductor" />
						<Column title="nombres propietario" dataIndex="codigoProductor2.nombres" Key="codigoProductor2" />
						<Column title="hectareas." dataIndex="hectareas" Key="hectareas" />
						<Column title="vereda." dataIndex="idVereda2.nombre" Key="idVereda2" />
						<Column title="municipio" dataIndex="idMunicipio2.nombre" Key="idMunicipio2" />
						<Column title="linea productiva" dataIndex="idLineaProductiva2.nombre" Key="idLineaProductiva2" />
						<Column
							title="Mas..."
							Key="action"
							render={(text, record) => (
								<span>
									<Link to="/profile">Ver Mas</Link>
								</span>
							)}
						/>
					</Table>
				</Card>
			</div>
		</div>
	)
}
