import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Button, Select, Form } from 'antd';
import { Input, Icon } from 'antd';
import { atf as atfActions } from '../../../services/atf/AtfActions';

import { crop as cropActions } from "../../../services/crop/cropActions";
import { organization as organizationActions } from "../../../services/organization/organizationActions";

import { useSelector, useDispatch } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

const { Option } = Select;
const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Diagnosticos = (props) => {


	const { organizations } = useSelector(state => state.organization)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(organizationActions.getDiagnostico())
	}, [])

	console.log('hla',organizations)

	return (
		<div className="deleteupdateuser beneficioarios-org">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Ver Diagnosticos</h1>
				</div>
				
				 <Card title={"Diagnosticos : " }>
					<Table dataSource={organizations} rowKey="id">
						<Column title="DNI beneficiario" dataIndex="dniProductor" key="dni" />
						<Column title="Hectareas" dataIndex="hectareas" key="hectareas" />
						<Column title="Pocision Diagnostico" dataIndex="diagnosticos.nombre" key="nombre" />
					</Table>
				</Card>
			</div>

		</div>
	)
}
