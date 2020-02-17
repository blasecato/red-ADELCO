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
	
	const { genderDate } = useSelector(state => state.producer)
	const { genderCount } = useSelector(state => state.producer)
	console.log(genderCount && genderCount.woman);
	

	useEffect(() => {
		dispatch(producer.getProducerDate());
		dispatch(producer.getGender())
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
									<Link to="/profile">Ver Mas</Link>
								</span>
							)}
						/>
					</Table>
				</Card>

			</div>
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Mujeres</h1>
				</div>
					{genderCount &&  <Card title={<p>Total de mujeres {genderCount.woman.count.sum}</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={genderCount.woman.arraywoman} rowKey="id">
						<Column title="Nombres." dataIndex="nombres" Key="nombres" />
						<Column title="Apellidos." dataIndex="apellidos" Key="apellidos" />
						<Column title="Numero de identificacion." dataIndex="dni" Key="dni" />
						<Column title="Edad." dataIndex="edad" Key="edad" />
						<Column
							title="Codigo"
							dataIndex="id"
							Key="id"
						/>
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
				</Card>}
				<div className="users--title">
					<h1>Hombres</h1>
				</div>
				{genderCount &&  <Card title={<p>Total de Hombres {genderCount.men.count.count}</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={genderCount.men.arraymen} rowKey="id">
						<Column title="Nombres." dataIndex="nombres" Key="nombres" />
						<Column title="Apellidos." dataIndex="apellidos" Key="apellidos" />
						<Column title="Numero de identificacion." dataIndex="dni" Key="dni" />
						<Column title="Edad." dataIndex="edad" Key="edad" />
						<Column
							title="Codigo"
							dataIndex="id"
							Key="id"
						/>
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
				</Card>}

			</div>
		</div>
	)
}
