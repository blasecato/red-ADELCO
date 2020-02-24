import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const OrgQuery = () => {

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
					<Table>
						<Column title="Nombre." dataIndex="nombres" Key="nombres" />
						<Column title="Municipio." dataIndex="apellidos" Key="apellidos" />
						<Column title="Vereda." dataIndex="idOrganizacion2.nombre" Key="idOrganizacion2" />
						<Column title="Descripcion." dataIndex="idParentesco2.nombre" Key="idParentesco2" />
						<Column
							title="Representante"
							dataIndex="idConflicto2.nombre"
							Key="idConflicto2"
						/>
					</Table>
				</Card>

			</div>
		</div>
	)
}
