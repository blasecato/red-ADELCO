import React, { useEffect, useState } from 'react';
import { Table, Divider, Tag, Card, Input, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { producer } from '../../../services/Producer/ProducerActions';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const QueryUser = () => {

	const dispatch = useDispatch()
 
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
			width: '30%',
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
					<Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
						Reset
					</Button>
				</div>
			),
		},
		{
			title: 'apellidos',
			dataIndex: 'apellidos',
			key: 'apellidos',
			width: '20%',
		},
		{
			title: 'idOrganizacion2',
			dataIndex: 'idOrganizacion2.nombre',
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

	return (
		<div className="queryuser">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar Usuarios</h1>
				</div>
				<Card title="Listado de Beneficiarios"
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table columns={columns} dataSource={genderDate} rowKey="dni" />
				</Card>

			</div>
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Mujeres</h1>
				</div>
				{genderCount && <Card title={<p>Total de mujeres {genderCount.woman.count.sum}</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={genderCount.woman.arraywoman} rowKey="id">
						<Column title="Nombres." dataIndex="nombres" Key="nombres" />
						<Column title="Apellidos." dataIndex="apellidos" Key="apellidos" />
						<Column title="Numero de identificacion." dataIndex="dni" Key="dni" />
						<Column title="Edad." dataIndex="edad" Key="edad" />
						<Column
							title="Codigo"
							dataIndex="id"
							Key="id"
						/>
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
				</Card>}
				<div className="users--title">
					<h1>Hombres</h1>
				</div>
				{genderCount && <Card title={<p>Total de Hombres {genderCount.men.count.count}</p>}
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={genderCount.men.arraymen} rowKey="id">
						<Column title="Nombres." dataIndex="nombres" Key="nombres" />
						<Column title="Apellidos." dataIndex="apellidos" Key="apellidos" />
						<Column title="Numero de identificacion." dataIndex="dni" Key="dni" />
						<Column title="Edad." dataIndex="edad" Key="edad" />
						<Column
							title="Codigo"
							dataIndex="id"
							Key="id"
						/>
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
				</Card>}

			</div>
		</div>
	)
}
