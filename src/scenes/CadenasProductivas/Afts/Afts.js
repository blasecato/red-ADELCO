import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Button, Select, Form } from 'antd';
import { Input, Icon } from 'antd';
import { atf as atfActions } from '../../../services/atf/AtfActions';

import { crop as cropActions } from "../../../services/crop/cropActions";
import { cade as cadeActions } from "../../../services/line-cadena/line-cadenaActions";

import { useSelector, useDispatch } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

const { Option } = Select;
const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Afts = (props) => {


	const { atf } = useSelector(state => state.atf)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(atfActions.getAtf())
	}, [])

	return (
		<div className="deleteupdateuser beneficioarios-org">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar AFT</h1>
				</div>
				
				 <Card title={"Beneficiarios : " }>
					<Table dataSource={atf} rowKey="id">
						<Column title="NIT" dataIndex="nit" key="nit" />
						<Column title="Organizacion." dataIndex="idOrganizacion2.nombre" key="organizacion" />
						<Column title="Email" dataIndex="email" key="email" />
						<Column title="Banco" dataIndex="banco" key="banco" />
						<Column title="Cuenta bancarea" dataIndex="cuenta" key="cuenta" />
						<Column title="Matricula" dataIndex="matricula" key="matricula" />
						<Column title="DV" dataIndex="dv" key="dv" />
						<Column title="Avances" dataIndex="avances" key="avances" />
					</Table>
				</Card>
			</div>

		</div>
	)
}
