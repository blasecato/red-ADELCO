import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Button, Select, Form } from 'antd';
import { Input, Icon } from 'antd';
import { organization as organizationActions } from '../../../services/organization/organizationActions';
import { crop as cropActions } from "../../../services/crop/cropActions";
import { cade as cadeActions } from "../../../services/line-cadena/line-cadenaActions";

import { useSelector, useDispatch } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

const { Option } = Select;
const { Search } = Input;
const { Column, ColumnGroup } = Table;

const LineProductove = (props) => {

	const { dateLine } = useSelector(state => state.cade)
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
		dispatch(cadeActions.get(value))
	}

	console.log("dateLine==>", dateLine)

	return (
		<div className="deleteupdateuser beneficioarios-org">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar Cadenas Productivas por Linea Productiva</h1>
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
				{dateLine && <Card title={"Beneficiarios : " + dateLine.countCrop.countCrops}>
					<Table dataSource={dateLine.dataCrops} rowKey="dniProductor2.dni">
						<Column title="DNI productor." dataIndex="dniProductor2.dni" key="dni" />
						<Column title="Nombres." dataIndex="dniProductor2.nombres" key="nombres" />
						<Column title="Apellidos." dataIndex="dniProductor2.apellidos" key="apellidos" />
						<Column title="Sexo." dataIndex="dniProductor2.idGenero.nombre" key="genero" />
						<Column title="Etnia." dataIndex="dniProductor2.idEtnia.nombre" key="etnia" />
						<Column title="Edad" dataIndex="dniProductor2.edad" key="edad" />
						<Column title="Hectareas" dataIndex="hectareas" key="hectareas" />
						<Column title="Municipio" dataIndex="idMunicipio2.nombre" key="municipio" />
						<Column title="Linea Productiva" dataIndex="idLineaProductiva2.nombre" key="idLineaProductiva2" />
						
					</Table>
				</Card>}
			</div>

		</div>
	)
}

export const LineProductoves = Form.create({ name: 'formLogin' })(LineProductove);