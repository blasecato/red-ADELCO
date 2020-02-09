import React, { useEffect } from 'react';
import { Form, Input, Button, Row, Col, Layout, Typography, Alert } from 'antd'
import { useDispatch } from 'react-redux'
import { auth } from '../../services/Auth/AuthActions'

const Login = ({ form, }) => {

  const { login } = auth;
  const dispatch = useDispatch()
  const { getFieldDecorator, validateFields } = form

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        dispatch(login(values.user.toLowerCase().trim(), values.password))
      }
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <Form.Item label='Correo'>
            {getFieldDecorator('user', {
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
          <Form.Item>
            <Button htmlType="submit" >continuar</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export const FormLogin = Form.create({ name: 'FormLogin' })(Login);
