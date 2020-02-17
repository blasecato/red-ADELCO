import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { producer } from '../../../services/Producer/ProducerActions';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Cultivo = () => {

	const dispatch = useDispatch()
	
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
          tags: ['Cacao', 'Caña','Cafe'],
        },
        {
          key: '3',
          firstName: 'Joe',
          lastName: 'Black',
          age: 3234543543,
          address: 'Hija',
          tags: ['Cacao', 'Caña'],
        },
      ];

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
					<Table dataSource={data} rowKey="id">
						<Column title="identificacion propietario." dataIndex="nombres" Key="nombres" />
						<Column title="nombres propietario" dataIndex="id" Key="id"/>
						<Column title="hectareas." dataIndex="apellidos" Key="apellidos" />
						<Column title="vereda." dataIndex="dni" Key="dni" />
						<Column title="municipio" dataIndex="edad" Key="edad" />
						<Column title="linea productiva" dataIndex="edad" Key="edad" />
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
