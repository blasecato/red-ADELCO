import React, { useState, useEffect } from "react";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade } from "../../../../services/line-cadena/line-cadenaActions";

const { TextArea } = Input;
const { Option } = Select;

const FormActualizarInfra = ({ form }) => {


	const { infra } = useSelector(state => state.cade)
	const dispatch = useDispatch()
	const { dateInfra } = useSelector(state => state.cade)

	const [state, setstate] = useState({
		value: 1,
		desisable: true,
	})

	const [veredas, setVeredas] = useState([])

	useEffect(() => {
        dispatch(cade.getDateInfra());
        dispatch(cade.getInfra());

    }, [])
    console.log("infra==>", dateInfra)

	const handleSubmit = e => {
		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				dispatch(cade.update(values))
				form.resetFields()
			}
		});
	};

	const handleVeredas = (value) => {
		setVeredas(dateInfra && dateInfra.municipio.find((municipio) => municipio.id === value).veredas)
	}

	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;
	const usernameError = isFieldTouched('username') && getFieldError('username');
	const passwordError = isFieldTouched('password') && getFieldError('password');

	return (
		<section >
			<LayoutHome />
			<div className="RegisterInfra">
				<div className="users--title">
					<h1>Actualizar Infraestructura</h1>
				</div>
				<Form layout="inline" className="RegisterInfra--form" onSubmit={handleSubmit}>
					<div className="RegisterInfra--form__content-1">

						<div className="RegisterInfra--form__content-1--rigth">
							<div className="RegisterInfra--form__content-1--rigth--title">
								Datos Requeridos
                                </div>
							<div className="form">
                            <Form.Item className="item">
									<label>Infraestructura</label>
									<div className="select-content">
										{getFieldDecorator('id', {
											rules: [{ required: true, message: 'Porfavor seleccione una infraestructura' }],
										})(
											<Select className="select" 
											// onChange={handleVeredas}
											>
												{infra && infra.map((item) => (
													<Option key={item.id} value={item.id}>{item.nombre}</Option>
												))}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Nombre</label>
									{getFieldDecorator('nombre', {
										rules: [{ required: false, message: 'Porfavor ingrese el nombre', whitespace: true }],
									})(<Input type="text" className="item--input" placeholder="Nombre" />)}

								</Form.Item>
								<Form.Item className="item">
									<label>Cobertura (metros)</label>
									{getFieldDecorator('cobertura', {
										rules: [{ required: false, message: 'Porfavor ingrese la cobertura', whitespace: true }],
									})(<Input type="number" className="item--input" placeholder="Metros Cuadrados" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Vereda la Infraestructura</label>
									<div className="select-content">
										{getFieldDecorator('idVereda', {
											rules: [{ required: false, message: 'Porfavor seleccione una vereda' }],
										})(
											<Select className="select">
												{veredas.map((veredas) => (
													<Option key={veredas.id} value={veredas.id}>{veredas.nombre}</Option>
												))}
											</Select>
										)}
									</div>
								</Form.Item>
								
								<Form.Item className="item">
									<label>Representante</label>
									{getFieldDecorator('responsable', {
										rules: [{ required: false, message: 'Porfavor ingrese el nombre del representante', whitespace: true }],
									})(<Input placeholder="nomnre del representante" className="item--input" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Posicion de planos</label>
									{getFieldDecorator('planos', {
										rules: [{ required: false, message: 'Porfavor ingrese la posicion de planos', whitespace: true }],
									})(<Input placeholder="Posicion de los Planos" className="item--input" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Direccion</label>
									{getFieldDecorator('direccion', {
										rules: [{ required: false, message: 'Porfavor ingrese la direccion', whitespace: true }],
									})(<Input placeholder="direccion" className="item--input" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Descripcion</label>
									{getFieldDecorator('descripcion', {
										rules: [{ required: false, message: 'Porfavor ingrese la descripcion', whitespace: true }],
									})(<TextArea placeholder="direccion" className="item--input" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Editar tipo de Infraestructura</label>
									<div className="select-content">
										{getFieldDecorator('idTypeInfraestructura', {
											rules: [{ required: false, message: 'Porfavor seleccione un municipio' }],
										})(
											<Select className="select" >
												{dateInfra && dateInfra.typeInfraestructura.map((infraestructura) => (
													<Option key={infraestructura.id} value={infraestructura.id}>{infraestructura.nombre}</Option>
												))}
											</Select>
										)}
									</div>
								</Form.Item>
							</div>
						</div>
					</div>
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Actualizar</Button>
					</div>
				</Form>
			</div>
		</section>
	)
}

export const ActualizarInfra = Form.create({ name: 'formLogin' })(FormActualizarInfra);