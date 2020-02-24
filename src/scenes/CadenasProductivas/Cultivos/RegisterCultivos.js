import React from "react";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';
import { TimePicker } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

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

class RegisterCultivos extends React.Component {
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
		const config = {
			rules: [{ type: 'object', required: true, message: 'Porfavor seleccione la fecha' }],
		  };
		return (
			<section >
				<LayoutHome />
				<div className="RegisterInfra">
					<div className="users--title">
						<h1>Registrar Cultivo</h1>
					</div>
					<Form layout="inline" className="RegisterInfra--form" onSubmit={this.handleSubmit}>
						<div className="RegisterInfra--form__content-1">

							<div className="RegisterInfra--form__content-1--rigth">
								<div className="RegisterInfra--form__content-1--rigth--title">
									Datos Requeridos
                                </div>
								<div className="form">
								<Form.Item className="item">
										<label>Productor encargado del Cultivo</label>
										<div className="select-content">
											{getFieldDecorator('idencargado', {
												rules: [{ required: true, message: 'Porfavor seleccione el Encargado' }],
											})(
												<Select className="select" defaultValue="0">
													<Option value="0">juan</Option>
													<Option value="1">maria</Option>
													<Option value="2">jose</Option>
												</Select>
											)}
										</div>
									</Form.Item>
									<Form.Item className="item">
										<label>Covertura (Hectareas)</label>
										{getFieldDecorator('hectareas', {
											rules: [{ required: true, message: 'Porfavor ingrese la covertura', whitespace: true }],
										})(<Input type="number" className="item--input" placeholder="Metros Cuadrados" />)}
									</Form.Item>
									<Form.Item className="item" >
										<label>Fecha de inicio</label>
									{getFieldDecorator('date-time-picker', config)(
										<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Seleccione la fecha"/>,
									)}
									</Form.Item>
									<Form.Item className="item">
										<label>linea productiva a sembrar</label>
										<div className="select-content">
											{getFieldDecorator('idlineaproductiva', {
												rules: [{ required: true, message: 'Porfavor seleccione una linea productiva' }],
											})(
												<Select className="select" defaultValue="0">
													<Option value="0">cafe</Option>
													<Option value="1">cacao</Option>
													<Option value="2">caña</Option>
												</Select>
											)}
										</div>
									</Form.Item>
									<Form.Item className="item">
										<label>Municipio de la Infraestructura</label>
										<div className="select-content">
											{getFieldDecorator('idmunicipio', {
												rules: [{ required: true, message: 'Porfavor seleccione un municipio' }],
											})(
												<Select className="select" defaultValue="0">
													<Option value="1">Ninguno</Option>
													<Option value="2">Florencia</Option>
													<Option value="3">Paujil</Option>
												</Select>
											)}
										</div>
									</Form.Item>
									<Form.Item className="item">
										<label>Vereda de la Infraestructura</label>
										<div className="select-content">
											{getFieldDecorator('idvereda', {
												rules: [{ required: true, message: 'Porfavor seleccione un vereda' }],
											})(
												<Select className="select" defaultValue="0">
													<Option value="0">Ninguno</Option>
													<Option value="1">hola</Option>
													<Option value="2">fdgfdg</Option>
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

RegisterCultivos = withRouter(RegisterCultivos);
export default Form.create({ name: 'formLogin' })(RegisterCultivos);