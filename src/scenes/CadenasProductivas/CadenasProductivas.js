import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Table, Divider, Tag, Input } from 'antd';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { crop as cropActions } from "../../services/crop/cropActions";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import lineas from "../../assets/image/img/lineas.jpg";
import cadenas from "../../assets/image/img/cadena.jpg";
import cultivo from "../../assets/image/img/img5.jpg";

import { json2excel, excel2json } from 'js2excel';
import exel from "../../assets/image/excel.png";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

const { Meta } = Card;
// clase de cadenas productivas la cual exporta un formulario
export const CadenasProductivas = () => {

	const { lineProductives } = useSelector(state => state.crop)
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(cropActions.getLineProductive())
	}, [])
	console.log(lineProductives)

	const handleToExel = () => {
		const jsonConvert = []
		lineProductives.forEach(item => {
			jsonConvert.push({
				cosigo: item.id,
				nombre: item.nombre,
				CadenaProductiva: item.idCadenaProductiva2.nombre
			})
		})
		console.log(jsonConvert)
		json2excel({
			data: jsonConvert,
			name: 'user-info-data',
			formateDate: 'yyyy/mm/dd'
		});

	}

	return (
		<div className="users">
			<LayoutHome></LayoutHome>
			<div className="users--title">
				<h1>Gestionar Cadenas Productivas</h1>
			</div>
			<div className="users__content-cards">
				{/* listado de las opciones disponibles */}

				<Card
					className="users__content-cards--card"
					hoverable
					cover={<Link to="/tipocadena"><img alt="example" src={cadenas} /></Link>}
				>
					<Meta title="Cadenas Productivas" description="¡Gestiona Cadenas productivas dando click aqui!" />
					<Link className="btn" to="/registrarcadenasproductivas" type="primary" shape="circle">
						IR
            			</Link>
				</Card>
				<Card
					className="users__content-cards--card"
					hoverable
					cover={<Link to="/queryuser"><img alt="example" src={cultivo} /></Link>}
				>
					<Meta title="Cultivos" description="Consulta los Cultivos ¡AQUI!" />
					<Link className="btn" to="/cultivos" type="primary" shape="circle">
						IR
                            </Link>
				</Card>
				<Card
					className="users__content-cards--card"
					hoverable
					cover={<Link to="/tipocadena"><img alt="example" src={lineas} /></Link>}
				>
					<Meta title="Lineas Productivas" description="¡Gestiona Lineas productivas dando click aqui!" />
					<Link className="btn" to="/tipocadena" type="primary" shape="circle">
						IR
            </Link>
				</Card>
			</div>
			<div className="mesage"><span>¡</span>Aqui puedes gestionar Cadenas Productivas, puedes Consultarlas, Registrarlas, Actualizarlas, Y Eliminarlas con tan solo dar click sobre la opcion que desees<span>!</span></div>

			<div className="queryuser__content">
				<div className="users--title">
					<h1>Consultar lineas y cadenas productivas</h1>
				</div>
				<div className="btn-exel">
					<button className="btn-exel--exel" onClick={handleToExel}><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				<Card title="Listado de Beneficiarios"
					extra={<Search
						placeholder="Buscar Usuario"
						onSearch={value => console.log(value)}
					/>}
				>
					<Table dataSource={lineProductives} rowKey="id">
						<Column title="Numero." dataIndex="id" Key="id" />
						<Column title="Linea Productiva." dataIndex="nombre" Key="nombre" />
						<Column title="Cadena Productiva." dataIndex="idCadenaProductiva2.nombre" Key="idCadenaProductiva2" />
					</Table>
				</Card>

			</div>
		</div>
	)
}