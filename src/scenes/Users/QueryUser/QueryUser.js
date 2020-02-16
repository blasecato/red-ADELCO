import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { producer } from '../../../services/Producer/ProducerActions';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const QueryUser = () => {

	const dispatch = useDispatch()
	const data = [
		{
			key: '1',
			firstName: 'John',
			lastName: 'Brown',
			age: 32,
			address: 'Jefe Finca',
			tags: ['Cacao', 'Cafe'],
		},
		{
			key: '2',
			firstName: 'Jim',
			lastName: 'Green',
			age: 42,
			address: 'Esposa',
			tags: ['Cacao', 'Caña', 'Cafe'],
		},
		{
			key: '3',
			firstName: 'Joe',
			lastName: 'Black',
			age: 32,
			address: 'Hija',
			tags: ['Cacao', 'Caña'],
		},
	]
	const { genderDate } = useSelector(state => state.producer)

	useEffect(() => {
		dispatch(producer.getProducerDate())
	}, [])

	return (
		<div className="queryuser">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar Usuarios</h1>
				</div>
				<Card title="Listado de Beneficiarios"
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={genderDate} rowKey="id">
						<Column title="Nombres." dataIndex="nombres" Key="nombres" />
						<Column title="Apellidos." dataIndex="apellidos" Key="apellidos" />
						<Column title="Organizacion." dataIndex="idOrganizacion2.nombre" Key="idOrganizacion2" />
						<Column title="Parentesco." dataIndex="idParentesco2.nombre" Key="idParentesco2" />
						<Column
							title="Conflicto"
							dataIndex="idConflicto2.nombre"
							Key="idConflicto2"
						/>
						<Column
							title="Mas..."
							Key="action"
							render={(text, record) => (
								<span>
									<Link href="/profile">Ver Mas</Link>
								</span>
							)}
						/>
					</Table>
				</Card>

			</div>

		</div>
	)
}
