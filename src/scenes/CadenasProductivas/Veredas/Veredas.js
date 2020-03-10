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
	const { dateInfra } = useSelector(state => state.cade)

	useEffect(() => {
		dispatch(cade.getDateInfra());
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
				{
					dateInfra && dateInfra.municipio.map((municipio) => (
						<Card title={<p>{municipio.nombre}</p>}
							extra={<Search
								placeholder="Buscar Usuario"
							/>}
						>
							<Table dataSource={municipio.veredas} rowKey="id">
								<Column title="Codigo" dataIndex="id" Key="id" />
								<Column title="nombre" dataIndex="nombre" Key="nombre" />
							</Table>
						</Card>
					))
				}


			</div>
		</div>
	)
}
