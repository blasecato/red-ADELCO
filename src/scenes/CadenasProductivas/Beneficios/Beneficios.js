import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Select } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade } from "../../../services/line-cadena/line-cadenaActions";
import { producer as producerActions } from "../../../services/Producer/ProducerActions";
import { handleAction } from "redux-actions";


const { Option } = Select;

const FormBeneficios = ({ form,history }) => {

	const { getFieldDecorator, validateFields, resetFields } = form
	const { dateInfra } = useSelector(state => state.cade)
	const { genderDate, getProducerUpdateDate,producer } = useSelector(state => state.producer)
	const [user,setUser] = useState(undefined)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(cade.getDateInfra());
		dispatch(producerActions.getProducerDate())
		dispatch(producerActions.getProducerUpdate())
	}, [])


	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				setUser(values.dni);
				
				// const name = producer.nombres
				// const lastName = producer.apellidos
				// const id = producer.id
				// const edad = producer.edad
				// const telefono = producer.telefono
				// const idGenero = producer.idGenero.id
				// const idConflicto = producer.idConflicto.id
				// const idParentesco = producer.idParentesco.id
				// const idDiscapacitado = producer.idDiscapacitado.id

				
				const  {nombres,apellidos,id,edad,telefono,idGenero,idConflicto,idParentesco,idDiscapacitado , ...results} = producer
				

				const data = {
					nombres:nombres,
					apellidos:apellidos,
					id: id,
					edad: edad,
					telefono: telefono,
					idGenero: idGenero.id,
					idConflicto: idConflicto.id,
					idParentesco: idParentesco.id,
					idDiscapacitado: idDiscapacitado.id,
					...values
				}

				console.log("esta es la data",data)
				
				
				dispatch(producerActions.updateProducerId(data))
				resetFields()
				history.push("/users")
			}
		})
	}
	
	const handleUser = (dni) =>{
		dispatch(producerActions.get(dni));
	}

	return (
		<section >
			<LayoutHome />
			<div className="RegisterInfra">
				<div className="users--title">
					<h1>Beneficios de usuario</h1>
				</div>
				<Form layout="inline" className="RegisterInfra--form" onSubmit={handleSubmit}>
					<div className="RegisterInfra--form__content-1">

						<div className="RegisterInfra--form__content-1--rigth">
							<div className="RegisterInfra--form__content-1--rigth--title">
								Datos Requeridos
							</div>
							<div className="form">
								<Form.Item className="item">
									<label>Seleccione Usuario</label>
									<div className="select-content">
										{getFieldDecorator('dni', {
											rules: [{ required: true, message: 'Porfavor seleccione un usuario!' }],
										})(
											<Select
												
												className="select"
												placeholder="usuario"
												filterOption={(inputValue, option) =>
													option.props.children
														.toString()
														.toLowerCase()
														.includes(inputValue.toLowerCase())
												}
												showSearch
											>
												{genderDate && genderDate.map((date, index) => <Option key={index} value={date.dni}  onClick={()=>{handleUser(date.dni)}}>{date.nombres} {date.apellidos}</Option>)}
											</Select>
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Escuela de campo Agroforesteria sintropica - Patagonia, La Montañita</label>
									<div className="select">
										{getFieldDecorator('escuelaAgroforesteria', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Escuela de campo Agrosilvopastoril -  Puente Albania, El Paujil</label>
									<div className="select">
										{getFieldDecorator('escuelaAgrosilvopastoril', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Escuela de campo Aromaticas -  ETCR, La Montañita</label>
									<div className="select">
										{getFieldDecorator('escuelaAromaticas', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Escuela de campo Permacultura -ETCR, La Montañita</label>
									<div className="select">
										{getFieldDecorator('escuelaPermacultura', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Escuela de campo SR Cacao -  Cristalina, El Paujil</label>
									<div className="select">
										{getFieldDecorator('escuelaSRCacao', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Escuela de campo SR PNMB -  Patagonia, La Montañita</label>
									<div className="select">
										{getFieldDecorator('escuelaSRPNMB', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Parcela demostrativa</label>
									<div className="select">
										{getFieldDecorator('parcelaDemostrativa', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Gira Cacao Planadas, Tolima</label>
									<div className="select">
										{getFieldDecorator('cacaoPlanadas', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Gira Caña Panelera - San Jose de Isnos, Huila</label>
									<div className="select">
										{getFieldDecorator('canaPanelera', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Gira de intercambio Huitora, Solano</label>
									<div className="select">
										{getFieldDecorator('intercambioHuitora', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Gira PNMB -  Guaviare	Gira PNMB -  Iquitos, Peru</label>
									<div className="select">
										{getFieldDecorator('giraPNMB', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Selecione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Gira Cacao - Arauquita</label>
									<div className="select">
										{getFieldDecorator('giraCacao', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Formación en tecnicas de poscosecha cacao - El Doncello</label>
									<div className="select">
										{getFieldDecorator('poscosechaCacao', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Formación en transformación de Pulpas - Valle y Huila</label>
									<div className="select">
										{getFieldDecorator('transformacionPulpas', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Formación en manejo ecosistemico de PNMB, La Montañita</label>
									<div className="select">
										{getFieldDecorator('manejoEcosistemico', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Formación en transformación Chocolate - Bogota	</label>
									<div className="select">
										{getFieldDecorator('transformacionChocolate', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Formación en Certificacion Organica- Algeciras, Huila</label>
									<div className="select">
										{getFieldDecorator('certificadoOrganica', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Formación en transformacion PNMB - Patagonia, La Montañita</label>
									<div className="select">
										{getFieldDecorator('transformacionPNMB', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
								<Form.Item className="item">
									<label>Taller de Biopreparados para el Control Fitosanitario en cultivos</label>
									<div className="select">
										{getFieldDecorator('fitosanitarioCultivos', {
											rules: [{ required: true, message: 'seleccione porfavor!' }],
										})(
											<Select  className="select" placeholder="Seleccione">
												<Option value="Aplica">Aplica</Option>
												<Option value="No Aplica">No Aplica</Option>
											</Select>,
										)}
									</div>
								</Form.Item>
							</div>
						</div>
					</div>
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Actualizar datos</Button>
					</div>
				</Form>
			</div>
		</section>
	)

}

export const Beneficios = Form.create({ name: 'FormBeneficios' })(FormBeneficios);