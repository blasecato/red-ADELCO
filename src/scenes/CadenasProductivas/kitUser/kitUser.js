import React, { useEffect, useState } from 'react';
import { Table, Divider, Tag, Card, Button, Select, Form } from 'antd';
import { Input, Icon } from 'antd';
import { organization as organizationActions } from '../../../services/organization/organizationActions';
import { kit as kitActions } from '../../../services/Kit/KitActions';
import { crop as cropActions } from "../../../services/crop/cropActions";
import { cade as cadeActions } from "../../../services/line-cadena/line-cadenaActions";

import { useSelector, useDispatch } from 'react-redux';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { handleAction } from 'redux-actions';

const { Option } = Select;
const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const KitUser = (props) => {

	// const { dateLine } = useSelector(state => state.cade)
	const { kit } = useSelector(state => state.kit)
	const dispatch = useDispatch()
	const [kitU , isKitU]  = useState(false)

	// const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

	useEffect(() => {
		dispatch(kitActions.getKitUser())
	}, [])

	console.log("asddsfs", kit && kit.kitUsers)

	const cont = kit && kit.length

	// useEffect(() => {
	// 	const kits = undefined;
	// 		kit.forEach( kit => {
	// 			console.log(kit.id)
	// 			kit.kitUsers.forEach(element => {
	// 				// console.log("prod",element.id)
	// 				kits = element
	// 			});
	// 		}); 
	// 		console.log(kits)

		
	// }, [kit])
	


	return (
		<div className="deleteupdateuser beneficioarios-org">
			<LayoutHome />
			<div className="queryuser__content">
				<div className="users--title">
					<h1>Usuarios con kit de usuarios</h1>
				</div>


			<div className="tablet">
				{kit && kit.length > 0 && kit.map((data,index)=>
				<div>
					<div className="header_tab" key={index}>
						<h1><span>Nombre del kit:</span> {data.nombre}</h1>
					</div>
					{data.kitUsers.length && data.kitUsers.map((kit,i)=>
						<div className="tablet__content_tab" key={i}>
							<h1><span>Codigo de beneficiario:</span>{kit.idProductor.id}</h1>
							<h1><span>DNI de beneficiario:</span>{kit.idProductor.dni}</h1>
							<h1><span>Nombres de beneficiario:</span>{kit.idProductor.nombres} {kit.idProductor.apellidos}</h1>
						</div>
					)
					}
				</div>
					
				)
				}
			</div> 

			<h1 className="textttt">Si un beneficiario se repite 2 o mas veces!! eso quiere decir que ha recivido este kit en mas de una ocación.</h1>

			</div>

		</div>
	)
}
