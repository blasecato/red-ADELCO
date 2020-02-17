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

class RegisterOrg extends React.Component {
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
				<div className="RegisterOrg">
					<div className="users--title">
						<h1>Registrar Organizacion</h1>
					</div>
					<Form layout="inline" className="RegisterOrg--form" onSubmit={this.handleSubmit}>
						<div className="RegisterOrg--form__content-1">


							<div className="RegisterOrg--form__content-1--rigth">
								<div className="RegisterOrg--form__content-1--rigth--title">
									Datos Dela Organizacion
                                </div>
								<div className="form">
									<Form.Item className="item">
										<label>Nombre de la Organización</label>
										{getFieldDecorator('nombre', {
											rules: [{ required: true, message: 'Porfavor ingrese el nombre', whitespace: true }],
										})(<Input placeholder="Nombre" className="item--input" />)}
									</Form.Item>
									<Form.Item className="item">
										<label>Telefono de Contacto</label>
										{getFieldDecorator('phone', {
											rules: [{ required: true, message: 'Porfavor ingrese el nombre', whitespace: true }],
										})(<Input type="number" className="item--input" placeholder="Telefono" />)}
									</Form.Item>
									<Form.Item className="item">
                  <label>Municipio</label>
                  <div className="select-content">
                    {getFieldDecorator('idmunicipio', {
                      rules: [{ required: true, message: 'Porfavor seleccione un municipio' }],
                    })(
                      <Select className="select" defaultValue="0" placeholder="municipio">
												<Option value="0">Ninguna</Option>
												<Option value="1">Florencia</Option>
												<Option value="2">Paujil</Option>
											</Select>,
                    )}
                  </div>
                </Form.Item>
								<Form.Item className="item">
                  <label>Vereda</label>
                  <div className="select-content">
                    {getFieldDecorator('idvereda', {
                      rules: [{ required: true, message: 'Pofavor seleccione la vereda!' }],
                    })(
                      <Select className="select" defaultValue="0" placeholder="vereda">
												<Option value="0">Ninguna</Option>
												<Option value="1">vereda 1</Option>
												<Option value="2">vereda 2</Option>
											</Select>,
                    )}
                  </div>
                </Form.Item>
									<Form.Item className="item">
										<label>Representante</label>
										<div className="select-content">
                    {getFieldDecorator('iduser', {
                      rules: [{ required: true, message: 'Pofavor seleccione el Representante!' }],
                    })(
                      <Select className="select" defaultValue="0" placeholder="representante">
												<Option value="0">seleccione uno/a</Option>
												<Option value="1">juan torres</Option>
												<Option value="2">maria calderon</Option>
											</Select>,
                    )}
                  </div>
									</Form.Item>
									<Form.Item className="item">
										<label>Descripcion</label>
										{getFieldDecorator('description', {
											rules: [{ required: true, message: 'Porfavor ingrese la descripcion', whitespace: true }],
										})(<TextArea placeholder="descripcion de la organizacion" allowClear onChange={onChange} />)}
									</Form.Item>
									<Form.Item className="item">
										<label>Tema Empresaqrial</label>
										{getFieldDecorator('empresarial', {
											rules: [{ required: true, message: 'Porfavor ingrese el tema empresarial', whitespace: true }],
										})(<TextArea placeholder="tema empresarial" allowClear onChange={onChange} />)}
									</Form.Item>
									<Form.Item className="item">
										<label>Tema de Capacitacion</label>
										{getFieldDecorator('capaciti', {
											rules: [{ required: true, message: 'Porfavor la capacitacion', whitespace: true }],
										})(<TextArea placeholder="descripcion de la organizacion" allowClear onChange={onChange} />)}
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

RegisterOrg = withRouter(RegisterOrg);
export default Form.create({ name: 'formLogin' })(RegisterOrg);