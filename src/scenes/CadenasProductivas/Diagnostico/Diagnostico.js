import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Select } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade } from "../../../services/line-cadena/line-cadenaActions";
import { producer as producerActions } from "../../../services/Producer/ProducerActions";
import { crop } from '../../../services/crop/cropActions';
import { organization as organizationActions } from "../../../services/organization/organizationActions";


const { Option } = Select;

const FormDiagnostico = ({ form }) => {

	const { getFieldDecorator, validateFields, resetFields } = form
	const { dateInfra } = useSelector(state => state.cade)
	const { genderDate, getProducerUpdateDate } = useSelector(state => state.producer)
	const { cropsProducer } = useSelector(state => state.crop)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(cade.getDateInfra());
		dispatch(producerActions.getProducerDate())
		dispatch(producerActions.getProducerUpdate())
		dispatch(crop.getCropsProducer())
	}, [])

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				dispatch(organizationActions.createDiagnostico(values))
				resetFields()
			}
		})
	}
	


	return (
		<section >
			<LayoutHome />
			<div className="RegisterInfra">
				<div className="users--title">
					<h1>Diagnostico del cultivo</h1>
				</div>
				<Form layout="inline" className="RegisterInfra--form" onSubmit={handleSubmit}>
					<div className="RegisterInfra--form__content-1">

						<div className="RegisterInfra--form__content-1--rigth">
							<div className="RegisterInfra--form__content-1--rigth--title">
								Datos Requeridos
							</div>
							<div className="form">
								<Form.Item className="item">
									<label>Seleccione dueño del Cultivo por cedula</label>
									<div className="select-content">
										{getFieldDecorator('idCultivo', {
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
												{cropsProducer && cropsProducer.map((date, index) => <Option key={index} value={date.id} >{date.dniProductor}</Option>)}
											</Select>
										)}
									</div>
								</Form.Item>
                                <Form.Item className="item">
									<label>posicion del diagnostico</label>
									{getFieldDecorator('nombre', {
										rules: [{ required: true, message: 'Porfavor ingrese la posicion', whitespace: true }],
									})
										(<Input className="item--input" placeholder="posicion" />)}
								</Form.Item> 
							</div>
						</div>
					</div>
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Registrar Diagnostico</Button>
					</div>
				</Form>
			</div>
		</section>
	)

}

export const Diagnostico = Form.create({ name: 'FormDiagnostico' })(FormDiagnostico);