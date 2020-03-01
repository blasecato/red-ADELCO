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

class RegisterVereda extends React.Component {
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
						<h1>Registrar Vereda</h1>
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
                                        {getFieldDecorator('nombres', {
                                            rules: [{ required: true, message: 'Porfavor ingrese el nombre', whitespace: true }],
                                        })(<Input placeholder="Nombre" className="item--input" />)}
                                    </Form.Item>
									<Form.Item className="item">
										<label>Municipio</label>
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

RegisterVereda = withRouter(RegisterVereda);
export default Form.create({ name: 'formLogin' })(RegisterVereda);