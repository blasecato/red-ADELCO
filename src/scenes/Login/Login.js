import React, { useEffect } from 'react';
import { Form, Input, Button, Row, Col, Layout, Typography, Alert } from 'antd'
import { useDispatch } from 'react-redux'
import { auth } from '../../services/Auth/AuthActions'
import { Link } from 'react-router-dom';

import img  from "../../assets/image/img/org3.jpg";


const Login = ({ form, history}) => {

  const { login } = auth;
  const dispatch = useDispatch()
  const { getFieldDecorator, validateFields ,resetFields} = form

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      console.log(values)
      if (!err) {
        dispatch(login(values.email.toLowerCase().trim(), values.password))
        
      }
    });
  };

  return (
    <div className="login">
      <div className="login--card">
        <Form className="form" onSubmit={handleSubmit}>
          <div className="lado">
              <img src={img}/>
          </div>
          <div className="lado">
            <div className="title">Iniciar Sesión</div>
            <div>
              <Form.Item label='Usuario'>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: `Por favor ingrese su correo` }],
                })(
                  <Input />
                )}
              </Form.Item>
            </div>

            <div>
              <Form.Item label='Contraseña'>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: `Por favor ingrese su contraseña.` }],
                })(
                  <Input type="password" />
                )}
              </Form.Item>
            </div>

            <div>
              <Form.Item className="btn-content">
                <Button htmlType="submit" >continuar</Button>
              </Form.Item>
              
            </div>
          </div>
        </Form>
      </div>

    </div>
  )
}

export const FormLogin = Form.create({ name: 'FormLogin' })(Login);
