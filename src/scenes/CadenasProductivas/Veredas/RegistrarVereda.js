import React, { useEffect } from "react";
import { Form, Icon, Input, Button, Select } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade } from "../../../services/line-cadena/line-cadenaActions";

const { Option } = Select;

const FormRegisterVereda = ({ form }) => {

	const { getFieldDecorator, validateFields, resetFields } = form
	const { dateInfra } = useSelector(state => state.cade)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(cade.getDateInfra());
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
					<h1>Registrar Vereda</h1>
				</div>
				<Form layout="inline" className="RegisterInfra--form" onSubmit={handleSubmit}>
					<div className="RegisterInfra--form__content-1">

						<div className="RegisterInfra--form__content-1--rigth">
							<div className="RegisterInfra--form__content-1--rigth--title">
								Datos Requeridos
							</div>
							<div className="form">
								<Form.Item className="item">
									<label>Nombres</label>
									{getFieldDecorator('nombre', {
										rules: [{ required: true, message: 'Porfavor ingrese el nombre', whitespace: true }],
									})(<Input placeholder="Nombre" className="item--input" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Municipio</label>
									<div className="select-content">
										{getFieldDecorator('idMunicipio', {
											rules: [{ required: true, message: 'Porfavor seleccione un municipio' }],
										})(
											<Select className="select">
												{dateInfra && dateInfra.municipio.map((municipio) => (
													<Option key={municipio.id} value={municipio.id}>{municipio.nombre}</Option>
												))}
											</Select>
										)}
									</div>
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

export const RegisterVereda = Form.create({ name: 'FormRegisterVereda' })(FormRegisterVereda);