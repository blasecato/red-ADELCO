import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { crop } from '../../../services/crop/cropActions';
import { json2excel, excel2json } from 'js2excel';
import exel from "../../../assets/image/excel.png";

const { Search } = Input;
const { Column, ColumnGroup } = Table;
 
export const Cultivo = () => {


	
	const dispatch = useDispatch()
	const { cropsProducer } = useSelector(state => state.crop)

	useEffect(() => {
		dispatch(crop.getCropsProducer())
	}, [])

	const handleToExel = () => {
		const jsonConvert = []
		cropsProducer.forEach(item => {
			jsonConvert.push({
				codigo_Cultivo: item.id,
				dniProductor: item.dniProductor,
				codigo_Productor: item.codigoProductor,
				Nombre_Productor:item.codigoProductor2 && item.codigoProductor2.nombres + ' ' + item.codigoProductor2.apellidos,
				Municipio: item.idMunicipio2 && item.idMunicipio2.nombre,
				Vereda: item.idVereda2 && item.idVereda2.nombre,
				LineaProductiva: item.idLineaProductiva2 && item.idLineaProductiva2.nombre,
				hectareas: item.hectareas
			})
		})
		console.log(jsonConvert)
		json2excel({
			data: jsonConvert,
			name: 'user-info-data',
			formateDate: 'yyyy/mm/dd'
		});
	}

	console.log("crops", cropsProducer)

	return (
		<div className="queryuser">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>IDENTIFICACION DE  BENEFICIARIOS POR CADENAS PRODUCTIVAS</h1>
				</div>
				<div className="button">
					<Link to="/registercultivos" className="btn-register">Registrar Cadena Productiva.</Link>
				</div>
				<div className="btn-exel">
					<button className="btn-exel--exel"
						onClick={handleToExel}
					><img className="img-excel" src={exel} /> Descargar</button>
				</div>
				<Card title={<p>Cultivos</p>}
					
				>
					<Table dataSource={cropsProducer} rowKey="id">
						<Column title="Identificación de Beneficiario." dataIndex="codigoProductor2.dni"  Key="dniProductor" />
						<Column title="Nombre Beneficiarios" dataIndex="codigoProductor2.nombres" Key="codigoProductor2" />
						<Column title="Apellidos Beneficiarios" dataIndex="codigoProductor2.apellidos" Key="codigoProductor2" />
						<Column title="Vereda." dataIndex="idVereda2.nombre" Key="idVereda2" />
						<Column title="Municipio" dataIndex="idMunicipio2.nombre" Key="idMunicipio2" />
						<Column title="Linea productiva" dataIndex="idLineaProductiva2.nombre" Key="idLineaProductiva2" />
						<Column title="Ubicación Acepta" dataIndex="posicionAcepta" Key="posicionAcepta" />
						<Column title="Principal Trabajo" dataIndex="trabajoPrincipal" Key="trabajoPrincipal" />
						<Column title="Entidad Perteneciente" dataIndex="entidadPerteneciente" Key="entidadPerteneciente" />
					
					</Table>
				</Card>
			</div>
		</div>
	)
}
