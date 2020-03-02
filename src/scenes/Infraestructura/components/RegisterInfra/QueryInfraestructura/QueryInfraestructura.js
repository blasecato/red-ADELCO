import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';

import LayoutHome from "../../../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from 'react-redux';
import { cade } from '../../../../../services/line-cadena/line-cadenaActions';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const InfraQuery = () => {

	const dispatch = useDispatch()
	const { infra } = useSelector(state => state.cade)

	useEffect(() => {
		dispatch(cade.getInfra());
	}, [])

	console.log("infra==>", infra)

	return (
		<div className="queryuser">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar Infraestructura</h1>
				</div>
				<Card title="Listado de Beneficiarios"
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={infra} rowKey="id">
						<Column title="Nombre." dataIndex="nombre" Key="nombre" />
						<Column title="Covertura." dataIndex="covertura" Key="covertura" />
						<Column title="Municipio." dataIndex="idVereda2.idMunicipio2.nombre" Key="idVereda2" />
						<Column title="Responsable." dataIndex="responsable" Key="responsable" />
						<Column title="Descripcion." dataIndex="descripcion" Key="descripcion" />
						<Column
							title="Vereda"
							dataIndex="idVereda2.nombre"
							Key="idVereda2"
						/>
					</Table>
				</Card>

			</div>
		</div>
	)
}
