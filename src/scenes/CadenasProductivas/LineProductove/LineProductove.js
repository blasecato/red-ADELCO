import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Button, Select, Form } from 'antd';
import { Input, Icon } from 'antd';
import { organization as organizationActions } from '../../../services/organization/organizationActions';
import { crop as cropActions } from "../../../services/crop/cropActions";

import { useSelector, useDispatch } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

const { Option } = Select;
const { Search } = Input;
const { Column, ColumnGroup } = Table;

const LineProductove = (props) => {

    const { organizations, organization } = useSelector(state => state.organization)
    const { lineProductives } = useSelector(state => state.crop)
	const dispatch = useDispatch()
	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

	useEffect(() => {
        dispatch(organizationActions.getOrganization())
        dispatch(cropActions.getLineProductive())
    }, [])
    console.log("asddsfs", lineProductives)

	const handleOrganization = (value) => {
		console.log(value)
		dispatch(organizationActions.get(value))
	}

	console.log("organization==>", organization)
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
	]

	return (
		<div className="deleteupdateuser beneficioarios-org">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar Cultivos por Linea Productiva</h1>
				</div>
				<Form layout="inline" className="RegisterOrg--form" >
					<Form.Item className="item">
						<label>Linea Productiva</label>
						<div className="select-content">
							{getFieldDecorator('id', {
								rules: [{ required: true, message: 'Porfavor seleccione una linea productiva' }],
							})(
								<Select className="select" onChange={handleOrganization} placeholder="Seleccione Una linea productiva">
									{lineProductives && lineProductives.map((line, index) => <Option key={index} value={line.id} >{line.nombre}</Option>)}
								</Select>
							)}
						</div>
					</Form.Item>
				</Form>
				{organization && <Card title={"Beneficiarios : " + organization.countPersons.countPeople}>
					<Table dataSource={organization.datePersons[0]}>
						<Column title="Nombres." dataIndex="nombres" key="firstName" />
						<Column title="Apellidos." dataIndex="apellidos" key="lastName" />
						<Column title="DNI" dataIndex="dni" key="dni" />
						<Column title="Telefono" dataIndex="telefono" key="telefono" />
						<Column title="Edad" dataIndex="edad" key="age" />
					</Table>
				</Card>}
			</div>

		</div>
	);


}

export const LineProductoves = Form.create({ name: 'formLogin' })(LineProductove);