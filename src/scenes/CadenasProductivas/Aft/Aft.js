import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Select } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade } from "../../../services/line-cadena/line-cadenaActions";
import { producer as producerActions } from "../../../services/Producer/ProducerActions";
import { crop } from "../../../services/crop/cropActions";
import { organization as organizationActions } from "../../../services/organization/organizationActions";



const { Option } = Select;

const FormAft = ({ form }) => {

	const { getFieldDecorator, validateFields, resetFields } = form
	const { dateInfra } = useSelector(state => state.cade)
	const { genderDate, getProducerUpdateDate } = useSelector(state => state.producer)
	const { cropsDate } = useSelector(state => state.crop)
	const { organizations } = useSelector(state => state.organization)

	const [veredas, setVeredas] = useState([])
	const [orgSelect, setOrgSelect] = useState(undefined)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(cade.getDateInfra());
		dispatch(producerActions.getProducerDate())
		dispatch(producerActions.getProducerUpdate())
	}, [])

	const handleSelectOrg = e => {
		setOrgSelect(organizations.find((x) => x.id === e))
	}

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				dispatch(cade.createVereda(values));
				resetFields()
			}
		})
	}

	const handleVeredas = (value) => {
		setVeredas(cropsDate.municipio.find((municipio) => municipio.id === value).veredas)
	}

	return (
		<section >
			<LayoutHome />
			<div className="RegisterInfra">
				<div className="users--title">
					<h1>Registrar AFT</h1>
				</div>
				<Form layout="inline" className="RegisterInfra--form" onSubmit={handleSubmit}>
					<div className="RegisterInfra--form__content-1">

						<div className="RegisterInfra--form__content-1--rigth">
							<div className="RegisterInfra--form__content-1--rigth--title">
								Datos Requeridos
							</div>
							<div className="form">
								<Form.Item className="item">
									<label>Nit</label>
									{getFieldDecorator('edad', {
										rules: [{ required: true, message: 'Porfavor ingrese el nit', whitespace: true }],
									})(
										<Input type="number" className="item--input" placeholder="Nit" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Seleccione representante</label>
									<div className="select-content">
										{getFieldDecorator('dni', {
											rules: [{ required: true, message: 'Porfavor seleccione un usuario!' }],
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
												{genderDate && genderDate.map((date, index) => <Option key={index} value={date.dni} >{date.nombres} {date.apellidos}</Option>)}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Municipio del cultivo</label>
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
									<label>Organizacion</label>
									<div className="select-content">
										{getFieldDecorator('id', {
											rules: [{ required: true, message: 'Porfavor seleccione una organizacion' }],
										})(
											<Select className="select" onChange={handleSelectOrg} placeholder="organizacion">
												{organizations && organizations.map((organization) => <Option key={organization.id} value={organization.id} >{organization.nombre}</Option>)}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Banco</label>
									<div className="Banco">
										{getFieldDecorator('idGenero', {
											rules: [{ required: true, message: 'Seleccione banco' }],
										})(
											<Select className="item--input" placeholder="Banco">
												<Option value="1">bancolombia</Option>
												<Option value="2">bbva</Option>
												<Option value="3">banco agrario</Option>
												<Option value="4">davivienda</Option>
												<Option value="5">bancamia</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Tipo de cuenta</label>
									<div className="Tipo de cuenta">
										{getFieldDecorator('idGenero', {
											rules: [{ required: true, message: 'ingrese su tipo de cuenta!' }],
										})(
											<Select className="item--input" placeholder="tipo de cuenta">
												<Option value="1">ahorros</Option>
												<Option value="2">corriente</Option>
												<Option value="3">credito</Option>
												<Option value="4">debito</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Numero de cuenta</label>
									{getFieldDecorator('edad', {
										rules: [{ required: true, message: 'Porfavor ingrese el numero de cuenta', whitespace: true }],
									})(
										<Input type="number" className="item--input" placeholder="numero de cuenta" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Documento</label>
									{getFieldDecorator('nombres', {
										rules: [{ required: true, message: 'Porfavor ingrese el documento', whitespace: true }],
									})(<Input placeholder="Nombre" className="item--input" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Matricula</label>
									{getFieldDecorator('edad', {
										rules: [{ required: true, message: 'Porfavor ingrese la matricula', whitespace: true }],
									})(
										<Input type="number" className="item--input" placeholder="Matricula" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>DV</label>
									{getFieldDecorator('edad', {
										rules: [{ required: true, message: 'Porfavor ingrese el DV', whitespace: true }],
									})(
										<Input type="number" className="item--input" placeholder="DV" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Email</label>
									{getFieldDecorator('user', {
										rules: [{ type: 'email', required: true, message: 'porfavor registre un correo valido' }],
									})(
										<Input className="item--input"
											placeholder="Username"
										/>,
									)}
								</Form.Item>
							</div>
						</div>
					</div>
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Registrar Aft</Button>
					</div>
				</Form>
			</div>
		</section>
	)

}

export const Aft = Form.create({ name: 'FormAft' })(FormAft);