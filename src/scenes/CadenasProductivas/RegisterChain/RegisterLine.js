import React, { useEffect } from "react";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';

// importacion de la cabecera 
import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade as cadenaActions } from "../../../services/line-cadena/line-cadenaActions";

const { Option } = Select;

const FormRegisterLine = ({ form }) => {

	const { getFieldDecorator, validateFieldsAndScroll } = form;
	const dispatch = useDispatch()
	const { cade } = useSelector(state => state.cade)

	useEffect(() => {
		dispatch(cadenaActions.getCade());
	}, [])

	const handleSubmit = e => {
		e.preventDefault();
		validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				dispatch(cadenaActions.createLine(values));
			}
		})
	}

	return (
		<section >
			{/* seccion donde creamos el componente formulario de registrar chain */}
			<LayoutHome />
			<div className="RegisterChain">
				{/* titulo de la vista */}
				<div className="users--title">
					<h1>Registrar linea Productiva</h1>
				</div>
				{/* formulario de registro */}
				<Form layout="inline" className="RegisterChain--form" onSubmit={handleSubmit}>
					<div className="RegisterChain--form__content-1">

						<div className="RegisterChain--form__content-1--rigth">
							<div className="form form-two">
								{/* item input donde se requiere un tipo de dato espesifico  */}
								<Form.Item className="item">
									<label>Nombres</label>
									{getFieldDecorator('nombre', {
										rules: [{ required: true, message: 'Porfavor ingrese el usuario', whitespace: true }],
									})
										(<Input className="item--input" placeholder="Nombre" />)}
								</Form.Item>
								<Form.Item>
									<label>Cadena Productiva</label>
									{getFieldDecorator('idCadenaProductiva', {
										rules: [{ required: true, message: 'Please input your phone number!' }],
									})(<Select className="select item--input">
										{cade.map((cade) => (
											<Option key={cade.id} value={cade.id}>{cade.nombre}</Option>
										))}
									</Select>)}
								</Form.Item>
							</div>
						</div>
					</div>
					{/* boton que recoje los valores y los registra */}
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Registrar</Button>
					</div>
				</Form>
			</div>
		</section>
	)

}

export const RegisterLine = Form.create({ name: 'FormRegisterLine' })(FormRegisterLine);