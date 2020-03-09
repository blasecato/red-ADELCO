import React, { useState, useEffect } from "react";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import LayoutHome from "../../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { municipios as municipiosActions } from "../../../../services/municipio/municipioActions";
import { producer as producerActions } from "../../../../services/Producer/ProducerActions";

import { organization as organizationActions } from "../../../../services/organization/organizationActions";

const { TextArea } = Input;
const { Option } = Select;

const ActualizarOrg = (props) => {

	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
    const { municipios } = useSelector(state => state.municipio)
	const { genderDate } = useSelector(state => state.producer)
    const { organizations } = useSelector(state => state.organization)
	const dispatch = useDispatch()
	const [state, setstate] = useState({
		value: 1,
		desisable: true,
    })
    
    console.log(organizations)

	const [veredas, setveredas] = useState([])

	useEffect(() => {
		dispatch(municipiosActions.getMunicipios())
        dispatch(producerActions.getProducerDate())
        dispatch(organizationActions.getOrganization())
	}, [])

	const handleSubmit = e => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				const { idmunicipio, ...result } = values
				console.log("values form==>", result)
			}
		})
	}

	const onChange = e => {
		setstate({
			...state, value: e.target.value,
		})
	}

	const handleSelectVereda = e => {
		setveredas(municipios.find((municipio) => municipio.id === e).veredas)
	}

	return (
		<section >
			<LayoutHome />
			<div className="RegisterOrg">
				<div className="users--title">
					<h1>Actualizar Organizacion</h1>
				</div>
				<Form layout="inline" className="RegisterOrg--form" onSubmit={handleSubmit}>
					<div className="RegisterOrg--form__content-1">

						<div className="RegisterOrg--form__content-1--rigth">
							<div className="RegisterOrg--form__content-1--rigth--title">
								Datos De la Organizacion
							</div>

							<div className="form">
                                <Form.Item className="item">
									<label>Organizacion</label>
									<div className="select-content">
										{getFieldDecorator('id', {
											rules: [{ required: true, message: 'Porfavor seleccione una organizacion' }],
										})(
											<Select className="select" onChange={handleSelectVereda} placeholder="municipio">
												{organizations && organizations.map((organization) => <Option key={organization.id} value={organization.id} >{organization.nombre}</Option>)}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Nombre de la Organización</label>
									{getFieldDecorator('nombre', {
										rules: [{ required: false, message: 'Porfavor ingrese el nombre', whitespace: true }],
									})(<Input placeholder="Nombre" className="item--input" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Telefono de Contacto</label>
									{getFieldDecorator('contacto', {
										rules: [{ required: false, message: 'Porfavor ingrese el nombre', whitespace: true }],
									})(<Input type="number" className="item--input" placeholder="Telefono" />)}
								</Form.Item>
								
								<Form.Item className="item">
									<label>Vereda</label>
									<div className="select-content">
										{getFieldDecorator('idVereda2', {
											rules: [{ required: false, message: 'Pofavor seleccione la vereda!' }],
										})(
											<Select className="select" placeholder="vereda">
												{veredas && veredas.map((vereda) => <Option key={vereda.id} value={vereda.id} >{vereda.nombre}</Option>)}
											</Select>
										)}
									</div>
								</Form.Item>
								
								<Form.Item className="item">
									<label>Representante</label>
									<div className="select-content">
										{getFieldDecorator('representante2', {
											rules: [{ required: false, message: 'Pofavor seleccione el Representante!' }],
										})(
											<Select
												className="select"
												placeholder="representante"
												filterOption={(inputValue, option) =>
													option.props.children
														.toString()
														.toLowerCase()
														.includes(inputValue.toLowerCase())
												}
												showSearch
											>
												{genderDate && genderDate.map((date, index) => <Option key={index} value={date.dni} >{date.nombres} {date.apellidos}</Option>)}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Descripcion</label>
									{getFieldDecorator('descripcion', {
										rules: [{ required: false, message: 'Porfavor ingrese la descripcion', whitespace: true }],
									})(<TextArea placeholder="descripcion de la organizacion" allowClear onChange={onChange} />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Tema Empresaqrial</label>
									{getFieldDecorator('temaEmpresarial', {
										rules: [{ required: false, message: 'Porfavor ingrese el tema empresarial', whitespace: true }],
									})(<TextArea placeholder="tema empresarial" allowClear onChange={onChange} />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Tema de Capacitacion</label>
									{getFieldDecorator('temaCapacitacion', {
										rules: [{ required: false, message: 'Porfavor la capacitacion', whitespace: true }],
									})(<TextArea placeholder="descripcion de la organizacion" allowClear onChange={onChange} />)}
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

export const ActualizarOrgFrom = Form.create({ name: 'formLogin' })(ActualizarOrg);