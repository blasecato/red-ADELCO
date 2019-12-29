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

class Profile extends React.Component {
    state = {
        value: 1,
        disabled: true,
    };
    componentDidMount() {
        // To disabled submit button at the beginning.
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
    toggleDisabled = () => {
        this.setState({
            disabled: !this.state.disabled,
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
                <div className="profile">
                    <div className="users--title">
                        <h1>Perfil de Usuario</h1>
                    </div>
                    <Form layout="inline" className="profile--form" onSubmit={this.handleSubmit}>
                        <div className="profile--form__content-1">
                            <div className="profile--form__content-1--left">
                                <Avatar size={300} icon="user" />
                            </div>
                            <div className="profile--form__content-1--rigth">
                                <div className="profile--form__content-1--rigth--title">
                                    Datos Personales
                                </div>
                                <div className="form">
                                    <Form.Item className="item">
                                        <label>Nombres</label>
                                        <Input readonly type="text" className="item--input" placeholder="Nombre" value="Alfonso dylan" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Apellido</label>
                                        <Input readonly type="text" className="item--input" placeholder="Apellido" value="Castro Calderon" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Numero de Identidad</label>
                                        <div className="select-content">
                                            <Select defaultValue="CC" disabled>
                                                <Option value="CC">CC</Option>
                                                <Option value="TI">TI</Option>
                                                <Option value="TE">TE</Option>
                                            </Select>
                                            <Input readonly type="number" className="item--input" placeholder="DNI" value="153132123" />
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Genero</label>
                                        <div className="select-content">
                                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                                <Radio disabled={this.state.disabled} value={1}>Hombre</Radio>
                                                <Radio disabled={this.state.disabled} value={2}>Mujer</Radio>
                                            </Radio.Group>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="profile--form__content-1">
                            <div className="profile--form__content-1--rigth">
                                <div className="profile--form__content-1--rigth--title title-2">
                                    Datos Sociales
                                </div>
                                <div className="form f-2">
                                    <Form.Item className="item">
                                        <label>Relacion Con la Guerra</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="2" disabled>
                                                <Option value="1">Ninguna</Option>
                                                <Option value="2">Ex-conbatiente</Option>
                                                <Option value="3">Damnificados</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Entidad</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="2" disabled>
                                                <Option value="1">Ninguna</Option>
                                                <Option value="2">Entidad 1</Option>
                                                <Option value="3">Entidad 2</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Grupo Etnico</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1" disabled>
                                                <Option value="1">indigena</Option>
                                                <Option value="2">Rural</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="profile--form__content-1--rigth">
                                <div className="form">
                                    <Form.Item className="item">
                                        <label>Fecha de Nacimiento</label>
                                        <div className="select-content">
                                            <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled onChange={onChange} />
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Pais de Nacimiento</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1" disabled>
                                                <Option value="1">Colombia</Option>
                                                <Option value="2">Venezuela</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Departamento de Nacimiento</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1" disabled>
                                                <Option value="1">Caqueta</Option>
                                                <Option value="2">Huila</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Pueblo de Nacimiento</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1" disabled>
                                                <Option value="1">Florencia</Option>
                                                <Option value="2">Paujil</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Tipo de Sangre</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1" disabled>
                                                <Option value="1">O</Option>
                                                <Option value="2">A</Option>
                                            </Select>
                                            <Select className="select" defaultValue="1" disabled>
                                                <Option value="1">+</Option>
                                                <Option value="2">-</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Apellido</label>
                                        <Input readonly type="number" className="item--input" placeholder="Apellido" value="3213213213" />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="profile--form__content-1">
                            <div className="profile--form__content-1--rigth c-1">
                                <div className="profile--form__content-1--rigth--title">
                                    Datos Laborales
                                </div>
                                <div className="form f-2">
                                    <Form.Item className="item">
                                        <label>Departamento</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="2" disabled>
                                                <Option value="1">Caqueta</Option>
                                                <Option value="2">Huila</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Municipio</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="2" disabled>
                                                <Option value="1">Florencia</Option>
                                                <Option value="2">Paujil</Option>
                                                <Option value="3">Montañita</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Vereda</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1" disabled>
                                                <Option value="1">vereda 1</Option>
                                                <Option value="2">vereda 2</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Direccion finca</label>
                                        <Input readonly type="text" className="item--input" placeholder="Direccion" value="Vrda 3 call 4 sur" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Nombre Finca</label>
                                        <Input readonly type="text" className="item--input" placeholder="Nombre Finca" value="Vereda la Estrella" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Puesto o Relacion con el Jefe de Familia</label>
                                        <div className="select-content">
                                            <Select className="select" defaultValue="1" disabled>
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
                        <div className="profile--form__content-1">
                            <div className="profile--form__content-1--rigth c-1">
                                <div className="profile--form__content-1--rigth--title">
                                    Beneficios
                                </div>
                                <div className="form f-2">
                                    <Form.Item className="item">
                                        <label>Beneficio #1</label>
                                        <Input readonly type="text" className="item--input" placeholder="Nombre beneficio" value="Charlas de cacao" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Beneficio #2</label>
                                        <Input readonly type="text" className="item--input" placeholder="Nombre beneficio" value="viaje laboral" />
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Beneficio #3</label>
                                        <Input readonly type="text" className="item--input" placeholder="Nombre beneficio" value="" />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        );
    }
}

Profile = withRouter(Profile);
export default Form.create({ name: 'formLogin' })(Profile);