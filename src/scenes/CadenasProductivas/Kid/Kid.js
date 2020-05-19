import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Select } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade } from "../../../services/line-cadena/line-cadenaActions";
import { producer as producerActions } from "../../../services/Producer/ProducerActions";


const { Option } = Select;

const FormKid = ({ form }) => {

	const { getFieldDecorator, validateFields, resetFields } = form
	const { dateInfra } = useSelector(state => state.cade)
	const { genderDate, getProducerUpdateDate } = useSelector(state => state.producer)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(cade.getDateInfra());
		dispatch(producerActions.getProducerDate())
		dispatch(producerActions.getProducerUpdate())
	}, [])

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

	return (
		<section >
			<LayoutHome />
			<div className="RegisterInfra">
				<div className="users--title">
					<h1>Kit de herramientas de usuario</h1>
				</div>
				<Form layout="inline" className="RegisterInfra--form" onSubmit={handleSubmit}>
					<div className="RegisterInfra--form__content-1">

						<div className="RegisterInfra--form__content-1--rigth">
							<div className="RegisterInfra--form__content-1--rigth--title">
								Datos Requeridos
							</div>
							<div className="form">
								<Form.Item className="item">
									<label>Seleccione Usuario</label>
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
									<label>Kit</label>
									<div className="select">
										{getFieldDecorator('idGenero', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select className="select" placeholder="Selecione">
												<Option value="1">Aplica</Option>
												<Option value="2">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
                                {/* <Form.Item className="item">
									<label>posicion del acepta del kit</label>
									{getFieldDecorator('posicion del acepta del kit', {
										rules: [{ required: true, message: 'Porfavor ingrese la posicion', whitespace: true }],
									})
										(<Input className="item--input" placeholder="posicion" />)}
								</Form.Item> */}
							</div>
						</div>
					</div>
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Registrar Kit</Button>
					</div>
				</Form>
			</div>
		</section>
	)

}

export const Kid = Form.create({ name: 'FormKid' })(FormKid);