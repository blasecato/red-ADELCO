import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { crop } from '../../../services/crop/cropActions';
import { JsonToExcel } from 'react-json-excel';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const Cultivo = () => {

	const dispatch = useDispatch()
	const { cropsProducer } = useSelector(state => state.crop)

	useEffect(() => {
		dispatch(crop.getCropsProducer())
	}, [])
	console.log("cropsProducer==>", cropsProducer)


	const className = 'class-name-for-style',
		filename = 'Excel-file',
		fields = {
			"index": "Index",
			"guid": "GUID"
		},
		style = {
			padding: "5px"
		},
		data = [
			{ index: 0, guid: 'asdf231234' },
			{ index: 1, guid: 'wetr2343af' }
		];
	return (
		<div className="queryuser">
			<LayoutHome />
			<JsonToExcel
				data={data}
				fileformat={"xls"}
				className={className}
				filename={filename}
				fields={fields}
				style={style}
			/>
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Listado de Cultivos</h1>
				</div>
				<div className="button">
					<Link to="/registercultivos" className="btn-register">Registrar Cultivo</Link>
				</div>

				<Card title={<p>Cultivos</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={cropsProducer} rowKey="id">
						<Column title="identificacion propietario." dataIndex="dniProductor" Key="dniProductor" />
						<Column title="nombres propietario" dataIndex="codigoProductor2.nombres" Key="codigoProductor2" />
						<Column title="hectareas." dataIndex="hectareas" Key="hectareas" />
						<Column title="vereda." dataIndex="idVereda2.nombre" Key="idVereda2" />
						<Column title="municipio" dataIndex="idMunicipio2.nombre" Key="idMunicipio2" />
						<Column title="linea productiva" dataIndex="idLineaProductiva2.nombre" Key="idLineaProductiva2" />
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
