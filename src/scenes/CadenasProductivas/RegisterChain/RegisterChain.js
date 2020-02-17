import React from "react";
import { Upload, message, Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';

// importacion de la cabecera 
import LayoutHome from "../../../components/LayoutHome/LayoutHome";

class RegisterChain extends React.Component {
	handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<section >
				{/* seccion donde creamos el componente formulario de registrar chain */}
				<LayoutHome />
				<div className="RegisterChain">
					{/* titulo de la vista */}
					<div className="users--title">
						<h1>Registrar Cadena Productiva</h1>
					</div>
					{/* formulario de registro */}
					<Form layout="inline" className="RegisterChain--form" onSubmit={this.handleSubmit}>
						<div className="RegisterChain--form__content-1">

							<div className="RegisterChain--form__content-1--rigth">
								<div className="form">
									{/* item input donde se requiere un tipo de dato espesifico  */}
									<Form.Item className="item">
										<label>Nombres</label>
										{getFieldDecorator('nombre', {
											rules: [{ required: true, message: 'Porfavor ingrese el usuario', whitespace: true }],
										})
											(<Input className="item--input" placeholder="Nombre" />)}
									</Form.Item>
								</div>
							</div>
						</div>
						{/* boton que recoje los valores y los registra */}
						<div className="btn">
							<Button htmlType="submit"><Icon type="form" />Registrar</Button>
						</div>
					</Form>
				</div>
			</section>
		);
	}
}

RegisterChain = withRouter(RegisterChain);
export default Form.create({ name: 'formLogin' })(RegisterChain);