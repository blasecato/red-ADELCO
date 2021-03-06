import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { producer as producerActions } from '../../services/Producer/ProducerActions'
import { useDispatch, useSelector } from "react-redux";

import LayoutHome from "../LayoutHome/LayoutHome";


const { Option } = Select;

export const SelectComponente = (props) => {

    const { genderDate, getProducerUpdateDate } = useSelector(state => state.producer)
    const { validateFields, getFieldDecorator } = props.form
    const [state, setstate] = useState({
        value: 1,
        desisable: true,
      })
      const dispatch = useDispatch()

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
          <h1>Actualizar Beneficiario</h1>
        </div>
        <Form layout="inline" className="registeruser--form" onSubmit={handleSubmit}>


        <div className="registeruser--form__content-1">
            <div className="registeruser--form__content-1--left">
              <div className="registeruser--form__content-1--rigth--title">
                Datos Personales
              </div>
              <div className="form">
              <Form.Item className="item">
                  <label>Codigo</label>
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: 'Porfavor ingrese el nombre', whitespace: true }],
                  })(<Input placeholder="Codigo" className="item--input" />)}
                </Form.Item>
                <Form.Item className="item">
                  <label>Nombres</label>
                  {getFieldDecorator('nombres', {
                    rules: [{ required: true, message: 'Porfavor ingrese el nombre', whitespace: true }],
                  })(<Input placeholder="Nombre" className="item--input" />)}
                </Form.Item>
                <Form.Item className="item">
                  <label>Apellido</label>
                  {getFieldDecorator('apellidos', {
                    rules: [{ required: true, message: 'Porfavor ingrese el Apellido', whitespace: true }],
                  })
                    (<Input className="item--input" placeholder="Apellido" />)}
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
                  <label>Telefono</label>
                  {getFieldDecorator('telefono', {
                    rules: [{ required: true, message: 'Porfavor ingrese el numero telefonico', whitespace: true }],
                  })(
                    <Input type="number" className="item--input" placeholder="Telefono" />)}
                </Form.Item>
                <Form.Item className="item">
                  <label>Edad</label>
                  {getFieldDecorator('edad', {
                    rules: [{ required: true, message: 'Porfavor ingrese la edad', whitespace: true }],
                  })(
                    <Input type="number" className="item--input" placeholder="Edad" />)}
                </Form.Item>


                <Form.Item className="item">
                  <label>Seleccione Parentesco Familiar</label>
                  <div className="select-content">
                    {getFieldDecorator('idParentesco2', {
                      rules: [{ required: true, message: 'Porfavor seleccione un parentesco!' }],
                    })(
                      <Select
                        className="item--input"
                        placeholder="parentesco familiar"
                        filterOption={(inputValue, option) =>
                          option.props.children
                            .toString()
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        }
                        showSearch
                      >
                        {getProducerUpdateDate &&
                          getProducerUpdateDate.parentesco.map((date, index) => <Option key={index} value={date.id} >{date.nombre}</Option>)}
                      </Select>
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione si es victima del Conflicto</label>
                  <div className="select-content">
                    {getFieldDecorator('idConflicto2', {
                      rules: [{ required: true, message: 'Porfavor seleccione una Opcion' }],
                    })(
                      <Select
                        className="item--input"
                        placeholder="Victima del conflicto armado"
                        filterOption={(inputValue, option) =>
                          option.props.children
                            .toString()
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        }
                        showSearch
                      >
                        {getProducerUpdateDate &&
                          getProducerUpdateDate.conflicto.map((date, index) => <Option key={index} value={date.id} >{date.nombre}</Option>)}
                      </Select>
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Entidad Perteneciente</label>
                  {getFieldDecorator('entidad', {
                    rules: [{ required: true, message: 'Porfavor ingrese la entidad', whitespace: true }],
                  })(<Input placeholder="Codigo" className="item--input" />)}
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
export const SelectComponent = Form.create({ name: 'FormRegisterUser' })(SelectComponente);