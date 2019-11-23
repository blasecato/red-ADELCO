import React from "react";
import { Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

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

class RegisterUser extends React.Component {
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
                <div className="registeruser">
                    <div className="users--title">
                        <h1>Registrar Beneficiario</h1>
                    </div>
                    <Form layout="inline" className="registeruser--form" onSubmit={this.handleSubmit}>
                        <div className="registeruser--form__content-1">
                            <div className="registeruser--form__content-1--left">
                                <Avatar size={300} icon="user" />
                                <Button><Icon type="camera" />Subir Foto</Button>
                            </div>
                            <div className="registeruser--form__content-1--rigth">
                                <div className="registeruser--form__content-1--rigth--title">
                                    Datos Personales
                                </div>
                                <div className="form">
                                    <Form.Item className="item">
                                        <label>Nombres</label>
                                        <Input type="text" className="item--input" placeholder="Nombre" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Apellido</label>
                                        <Input type="text" className="item--input" placeholder="Apellido" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Numero de Identidad</label>
                                        <div className="select-content">
                                            <Select defaultValue="CC" >
                                                <Option value="CC">CC</Option>
                                                <Option value="TI">TI</Option>
                                                <Option value="TE">TE</Option>
                                            </Select>
                                            <Input  type="number" className="item--input" placeholder="DNI" />
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Genero</label>
                                        <div className="select-content">
                                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                                <Radio value={1}>Hombre</Radio>
                                                <Radio value={2}>Mujer</Radio>
                                            </Radio.Group>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="registeruser--form__content-1">
                            <div className="registeruser--form__content-1--rigth">
                                <div className="registeruser--form__content-1--rigth--title title-2">
                                    Datos Sociales
                                </div>
                                <div className="form f-2">
                                    <Form.Item className="item">
                                        <label>Relacion Con la Guerra</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1" >
                                                <Option value="1">Ninguna</Option>
                                                <Option value="2">Ex-conbatiente</Option>
                                                <Option value="3">Damnificados</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Entidad</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1">
                                                <Option value="1">Ninguna</Option>
                                                <Option value="2">Entidad 1</Option>
                                                <Option value="3">Entidad 2</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Grupo Etnico</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1">
                                                <Option value="1">Ninguna</Option>
                                                <Option value="2">indigena</Option>
                                                <Option value="3">Rural</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="registeruser--form__content-1--rigth">
                                <div className="form">
                                    <Form.Item className="item">
                                        <label>Fecha de Nacimiento</label>
                                        <div className="select-content">
                                            <DatePicker defaultValue={moment('2015-06-06', dateFormat)} onChange={onChange} />
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Pais de Nacimiento</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1">
                                                <Option value="1">Ninguna</Option>
                                                <Option value="2">Colombia</Option>
                                                <Option value="3">Venezuela</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Departamento de Nacimiento</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0">
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">Caqueta</Option>
                                                <Option value="2">Huila</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Pueblo de Nacimiento</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0">
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">Florencia</Option>
                                                <Option value="2">Paujil</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Tipo de Sangre</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0">
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">O</Option>
                                                <Option value="2">A</Option>
                                            </Select>
                                            <Select className="select" defaultValue="0">
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">+</Option>
                                                <Option value="2">-</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Telefono</label>
                                        <Input  type="number" className="item--input" placeholder="Telefono" />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="registeruser--form__content-1">
                            <div className="registeruser--form__content-1--rigth c-1">
                                <div className="registeruser--form__content-1--rigth--title">
                                    Datos Laborales
                                </div>
                                <div className="form f-2">
                                    <Form.Item className="item">
                                        <label>Departamento</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0" >
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">Caqueta</Option>
                                                <Option value="2">Huila</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Municipio</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0" >
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">Florencia</Option>
                                                <Option value="2">Paujil</Option>
                                                <Option value="3">Montañita</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Vereda</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0" >
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">vereda 1</Option>
                                                <Option value="2">vereda 2</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Direccion finca</label>
                                        <Input  type="text" className="item--input" placeholder="Direccion"  />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Nombre Finca</label>
                                        <Input  type="text" className="item--input" placeholder="Nombre Finca" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Puesto o Relacion con el Jefe de Familia</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="0" >
                                                <Option value="0">Ninguna</Option>
                                                <Option value="1">Jefe de Familia</Option>
                                                <Option value="2">Esposa/o</Option>
                                                <Option value="3">hijo/a</Option>
                                                <Option value="4">Hermano/a</Option>
                                                <Option value="5">primo/a</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="registeruser--form__content-1">
                            <div className="registeruser--form__content-1--rigth c-1">
                                <div className="registeruser--form__content-1--rigth--title">
                                    Beneficios
                                </div>
                                <div className="form f-2">
                                    <Form.Item className="item">
                                        <label>Beneficio #1</label>
                                        <Input  type="text" className="item--input" placeholder="Nombre beneficio" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Beneficio #2</label>
                                        <Input  type="text" className="item--input" placeholder="Nombre beneficio" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Beneficio #3</label>
                                        <Input  type="text" className="item--input" placeholder="Nombre beneficio"/>
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

RegisterUser = withRouter(RegisterUser);
export default Form.create({ name: 'formLogin' })(RegisterUser);