import React from "react";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

const { Option } = Select;

class SingUp extends React.Component {
    state = {
        value: 1,
        desisable: true,
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };



    render() {
        const { getFieldDecorator } = this.props.form;

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
                                <div className="registeruser--form__content-1--rigth--title">
                                    Datos Personales
                                </div>
                                <div className="form">
                                    <Form.Item className="item">
                                    <label>Usuario</label>
                                        {getFieldDecorator('username', {
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
                                        <label>Nombres y Apellidos</label>
                                        {getFieldDecorator('names', {
                                            rules: [{ required: true, message: 'Porfavor ingrese el usuario', whitespace: true }],
                                        })
                                            (<Input className="item--input" placeholder="Nombre y Apellido" />)}
                                    </Form.Item>
                                    <Form.Item className="item">
                                        <label>Numero de Identidad</label>
                                        {getFieldDecorator('dni', {
                                            rules: [{ required: true, message: 'Porfavor ingrese el numero de identidad', whitespace: true }],
                                        })(
                                            <Input type="number" className="item--input" placeholder="DNI" />)}
                                    </Form.Item>

                                    <Form.Item className="item">
                                        <label>Cargo</label>
                                        {getFieldDecorator('cargo', {
                                            rules: [{ required: true, message: 'Porfavor ingrese su cargo', whitespace: true }],
                                        })(
                                            <Input  className="item--input" placeholder="Cargo Desempeñado" />)}
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

SingUp = withRouter(SingUp);
export default Form.create({ name: 'formLogin' })(SingUp);