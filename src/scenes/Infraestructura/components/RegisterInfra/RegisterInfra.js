import React from "react";
import { Upload, message,Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
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
            desisable : !this.state.desisable,
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
                            <div className="RegisterInfra--form__content-1--left">
                                <Avatar size={300} icon="home" />
                                <Upload {...props}>
                                    <Button><Icon type="upload" />Subir Foto</Button>
                                </Upload>
                            </div>

                            <div className="RegisterInfra--form__content-1--rigth">
                                <div className="RegisterInfra--form__content-1--rigth--title">
                                    Datos Personales
                                </div>
                                <div className="form">
                                    <Form.Item className="item">
                                        <label>Nombres</label>
                                        <Input type="text" className="item--input" placeholder="Nombre" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Posicion de planos # de estan</label>
                                        <Input  type="number" className="item--input" placeholder="Telefono" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Covertura (metros)</label>
                                        <Input  type="number" className="item--input" placeholder="Telefono" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Pais de la Infraestructura</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1">
                                                <Option value="1">Ninguna</Option>
                                                <Option value="2">Colombia</Option>
                                                <Option value="3">Venezuela</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Departamento de la Infraestructura</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0">
                                                <Option value="0">Ninguno</Option>
                                                <Option value="1">Caqueta</Option>
                                                <Option value="2">Huila</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Pueblo la Infraestructura</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0">
                                                <Option value="0">Ninguno</Option>
                                                <Option value="1">Florencia</Option>
                                                <Option value="2">Paujil</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Vereda de la Infraestructura</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0" >
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">vereda 1</Option>
                                                <Option value="2">vereda 2</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Representante</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0" >
                                                <Option value="0">seleccione uno/a</Option>
                                                <Option value="1">juan torres</Option>
                                                <Option value="2">maria calderon</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Descripcion</label>
                                        <TextArea placeholder="descripcion de la Infraestructura" allowClear onChange={onChange} />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Editar tipo de Infraestructura</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0">
                                                <Option value="0">Vial</Option>
                                                <Option value="1">Comunitario</Option>
                                                <Option value="2">Productivo</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="btn">
                            <Button><Icon type="form" />Registrar</Button>
                        </div>
                    </Form>
                </div>
            </section>
        );
    }
}

RegisterInfra = withRouter(RegisterInfra);
export default Form.create({ name: 'formLogin' })(RegisterInfra);