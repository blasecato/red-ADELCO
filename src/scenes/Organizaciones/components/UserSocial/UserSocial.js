import React, { useState, useEffect } from "react"
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom'
import { producer as producerActions } from "../../../../services/Producer/ProducerActions";

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

const UserSocial = ({ form }) => {

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
        dispatch(producerActions.updateProducer(values))
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
                    {getFieldDecorator('dni', {
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
                  <label>Seleccione Etnia</label>
                  <div className="select-content">
                    {getFieldDecorator('idEtnia2', {
                      rules: [{ required: true, message: 'Porfavor seleccione una etnia!' }],
                    })(
                      <Select
                        className="item--input"
                        placeholder="Etnia"
                        filterOption={(inputValue, option) =>
                          option.props.children
                            .toString()
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        }
                        showSearch
                      >
                        {getProducerUpdateDate &&
                          getProducerUpdateDate.etnia.map((date, index) => <Option key={index} value={date.id} >{date.nombre}</Option>)}
                      </Select>
                    )}
                  </div>
                </Form.Item>
                <Form.Item className="item">
                  <label>Seleccione Cargo</label>
                  <div className="select-content">
                    {getFieldDecorator('idCargoOrg2', {
                      rules: [{ required: true, message: 'Porfavor seleccione un cargo!' }],
                    })(
                      <Select
                        className="item--input"
                        placeholder="Cargo"
                        filterOption={(inputValue, option) =>
                          option.props.children
                            .toString()
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        }
                        showSearch
                      >
                        {getProducerUpdateDate &&
                          getProducerUpdateDate.cargo.map((date, index) => <Option key={index} value={date.id} >{date.nombre}</Option>)}
                      </Select>
                    )}
                  </div>
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
                  <label>Seleccione Discapacidad</label>
                  <div className="select-content">
                    {getFieldDecorator('idDiscapacitado2', {
                      rules: [{ required: true, message: 'Porfavor seleccione una Discapacidad!' }],
                    })(
                      <Select
                        className="item--input"
                        placeholder="Discapacidad fisica"
                        filterOption={(inputValue, option) =>
                          option.props.children
                            .toString()
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        }
                        showSearch
                      >
                        {getProducerUpdateDate &&
                          getProducerUpdateDate.discapacidad.map((date, index) => <Option key={index} value={date.id} >{date.nombre}</Option>)}
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
                  <label>Seleccione si es victima del Organizacion</label>
                  <div className="select-content">
                    {getFieldDecorator('idOrganizacion2', {
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
                  <label>Seleccione Jefe de familia</label>
                  <div className="select-content">
                    {getFieldDecorator('idProductor2', {
                      rules: [{ required: true, message: 'Porfavor seleccione una Opcion' }],
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
                          getProducerUpdateDate.jefeFamily.map((date, index) => <Option key={index} value={date.dni} >{date.nombres}</Option>)}
                      </Select>
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

export const RegisterUserSocial = Form.create({ name: 'UserSocial' })(UserSocial);