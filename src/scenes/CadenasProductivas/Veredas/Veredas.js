import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Vereda = () => {

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
					<Table dataSource={data} rowKey="id">
						<Column title="Codigo" dataIndex="id" Key="id" />
						<Column title="nombre" dataIndex="nombre" Key="nmbre" />
						<Column title="Municipio" dataIndex="idMunicipio2.nombre" Key="idMunicipio2" />
						
					</Table>
				</Card>
			</div>
		</div>
	)
}
