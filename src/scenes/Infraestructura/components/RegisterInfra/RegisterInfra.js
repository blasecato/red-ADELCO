import React from "react";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";

const { TextArea } = Input;

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
	console.log(date, dateString);
}
const { Option } = Select;

function handleChange(value) {
	console.log(`selected ${value}`);
}
const dateFormat = 'YYYY-MM-DD';

const props = {
	name: 'file',
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

class RegisterInfra extends React.Component {
	state = {
		value: 1,
		desisable: true,
	};
	componentDidMount() {
		// To  submit button at the beginning.
		this.props.form.validateFields();
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	toggle = () => {
		this.setState({
			desisable: !this.state.desisable,
		});
	};
	onChange = e => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
	};
	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const usernameError = isFieldTouched('username') && getFieldError('username');
		const passwordError = isFieldTouched('password') && getFieldError('password');

		return (
			<section >
				<LayoutHome />
				<div className="RegisterInfra">
					<div className="users--title">
						<h1>Registrar Infraestructura</h1>
					</div>
					<Form layout="inline" className="RegisterInfra--form" onSubmit={this.handleSubmit}>
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
										})(<Input type="text" className="item--input" placeholder="Nombre" />)}

									</Form.Item>
									<Form.Item className="item">
										<label>Covertura (metros)</label>
										{getFieldDecorator('phone', {
											rules: [{ required: true, message: 'Porfavor ingrese la covertura', whitespace: true }],
										})(<Input type="number" className="item--input" placeholder="Metros Cuadrados" />)}
									</Form.Item>
									<Form.Item className="item">
										<label>Municipio la Infraestructura</label>
										<div className="select-content">
											{getFieldDecorator('idmunicipio', {
												rules: [{ required: true, message: 'Porfavor seleccione un municipio' }],
											})(
												<Select className="select" defaultValue="0">
													<Option value="0">Ninguno</Option>
													<Option value="1">Florencia</Option>
													<Option value="2">Paujil</Option>
												</Select>
											)}
										</div>
									</Form.Item>
									<Form.Item className="item">
										<label>Vereda la Infraestructura</label>
										<div className="select-content">
											{getFieldDecorator('idvereda', {
												rules: [{ required: true, message: 'Porfavor seleccione una vereda' }],
											})(
												<Select className="select" defaultValue="0">
													<Option value="0">Ninguno</Option>
													<Option value="1">hola</Option>
													<Option value="2">fdgfdg</Option>
												</Select>
											)}
										</div>
									</Form.Item>
									<Form.Item className="item">
										<label>Estado de la Infraestructura</label>
										<div className="select-content">
											{getFieldDecorator('idestado', {
												rules: [{ required: true, message: 'Porfavor seleccione un estado' }],
											})(
												<Select className="select" defaultValue="0">
													<Option value="0">activo</Option>
													<Option value="1">hola</Option>
													<Option value="2">fdgfdg</Option>
												</Select>
											)}
										</div>
									</Form.Item>
									<Form.Item className="item">
										<label>Representante</label>
										{getFieldDecorator('representante', {
											rules: [{ required: true, message: 'Porfavor ingrese el nombre del representante', whitespace: true }],
										})(<Input placeholder="nomnre del representante" className="item--input" />)}
									</Form.Item>
									<Form.Item className="item">
										<label>Posicion de planos</label>
										{getFieldDecorator('planos', {
											rules: [{ required: true, message: 'Porfavor ingrese la posicion de planos', whitespace: true }],
										})(<Input placeholder="Posicion de los Planos" className="item--input" />)}
									</Form.Item>
									<Form.Item className="item">
										<label>Direccion</label>
										{getFieldDecorator('direccion', {
											rules: [{ required: true, message: 'Porfavor ingrese la direccion', whitespace: true }],
										})(<Input placeholder="direccion" className="item--input" />)}
									</Form.Item>
									<Form.Item className="item">
										<label>Descripcion</label>
										{getFieldDecorator('descripcion', {
											rules: [{ required: true, message: 'Porfavor ingrese la descripcion', whitespace: true }],
										})(<TextArea placeholder="direccion" className="item--input" />)}
									</Form.Item>
									<Form.Item className="item">
										<label>Editar tipo de Infraestructura</label>
										<div className="select-content">
										{getFieldDecorator('idtipo', {
												rules: [{ required: true, message: 'Porfavor seleccione un municipio' }],
											})(
												<Select className="select" defaultValue="0">
													<Option value="0">Vial</Option>
													<Option value="1">Comunitario</Option>
													<Option value="2">Productivo</Option>
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
		);
	}
}

RegisterInfra = withRouter(RegisterInfra);
export default Form.create({ name: 'formLogin' })(RegisterInfra);