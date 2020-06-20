import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Select } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { cade } from "../../../services/line-cadena/line-cadenaActions";
import { producer as producerActions } from "../../../services/Producer/ProducerActions";
import { crop } from "../../../services/crop/cropActions";
import { organization as organizationActions } from "../../../services/organization/organizationActions";
import { municipios as municipiosActions } from "../../../services/municipio/municipioActions";
import { atf as atfActions } from "../../../services/atf/AtfActions";


const { Option } = Select;

const FromAvancesAft = ({ form }) => {

	const { getFieldDecorator, validateFields, resetFields } = form
	const { dateInfra } = useSelector(state => state.cade)
	const { genderDate, getProducerUpdateDate } = useSelector(state => state.producer)
	const { cropsDate } = useSelector(state => state.crop)
	const { organizations } = useSelector(state => state.organization)
	const { municipios } = useSelector(state => state.municipio)

	const [veredas, setVeredas] = useState([])
	const [orgSelect, setOrgSelect] = useState(undefined)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(cade.getDateInfra());
		dispatch(producerActions.getProducerDate())
		dispatch(producerActions.getProducerUpdate())
		dispatch(municipiosActions.getMunicipios())
		dispatch(organizationActions.getOrganization())
	}, [])

	const handleSelectOrg = e => {
		setOrgSelect(organizations.find((x) => x.id === e))
	}

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				dispatch(atfActions.createAtf(values));
				resetFields()
			}
		})
	}

	return (
		<section >
			<LayoutHome />
			<div className="RegisterInfra">
				<div className="users--title">
					<h1>Avance AFT</h1>
				</div>
				<Form layout="inline" className="RegisterInfra--form" onSubmit={handleSubmit}>
					<div className="RegisterInfra--form__content-1">

						<div className="RegisterInfra--form__content-1--rigth">
							<div className="RegisterInfra--form__content-1--rigth--title">
								Datos Requeridos
							</div>
							<div className="form">
								<Form.Item className="item">
									<label>Ubicacion de los Avances del AFT</label>
									{getFieldDecorator('estado', {
										rules: [{ required: true, message: 'Porfavor ingrese el estado', whitespace: true }],
									})(<Input placeholder="Estado" className="item--input" />)}
								</Form.Item>
							</div>
						</div>
					</div>
					<div className="btn">
						<Button htmlType="submit"><Icon type="form" />Registrar Avances</Button>
					</div>
				</Form>
			</div>
		</section>
	)

}

export const AvancesAft = Form.create({ name: 'FromAvancesAft' })(FromAvancesAft);