import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { cade } from '../../../services/line-cadena/line-cadenaActions';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Vereda = () => {

	const dispatch = useDispatch()
	const { veredas } = useSelector(state => state.cade)

	useEffect(() => {
		dispatch(cade.getVeredas());
	}, [])

	return (
		<div className="queryuser">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Listado de Veredas</h1>
				</div>
				<div className="button">
					<Link to="/register-vereda" className="btn-register">Registrar Vereda</Link>
				</div>
				<Card title={<p>Veredas</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={veredas} rowKey="id">
						<Column title="Codigo" dataIndex="id" Key="id" />
						<Column title="nombre" dataIndex="nombre" Key="nombre" />
						<Column title="Municipio" dataIndex="idMunicipio2.nombre" Key="idMunicipio2" />

					</Table>
				</Card>
			</div>
		</div>
	)
}
