import React, { useState } from "react"
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom'

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";

const { Option } = Select;

const UserSocial = ({ form }) => {

  const { validateFields, getFieldDecorator } = form
  const [state, setstate] = useState({
    value: 1,
    desisable: true,
  })

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
                Datos Sociales
              </div>
              <div className="form">
                <Form.Item className="item">
                  <label>Seleccione Usuario</label>
                  <div className="select-content">
                    {getFieldDecorator('idUser', {
                      rules: [{ required: true, message: 'Porfavor seleccione un usuario!' }],
                    })(
                      <Select className="item--input" placeholder="Genero">
                        <Option value="1">juan</Option>
                        <Option value="2">maria</Option>
                      </Select>,
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione Etnia</label>
                  <div className="select-content">
                    {getFieldDecorator('idEtnia', {
                      rules: [{ required: true, message: 'Porfavor seleccione una etnia!' }],
                    })(
                      <Select className="item--input" placeholder="Etnia">
                        <Option value="1">no aplica</Option>
                        <Option value="2">indigena</Option>
                        <Option value="3">afro</Option>
                      </Select>,
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione Cargo</label>
                  <div className="select-content">
                    {getFieldDecorator('idCargo', {
                      rules: [{ required: true, message: 'Porfavor seleccione un cargo!' }],
                    })(
                      <Select className="item--input" placeholder="Cargo">
                        <Option value="1">no aplica</Option>
                        <Option value="2">Representante</Option>
                        <Option value="3">participante</Option>
                      </Select>,
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione Parentesco Familiar</label>
                  <div className="select-content">
                    {getFieldDecorator('idParentesco', {
                      rules: [{ required: true, message: 'Porfavor seleccione un parentesco!' }],
                    })(
                      <Select className="item--input" placeholder="parentesco familiar">
                        <Option value="1">no aplica</Option>
                        <Option value="2">Jefe de familia</Option>
                        <Option value="3">Conyugue</Option>
                        <Option value="4">hijo/a</Option>
                      </Select>,
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione Discapacidad</label>
                  <div className="select-content">
                    {getFieldDecorator('idDiscapacidad', {
                      rules: [{ required: true, message: 'Porfavor seleccione una Discapacidad!' }],
                    })(
                      <Select className="item--input" placeholder="Discapacidad fisica">
                        <Option value="1">no aplica</Option>
                        <Option value="2">Falta extremidad</Option>
                        <Option value="3">Falta sentido</Option>
                      </Select>,
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione si es victima del Conflicto</label>
                  <div className="select-content">
                    {getFieldDecorator('idConflicto', {
                      rules: [{ required: true, message: 'Porfavor seleccione una Opcion' }],
                    })(
                      <Select className="item--input" placeholder="Victima del conflicto armado">
                        <Option value="1">no aplica</Option>
                        <Option value="2">Victima</Option>
                        <Option value="3">Ex-Combatiente</Option>
                      </Select>,
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione si es victima del Organizacion</label>
                  <div className="select-content">
                    {getFieldDecorator('idConflicto', {
                      rules: [{ required: true, message: 'Porfavor seleccione una Organizacion' }],
                    })(
                      <Select className="item--input" placeholder="Organizacion perteneciente">
                        <Option value="1">Asmucoca</Option>
                      </Select>,
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione Jefe de familia</label>
                  <div className="select-content">
                    {getFieldDecorator('idFamiliar', {
                      rules: [{ required: true, message: 'Porfavor seleccione una Opcion' }],
                    })(
                      <Select className="item--input" placeholder="Organizacion perteneciente">
                        <Option value="1">No aplica</Option>
                        <Option value="2">juan</Option>
                        <Option value="3">maria</Option>
                      </Select>,
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
  )
}

export const RegisterUserSocial = Form.create({ name: 'UserSocial' })(UserSocial);