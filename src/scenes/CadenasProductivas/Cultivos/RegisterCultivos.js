import React, { useState, useEffect } from "react";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';
import { TimePicker } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useSelector, useDispatch } from "react-redux";
import { crop } from "../../../services/crop/cropActions";
import moment from 'moment'

const { Option } = Select
const FormRegisterCultivos = ({ form,history }) => {

	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, validateFields } = form
	const dispatch = useDispatch()
	const { cropsDate } = useSelector(state => state.crop)
	const [veredas, setVeredas] = useState([])

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				const { fechaInicio, ...results } = values
				console.log("generador==>", {
					...results,
					fechaInicio: moment(fechaInicio, "DD-MM-YYYY").format("YYYY-MM-DD")
				})
				dispatch(crop.createCrop({
					...results,
					fechaInicio: moment(fechaInicio, "DD-MM-YYYY").format("YYYY-MM-DD")
				}))
				form.resetFields()
				history.push("/cultivos")
			}
		})
	}

	const handleVeredas = (value) => {
		setVeredas(cropsDate.municipio.find((municipio) => municipio.id === value).veredas)
	}

	useEffect(() => {
		dispatch(crop.getCropsDate())
	}, [])

	const config = {
		rules: [{ type: 'object', required: true, message: 'Porfavor seleccione la fecha' }],
	}

	return (
		<section >
			<LayoutHome />
			<div className="RegisterInfra">
				<div className="users--title">
					<h1>Registrar Cadena Productiva</h1>
				</div>
				<Form layout="inline" className="RegisterInfra--form" onSubmit={handleSubmit}>
					<div className="RegisterInfra--form__content-1">

						<div className="RegisterInfra--form__content-1--rigth">
							<div className="RegisterInfra--form__content-1--rigth--title">
								Datos Requeridos
							</div>
							<div className="form">
								<Form.Item className="item">
									<label>Productor encargado del Cultivo</label>
									<div className="select-content">
										{getFieldDecorator('codigoProductor', {
											rules: [{ required: true, message: 'Porfavor seleccione el Encargado' }],
										})(
											<Select 
												className="select"
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
												{cropsDate && cropsDate.productores.map((productor) => (
													<Option key={productor.dni} value={productor.id}>{productor.nombres} {productor.apellidos}</Option>
												))}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item" >
									<label>Fecha de inicio</label>
									{getFieldDecorator('fechaInicio', config)(
										<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Seleccione la fecha" />,
									)}
								</Form.Item>
								<Form.Item className="item">
									<label>Tipo De Usuario</label>
									<div className="select-content">
										{getFieldDecorator('idLineaProductiva', {
											rules: [{ required: true, message: 'Porfavor seleccione una linea productiva' }],
										})(
											<Select className="select">
												{cropsDate && cropsDate.linea.map((linea) => (
													<Option key={linea.id} value={linea.id}>{linea.nombre}</Option>
												))}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Municipio De Cadena Productiva</label>
									<div className="select-content">
										{getFieldDecorator('idMunicipio', {
											rules: [{ required: true, message: 'Porfavor seleccione un municipio' }],
										})(
											<Select className="select" onChange={handleVeredas}>
												{cropsDate && cropsDate.municipio.map((municipio) => (
													<Option key={municipio.id} value={municipio.id}>{municipio.nombre}</Option>
												))}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Vereda de Cadena Productiva</label>
									<div className="select-content">
										{getFieldDecorator('idVereda', {
											rules: [{ required: true, message: 'Porfavor seleccione un vereda' }],
										})(
											<Select className="select">
												{veredas.map((vereda) => (
													<Option key={vereda.id} value={vereda.id}>{vereda.nombre}</Option>
												))}
											</Select>
										)}
									</div>
								</Form.Item>
								 <Form.Item className="item">
									<label>Ubicación Archivo Doc. Acepta</label>
									{getFieldDecorator('posicionAcepta', {
										rules: [{ required: true, message: 'Porfavor ingrese la posicion', whitespace: true }],
									})
										(<Input className="item--input" placeholder="Posicion" />)}
								</Form.Item> 
								 <Form.Item className="item">
									<label>Entidad Perteneciente</label>
									{getFieldDecorator('entidadPerteneciente', {
										rules: [{ required: true, message: 'Porfavor ingrese la entidad', whitespace: true }],
									})
										(<Input className="item--input" placeholder="Entidad" />)}
								</Form.Item> 
								 <Form.Item className="item">
									<label>Principal De Trabajo.</label>
									{getFieldDecorator('trabajoPrincipal', {
										rules: [{ required: true, message: 'Porfavor ingrese el/la principal', whitespace: true }],
									})
										(<Input className="item--input" placeholder="Principal" />)}
								</Form.Item> 
							</div>
						</div>
					</div>
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Registrar</Button>
					</div>
				</Form>
			</div>
		</section>
	)
}

export const RegisterCultivos = Form.create({ name: 'FormRegisterCultivos' })(FormRegisterCultivos);