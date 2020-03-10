import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Button, Select, Form } from 'antd';
import { Input, Icon } from 'antd';
import { organization as organizationActions } from '../../../../services/organization/organizationActions';
import { useSelector, useDispatch } from 'react-redux';

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";

const { Option } = Select;
const { Search } = Input;
const { Column, ColumnGroup } = Table;

const BeneficiariosOrg = (props) => {

	const { organizations } = useSelector(state => state.organization)
  const dispatch = useDispatch()
	
  useEffect(() => {
		dispatch(organizationActions.getOrganization())
	}, [])
	
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
	];
	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
	return (
		<div className="deleteupdateuser beneficioarios-org">
				<LayoutHome />
				<div className="queryuser__content">
					<div className="users--title">
						<h1>Consultar Usuarios por Organizaciones</h1>
					</div>
					<Form layout="inline" className="RegisterOrg--form" >
						<Form.Item className="item">
										<label>Organizacion</label>
										<div className="select-content">
											{getFieldDecorator('id', {
												rules: [{ required: true, message: 'Porfavor seleccione una organizacion' }],
											})(
												<Select className="select" placeholder="Seleccione Una Organizacion">
													{organizations && organizations.map((organization) => <Option key={organization.id} value={organization.id} >{organization.nombre}</Option>)}
												</Select>
											)}
										</div>
						</Form.Item>
					</Form>
					<Card title="Beneficiarios : 93">
						<Table dataSource={data}>
							<Column title="Nombres." dataIndex="firstName" key="firstName" />
							<Column title="Apellidos." dataIndex="lastName" key="lastName" />
							<Column title="DNI" dataIndex="age" key="age" />
							<Column title="Telefono" dataIndex="age" key="age" />
							<Column title="Edad" dataIndex="age" key="age" />
							<Column title="Codigo" dataIndex="age" key="age" />
						</Table>
					</Card>

					<Card title="Mujeres : 13">
						<Table dataSource={data}>
							<Column title="Nombres." dataIndex="firstName" key="firstName" />
							<Column title="Apellidos." dataIndex="lastName" key="lastName" />
							<Column title="DNI" dataIndex="age" key="age" />
							<Column title="Telefono" dataIndex="age" key="age" />
							<Column title="Edad" dataIndex="age" key="age" />
							<Column title="Codigo" dataIndex="age" key="age" />
						</Table>
					</Card>

					<Card title="Hombres : 83">
						<Table dataSource={data}>
							<Column title="Nombres." dataIndex="firstName" key="firstName" />
							<Column title="Apellidos." dataIndex="lastName" key="lastName" />
							<Column title="DNI" dataIndex="age" key="age" />
							<Column title="Telefono" dataIndex="age" key="age" />
							<Column title="Edad" dataIndex="age" key="age" />
							<Column title="Codigo" dataIndex="age" key="age" />
						</Table>
					</Card>

				</div>

			</div>
		);

	
}

export const BeneficiariosOrga = Form.create({ name: 'formLogin' })(BeneficiariosOrg);