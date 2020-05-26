import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Button, Select, Form } from 'antd';
import { Input, Icon } from 'antd';
import { organization as organizationActions } from '../../../services/organization/organizationActions';
import { kit as kitActions } from '../../../services/Kit/KitActions';
import { crop as cropActions } from "../../../services/crop/cropActions";
import { cade as cadeActions } from "../../../services/line-cadena/line-cadenaActions";

import { useSelector, useDispatch } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

const { Option } = Select;
const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const KitUser = (props) => {

	// const { dateLine } = useSelector(state => state.cade)
	const { kit } = useSelector(state => state.kit)
	const dispatch = useDispatch()
	// const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

	useEffect(() => {
		dispatch(kitActions.getKitUser())
	}, [])
	console.log("asddsfs", kit)

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
					<h1>Usuarios con kit de usuarios</h1>
				</div>
				
				 <Card title={"Beneficiarios : " }>
					<Table >
						<Column title="Nombre" dataIndex="dniProductor2.nombres" key="nombres" />
						<Column title="Direccion" dataIndex="dniProductor2.apellidos" key="apellidos" />
					</Table>
				</Card>
			</div>

		</div>
	)
}
