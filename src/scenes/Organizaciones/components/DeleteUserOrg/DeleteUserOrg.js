import React, { useState, useEffect } from "react"
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom'
import { producer as producerActions } from "../../../../services/Producer/ProducerActions";

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

const DeleteUserOrg = ({ form }) => {

    const { validateFields, getFieldDecorator } = form
    const [state, setstate] = useState({
        value: 1,
        desisable: true,
    })
    const dispatch = useDispatch()
    const { genderDate, getProducerUpdateDate } = useSelector(state => state.producer)

    useEffect(() => {
        dispatch(producerActions.getProducerDate())
        dispatch(producerActions.getProducerUpdate())
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log('Received register values of form: ', values)
            }
        })
    }

    return (
        <section >
            <LayoutHome />
            <div className="registeruser">
                <div className="users--title">
                    <h1>Eliminar Beneficiario de una Organización</h1>
                </div>
                <Form layout="inline" className="registeruser--form" onSubmit={handleSubmit}>
                    <div className="registeruser--form__content-1">
                        <div className="registeruser--form__content-1--left">
                            <div className="registeruser--form__content-1--rigth--title">
                                Datos
              </div>
                            <div className="form">
                                <Form.Item className="item">
                                    <label>Seleccione Usuario</label>
                                    <div className="select-content">
                                        {getFieldDecorator('dniProductor', {
                                            rules: [{ required: true, message: 'Porfavor seleccione un usuario!' }],
                                        })(
                                            <Select
                                                className="item--input"
                                                placeholder="usuario"
                                                filterOption={(inputValue, option) =>
                                                    option.props.children
                                                        .toString()
                                                        .toLowerCase()
                                                        .includes(inputValue.toLowerCase())
                                                }
                                                showSearch
                                            >
                                                {genderDate && genderDate.map((date, index) => <Option key={index} value={date.dni} >{date.nombres} {date.apellidos}</Option>)}
                                            </Select>
                                        )}
                                    </div>
                                </Form.Item>

                                <Form.Item className="item">
                                    <label>Seleccione la Organizacion</label>
                                    <div className="select-content">
                                        {getFieldDecorator('idOrganizacion', {
                                            rules: [{ required: true, message: 'Porfavor seleccione una Organizacion' }],
                                        })(
                                            <Select
                                                className="item--input"
                                                placeholder="Organizacion perteneciente"
                                                filterOption={(inputValue, option) =>
                                                    option.props.children
                                                        .toString()
                                                        .toLowerCase()
                                                        .includes(inputValue.toLowerCase())
                                                }
                                                showSearch
                                            >
                                                {getProducerUpdateDate &&
                                                    getProducerUpdateDate.organizacion.map((date, index) => <Option key={index} value={date.id} >{date.nombre}</Option>)}
                                            </Select>
                                        )}
                                    </div>
                                </Form.Item>
                                <Form.Item className="item">
                                    <label>Estado</label>
                                    <div className="Banco">
                                        {getFieldDecorator('estado', {
                                            rules: [{ required: true, message: 'Seleccione un Estado' }],
                                        })(
                                            <Select className="item--input" placeholder="Banco">
                                                <Option value="Activo">Activo</Option>
                                                <Option value="Inactivo">Inactivo</Option>
                                            </Select>,
                                        )}
                                    </div>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <Button htmlType="submit"><Icon type="form" />Actualizar</Button>
                    </div>
                </Form>
            </div>
        </section>
    )
}

export const DeleteUserOrgForm = Form.create({ name: 'DeleteUserOrg' })(DeleteUserOrg);