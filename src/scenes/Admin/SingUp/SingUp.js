import React, { useState } from "react"
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker, Alert } from 'antd'
import LayoutHome from "../../../components/LayoutHome/LayoutHome"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../../../services/Auth/AuthActions"

const { Option } = Select

const FormSingUp = ({ form,history }) => {

	const dispatch = useDispatch()
	const { getFieldDecorator, validateFields, resetFields } = form
	const [state, setstate] = useState({
		value: 1,
		desisable: true,
	})
	const { success, error } = useSelector(state => state.auth)

	const handleSubmit = e => {
		e.preventDefault()
		validateFields((err, values) => {
			if (!err) {
				console.log(values)
				dispatch(auth.signup(values))
				resetFields()
				history.push("/home")
			}
		})
	}

	return (
		<section >
			<LayoutHome />
			<div className="registeruser">
				<div className="users--title">
					<h1>Registrar Administrador</h1>
				</div>
				<Form layout="inline" className="registeruser--form" onSubmit={handleSubmit}>
					<div className="registeruser--form__content-1">
						<div className="registeruser--form__content-1--left">
							<div className="registeruser--form__content-1--rigth--title">
								Datos Personales
							</div>
							<div className="form">
								<Form.Item className="item">
									<label>Usuario</label>
									{getFieldDecorator('email', {
										rules: [{ type: 'email', required: true, message: 'porfavor registre un correo valido' }],
									})(
										<Input className="item--input"
											placeholder="Username"
										/>,
									)}

								</Form.Item>
								<Form.Item className="item">
									<label>Contraseña</label>
									{getFieldDecorator('password', {
										rules: [{ required: true, message: 'Porfavor ingrese su contraseña' }],
									})(
										<Input className="item--input"
											type="password"
											placeholder="Password"
										/>,
									)}
								</Form.Item>
								<Form.Item className="item">
									<label>Nombres</label>
									{getFieldDecorator('nombres', {
										rules: [{ required: true, message: 'Porfavor ingrese el usuario', whitespace: true }],
									})
										(<Input className="item--input" placeholder="Nombres" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Apellidos</label>
									{getFieldDecorator('apellidos', {
										rules: [{ required: true, message: 'Porfavor ingrese el usuario', whitespace: true }],
									})
										(<Input className="item--input" placeholder="Apellidos" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Numero de Identidad</label>
									{getFieldDecorator('dni', {
										rules: [{ required: true, message: 'Porfavor ingrese el numero de identidad', whitespace: true }],
									})(
										<Input type="number" className="item--input" placeholder="DNI" />)}
								</Form.Item>
								<Form.Item className="item">
									<label>Genero</label>
									<div className="select-content">
										{getFieldDecorator('idGenero', {
											rules: [{ required: true, message: 'Please select your country!' }],
										})(
											<Select className="item--input" placeholder="Genero">
												<Option value="1">Mujer</Option>
												<Option value="2">Hombre</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Cargo</label>
									{getFieldDecorator('rol', {
										rules: [{ required: true, message: 'Porfavor ingrese su cargo', whitespace: true }],
									})(
										<Input className="item--input" placeholder="Cargo Desempeñado" />)}
								</Form.Item>
							</div>
						</div>
					</div>
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Registrar</Button>
					</div>
				</Form>
				{success &&
					<div>
						<Alert
							message="Usuario registardo"
							type="success"
							closable
						/>
					</div>
				}
				{error &&
					<div>
						<Alert
							message="Error al registrar el usuario"
							type="error"
							closable
						/>
					</div>
				}
			</div>
		</section>
	)
}

export const SingUp = Form.create({ name: 'FormSingUp' })(FormSingUp);