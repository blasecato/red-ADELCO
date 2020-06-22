import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Select } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade } from "../../../services/line-cadena/line-cadenaActions";
import { producer as producerActions } from "../../../services/Producer/ProducerActions";
import { kit as kitActions } from '../../../services/Kit/KitActions';
import { crop } from '../../../services/crop/cropActions';


const { Option } = Select;
                           
const FormKid = ({ form,history }) => {

	const { getFieldDecorator, validateFields, resetFields } = form
	const { dateInfra } = useSelector(state => state.cade)
	const { cropsProducer } = useSelector(state => state.crop)
	const { genderDate, getProducerUpdateDate } = useSelector(state => state.producer)
	const { kit } = useSelector(state => state.kit)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(cade.getDateInfra());
		dispatch(producerActions.getProducerDate())
		dispatch(producerActions.getProducerUpdate())
		dispatch(kitActions.getKit())
		
	}, [])

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				dispatch(kitActions.createKit(values));
				resetFields()
				history.push("/home")
			}
		})
	}

	console.log('genderDate',genderDate)

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
										{getFieldDecorator('idProducer', {
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
												{genderDate && genderDate.map((date, index) => <Option key={index} value={date.id} >{date.nombres} {date.apellidos}</Option>)}
											</Select>
										)}
									</div>
								</Form.Item>
                                <Form.Item className="item">
									<label>Kit</label>
									<div className="select-content">
										{getFieldDecorator('idKit', {
											rules: [{ required: true, message: 'Porfavor seleccione un kit' }],
										})(
											<Select className="select">
												{kit && kit.map((kit) => (
													<Option key={kit.id} value={kit.id}>{kit.nombre}</Option>
												))}
											</Select>
										)}
									</div>
								</Form.Item>
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