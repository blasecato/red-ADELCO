import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';

import LayoutHome from "../../../../../components/LayoutHome/LayoutHome";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const InfraQuery = () => {

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
					<Table>
						<Column title="Nombre." dataIndex="nombres" Key="nombres" />
						<Column title="Covertura." dataIndex="apellidos" Key="apellidos" />
						<Column title="Municipio." dataIndex="idOrganizacion2.nombre" Key="idOrganizacion2" />
						<Column title="Responsable." dataIndex="idParentesco2.nombre" Key="idParentesco2" />
						<Column title="Estado." dataIndex="idParentesco2.nombre" Key="idParentesco2" />
						<Column
							title="Vereda"
							dataIndex="idConflicto2.nombre"
							Key="idConflicto2"
						/>
					</Table>
				</Card>

			</div>
		</div>
	)
}
