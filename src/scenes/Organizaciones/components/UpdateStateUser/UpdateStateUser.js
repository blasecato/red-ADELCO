import React, { useState, useEffect } from "react"
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom'
import { producer as producerActions } from "../../../../services/Producer/ProducerActions";
import { organization as organizationActions , organization } from "../../../../services/organization/organizationActions";

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

const UpdateUserSocial = ({ form,history }) => {

  const { validateFields, getFieldDecorator } = form
  const [state, setstate] = useState({
    value: 1,
    desisable: true,
  })
  const dispatch = useDispatch()
  const { genderDate, getProducerUpdateDate } = useSelector(state => state.producer)
  const { users } = useSelector(state => state.organization)

  useEffect(() => {
    dispatch(producerActions.getProducerDate())
    dispatch(producerActions.getProducerUpdate())
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received register values of form: ', values);
        var idOrganizacion 
        for (var i = 0; i < users.length; i++) {
          if (users[i].id = values.id) {
            idOrganizacion = users[i].fk_organizacion
          }
        }
        const {id ,dniProductor,estado } = values ;
        const value = { id ,dniProductor,estado , idOrganizacion }
        console.log(value)
        dispatch(organizationActions.updateUser(value))
        form.resetFields()
        history.push("/organizaciones")
      }
    })
  }

  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    dispatch(organizationActions.getUser(value))
  }
    return (
    <section >
      <LayoutHome />
      <div className="registeruser">
        <div className="users--title">
          <h1>Eliminar Beneficiario de una organización.</h1>
        </div>
        <Form layout="inline" className="registeruser--form" onSubmit={handleSubmit}>
          <div className="registeruser--form__content-1">
            <div className="registeruser--form__content-1--left">
              <div className="registeruser--form__content-1--rigth--title">
                Datos Requeridos
              </div>
              <div className="">
                Seleccione Principalmente un usuario para poder saber a que Organización pertenece, y lograr actualizar su estado en dicha organización.
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
                        onChange={handleChange}
                      >
                        {genderDate && genderDate.map((date, index) => <Option key={index} value={date.dni} >{date.nombres} {date.apellidos}</Option>)}
                      </Select>
                    )}
                  </div>
                </Form.Item>
               
                <Form.Item className="item">
                  <label>Seleccione la Organizacion</label>
                  <div className="select-content">
                    {getFieldDecorator('id', {
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
                        {users && users.map((date, index) => <Option key={index} value={date.id} >{date.organizacion_nombre}</Option>)}
                      </Select>
                    )}
                  </div>
                </Form.Item>


                <Form.Item className="item">
                  <label>Seleccione la Organizacion</label>
                  <div className="select-content">
                    {getFieldDecorator('estado', {
                      rules: [{ required: true, message: 'Porfavor seleccione una estado' }],
                    })(
                      <Select
                        className="item--input"
                        placeholder="Estado en la organizacion"
                        filterOption={(inputValue, option) =>
                          option.props.children
                            .toString()
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        }
                        showSearch
                      >
                        <Option key={1} value={"Inactivo"} >Inactivo</Option>
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

export const FormUpdateUserSocial = Form.create({ name: 'UpdateUserSocial' })(UpdateUserSocial);