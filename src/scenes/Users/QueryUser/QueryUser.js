import React, { useEffect, useState } from 'react';
import { Table, Divider, Tag, Card, Input, Button, Icon, Select ,Form, } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { producer } from '../../../services/Producer/ProducerActions';

import { json2excel, excel2json } from 'js2excel';
import exel from "../../../assets/image//excel.png";

const { Search } = Input;
const { Column, ColumnGroup } = Table;
const { Option } = Select

const QueryUserF = ({ history,form }) => {

	const dispatch = useDispatch()
	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, validateFields } = form

	const { genderDate } = useSelector(state => state.producer)
	const { genderCount } = useSelector(state => state.producer)

	const [state, setstate] = useState({
		searchText: '',
		searchedColumn: '',
	})

	const columns = [
		{
			title: 'nombres',
			dataIndex: 'nombres',
			key: 'nombres',
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Input
						ref={node => {
							//searchInput = node;
						}}
						//placeholder={`Search ${dataIndex}`}
						value={selectedKeys[0]}
						onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
						onPressEnter={() => handleSearch(selectedKeys, confirm, 'nombres')}
						style={{ width: 188, marginBottom: 8, display: 'block' }}
					/>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, 'nombres')}
						icon="search"
						size="small"
						style={{ width: 90, marginRight: 8 }}
					>
						Search
					</Button>
					<Button
						onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
						Reset
					</Button>
				</div>
			),
		},
		{
			title: 'apellidos',
			dataIndex: 'apellidos',
			key: 'apellidos',
		},
		{
			title: 'telefono',
			dataIndex: 'telefono',
			key: 'telefono',
		},
		{
			title: 'dni',
			dataIndex: 'dni',
			key: 'dni',
		},
		{
			title: 'Genero',
			dataIndex: 'idGenero2.nombre',
			key: 'idGenero',
		},
		{
			title: 'codigo',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'edad',
			dataIndex: 'edad',
			key: 'edad',
		},
		{
			title: 'Conflicto',
			dataIndex: 'idConflicto.nombre',
			key: 'idOrganizacion2',
			//...getColumnSearchProps('idOrganizacion2.nombre'),
		},
		{
			title: 'Discapacidad',
			dataIndex: 'idDiscapacitado.nombre',
			key: 'idOrganizacion2',
			//...getColumnSearchProps('idOrganizacion2.nombre'),
		},
		{
			title: 'Etnia',
			dataIndex: 'idEtnia.nombre',
			key: 'idOrganizacion2',
			//...getColumnSearchProps('idOrganizacion2.nombre'),
		},
	];

	useEffect(() => {
		dispatch(producer.getProducerDate());
		dispatch(producer.getGender())
	}, [])

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm()
		setstate({
			searchText: selectedKeys[0],
			searchedColumn: dataIndex,
		})
	}

	const handleReset = clearFilters => {
		clearFilters()
		setstate({ ...state, searchText: '' });
	}

	const getColumnSearchProps = dataIndex => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={node => {
						this.searchInput = node;
					}}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Button
					type="primary"
					onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
					icon="search"
					size="small"
					style={{ width: 90, marginRight: 8 }}
				>
					Search
        </Button>
				<Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
					Reset
        </Button>
			</div>
		),
		filterIcon: filtered => (
			<Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
		),
		onFilter: (value, record) =>
			record[dataIndex]
				.toString()
				.toLowerCase()
				.includes(value.toLowerCase()),
		onFilterDropdownVisibleChange: visible => {
			if (visible) {
				setTimeout(() => this.searchInput.select());
			}
		},
		render: text =>
			state.searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
					searchWords={[state.searchText]}
					autoEscape
					textToHighlight={text.toString()}
				/>
			) : (
					text
				),
	});

	const handleToExel = () => {
		const jsonConvert = []
		genderDate.forEach(item => {
			jsonConvert.push({
				codido: item.id,
				nombre: item.nombres,
				apellidos: item.apellidos,
				identificacion: item.dni,
				edad: item.edad,
				telefono: item.telefono,
				genero: item.idGenero && item.idGenero.nombre,
				etnia: item.idEtnia && item.idEtnia.nombre,
				conflicto: item.idConflicto && item.idConflicto.nombre,
				giraPNMB: item.giraPNMB,
				cacaoPlanadas: item.cacaoPlanadas,
				certificadoOrganica: item.certificadoOrganica,
				escuelaAgroforesteria: item.escuelaAgroforesteria,
				escuelaAgrosilvopastoril: item.escuelaAgrosilvopastoril,
				escuelaAromaticas: item.escuelaAromaticas,
				escuelaPermacultura: item.escuelaPermacultura,
				escuelaSRCacao: item.escuelaSRCacao,
				escuelaSRPNMB: item.escuelaSRPNMB,
				fitosanitarioCultivos: item.fitosanitarioCultivos,
				giraCacao: item.giraCacao,
				intercambioHuitora: item.intercambioHuitora,
				manejoEcosistemico: item.manejoEcosistemico,
				parcelaDemostrativa: item.parcelaDemostrativa,
				poscosechaCacao: item.poscosechaCacao,
				transformacionChocolate: item.transformacionChocolate,
				transformacionPNMB: item.transformacionPNMB,
				transformacionPulpas: item.transformacionPulpas


			})
		})
		console.log(jsonConvert)
		json2excel({
			data: jsonConvert,
			name: 'user-info-data',
			formateDate: 'yyyy/mm/dd'
		});

	}

	const handleToExelWomen = () => {
		const jsonConvert = []
		genderCount.woman.arraywoman.forEach(item => {
			jsonConvert.push({
				codido: item.id,
				nombre: item.nombres,
				apellidos: item.apellidos,
				identificacion: item.dni,
				edad: item.edad,
				telefono: item.telefono,
				genero: item.idGenero && item.idGenero.nombre,
				etnia: item.idEtnia && item.idEtnia.nombre,
				conflicto: item.idConflicto && item.idConflicto.nombre,
				giraPNMB: item.giraPNMB,
				cacaoPlanadas: item.cacaoPlanadas,
				certificadoOrganica: item.certificadoOrganica,
				escuelaAgroforesteria: item.escuelaAgroforesteria,
				escuelaAgrosilvopastoril: item.escuelaAgrosilvopastoril,
				escuelaAromaticas: item.escuelaAromaticas,
				escuelaPermacultura: item.escuelaPermacultura,
				escuelaSRCacao: item.escuelaSRCacao,
				escuelaSRPNMB: item.escuelaSRPNMB,
				fitosanitarioCultivos: item.fitosanitarioCultivos,
				giraCacao: item.giraCacao,
				intercambioHuitora: item.intercambioHuitora,
				manejoEcosistemico: item.manejoEcosistemico,
				parcelaDemostrativa: item.parcelaDemostrativa,
				poscosechaCacao: item.poscosechaCacao,
				transformacionChocolate: item.transformacionChocolate,
				transformacionPNMB: item.transformacionPNMB,
				transformacionPulpas: item.transformacionPulpas
			})
		})
		json2excel({
			data: jsonConvert,
			name: 'user-info-data',
			formateDate: 'yyyy/mm/dd'
		});
	}
	const handleToExelMen = () => {
		const jsonConvert = []
		genderCount.men.arraymen.forEach(item => {
			jsonConvert.push({
				codido: item.id,
				nombre: item.nombres,
				apellidos: item.apellidos,
				identificacion: item.dni,
				edad: item.edad,
				telefono: item.telefono,
				genero: item.idGenero && item.idGenero.nombre,
				etnia: item.idEtnia && item.idEtnia.nombre,
				conflicto: item.idConflicto && item.idConflicto.nombre,
				giraPNMB: item.giraPNMB,
				cacaoPlanadas: item.cacaoPlanadas,
				certificadoOrganica: item.certificadoOrganica,
				escuelaAgroforesteria: item.escuelaAgroforesteria,
				escuelaAgrosilvopastoril: item.escuelaAgrosilvopastoril,
				escuelaAromaticas: item.escuelaAromaticas,
				escuelaPermacultura: item.escuelaPermacultura,
				escuelaSRCacao: item.escuelaSRCacao,
				escuelaSRPNMB: item.escuelaSRPNMB,
				fitosanitarioCultivos: item.fitosanitarioCultivos,
				giraCacao: item.giraCacao,
				intercambioHuitora: item.intercambioHuitora,
				manejoEcosistemico: item.manejoEcosistemico,
				parcelaDemostrativa: item.parcelaDemostrativa,
				poscosechaCacao: item.poscosechaCacao,
				transformacionChocolate: item.transformacionChocolate,
				transformacionPNMB: item.transformacionPNMB,
				transformacionPulpas: item.transformacionPulpas
			})
		})
		json2excel({
			data: jsonConvert,
			name: 'user-info-data',
			formateDate: 'yyyy/mm/dd'
		});
	}

	console.log("sdfdsgfds",genderDate && genderDate.length)

	const cant = genderDate && genderDate.length
	return (
		<div className="queryuser">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar Usuarios</h1>
				</div>


				<Form>
					<Form.Item className="item">
						<label>Productor a Buscar</label>
						<div className="select-content">
							{getFieldDecorator('codigoProductor', {
								rules: [{ required: true, message: 'Porfavor seleccione el Encargado' }],
							})(
								<Select
									className="select"
									placeholder="usuario"
									filterOption={(inputValue, option) =>
										option.props.children
											.toString()
											.toLowerCase()
											.includes(inputValue.toLowerCase())
									}
									showSearch
								>
									{genderDate && genderDate.map((productor) => (
										<Option key={productor.dni} value={productor.id} onClick={()=> {history.push(`/profile/${productor.dni}`)}}>{productor.nombres} {productor.apellidos}</Option>
									))}
								</Select>
							)}
						</div> 
					</Form.Item>

				</Form>



				<div className="btn-exel">
					<button className="btn-exel--exel"
						onClick={handleToExel}
					><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				<Card title={<label>Listado de Beneficiarios: {cant}</label>}
					// extra={<Search
					// 	placeholder="Buscar Usuario"
					// 	onSearch={value => console.log(value)}
					// />}
				>
					<Table
						onRow={(record) => ({ onClick: (e) => history.push(`/profile/${record.dni}`) })}
						columns={columns}
						dataSource={genderDate}
						rowKey="dni"
					/>
				</Card>

			</div>
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Mujeres</h1>
				</div>
				<div className="btn-exel">
					<button className="btn-exel--exel"
						onClick={handleToExelWomen}
					><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				{genderCount && <Card title={<p>Total de mujeres {genderCount.woman.count.sum}</p>}
				
				>
					<Table
						onRow={(record) => ({ onClick: (e) => history.push(`/profile/${record.dni}`) })}
						dataSource={genderCount.woman.arraywoman}
						rowKey="id"
					>
						<Column title="Nombres." dataIndex="nombres" Key="nombres" />
						<Column title="Apellidos." dataIndex="apellidos" Key="apellidos" />
						<Column title="Numero de identificacion." dataIndex="dni" Key="dni" />
						<Column title="Edad." dataIndex="edad" Key="edad" />
						<Column
							title="Codigo"
							dataIndex="id"
							Key="id"
						/>
					</Table>
				</Card>}
				<div className="users--title">
					<h1>Hombres</h1>
				</div>
				<div className="btn-exel">
					<button className="btn-exel--exel"
						onClick={handleToExelMen}
					><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				{genderCount && <Card title={<p>Total de Hombres {genderCount.men.count.count}</p>}
					
				>
					<Table
						onRow={(record) => ({ onClick: (e) => history.push(`/profile/${record.dni}`) })}
						dataSource={genderCount.men.arraymen}
						rowKey="id"
					>
						<Column title="Nombres." dataIndex="nombres" Key="nombres" />
						<Column title="Apellidos." dataIndex="apellidos" Key="apellidos" />
						<Column title="Numero de identificacion." dataIndex="dni" Key="dni" />
						<Column title="Edad." dataIndex="edad" Key="edad" />
						<Column
							title="Codigo"
							dataIndex="id"
							Key="id"
						/>
					</Table>
				</Card>}

			</div>
		</div>
	)
}

export const QueryUser = Form.create({ name: 'QueryUserF' })(QueryUserF);