import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { crop } from '../../../services/crop/cropActions';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Cultivo = () => {

	const dispatch = useDispatch()
	const { cropsProducer } = useSelector(state => state.crop)

	const data = [
		{
			key: '1',
			firstName: 'John',
			lastName: 'Brown',
			age: 3234324367,
			address: 'Jefe Finca',
			tags: ['Cacao', 'Cafe'],
		},
		{
			key: '2',
			firstName: 'Jim',
			lastName: 'Green',
			age: 4243543543,
			address: 'Esposa',
			tags: ['Cacao', 'Caña', 'Cafe'],
		},
		{
			key: '3',
			firstName: 'Joe',
			lastName: 'Black',
			age: 3234543543,
			address: 'Hija',
			tags: ['Cacao', 'Caña'],
		},
	]

	useEffect(() => {
		dispatch(crop.getCropsProducer())
	}, [])

	console.log("cropsProducer==>", cropsProducer)

	return (
		<div className="queryuser">
			<LayoutHome />

			<div className="queryuser__content">
				<div className="users--title">
					<h1>Listado de Cultivos</h1>
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
