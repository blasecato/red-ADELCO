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

export const Afts = (props) => {

	// const { dateLine } = useSelector(state => state.cade)
	// const { lineProductives } = useSelector(state => state.crop)
	// const dispatch = useDispatch()
	// const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

	// useEffect(() => {
	// 	dispatch(organizationActions.getOrganization())
	// 	dispatch(cropActions.getLineProductive())
	// }, [])
	// console.log("asddsfs", lineProductives)

	// const handleOrganization = (value) => {
	// 	console.log(value)
	// 	dispatch(cadeActions.get(value))
	// }

	// console.log("dateLine==>", dateLine)

	return (
		<div className="deleteupdateuser beneficioarios-org">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar AFT</h1>
				</div>
				
				 <Card title={"Beneficiarios : " }>
					<Table >
						<Column title="NIT" dataIndex="dniProductor2.nombres" key="nombres" />
						<Column title="Organizacion." dataIndex="dniProductor2.apellidos" key="apellidos" />
						<Column title="Representante" dataIndex="dniProductor2.edad" key="edad" />
						<Column title="Municipio" dataIndex="idMunicipio2.nombre" key="municipio" />
						<Column title="Banco" dataIndex="hectareas" key="hectareas" />
						<Column title="Cuenta bancarea" dataIndex="hectareas" key="hectareas" />
						<Column title="Matricula" dataIndex="idMunicipio2.nombre" key="municipio" />
					</Table>
				</Card>
			</div>

		</div>
	)
}
