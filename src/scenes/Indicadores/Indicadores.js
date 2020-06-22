import React, { useState, useEffect } from "react";
import { Collapse, Upload, message, Button, Icon,Form,Input } from 'antd';
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from 'react-redux';

import pdf from "../../assets/image/pdf3.png";
import { indicators as indicatorAcctions } from "../../services/indicadores/IndicadoresActions";

const { TextArea } = Input;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;




const IndicadoresForm = (props) => {

    const dispatch = useDispatch()
	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,setFieldsValue,resetFields } = props.form;
    const { indicators } = useSelector(state => state.indicator)
    const [id , setId] = useState(0)
    const [state, setstate] = useState({
		value: 1,
		desisable: true,
	})
    useEffect(() => {
        dispatch(indicatorAcctions.getIndicators())
    }, [])

    const handleSubmit = e => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
                const { idmunicipio, ...result } = values
                
                const data = {
                    id:id,
                    ...values
                }
                console.log(data)

                dispatch(indicatorAcctions.update(data))
				resetFields()
				props.history.push("/home")
			}
		})
    }
    const onChange = e => {
		setstate({
			...state, value: e.target.value,
		})
    }
    console.log(id)

    return (
        <div className="indicadores">
            <LayoutHome />
            <h1 className="indicadores--title">Indicadores</h1>
            <div className="list-indicadores">
                <Collapse accordion>
                    {indicators.length > 0 &&

                        indicators.map((data, index) =>
                            <Panel header={<div className="cod" onClick={()=>{setId(data.id)}}>{data.id}<span>{data.descripcion}</span></div>} key={index}>
                                <div className="content">
                                    <div className="content-card">
                                        <h1 className="content-title">Objetivos</h1>
                                        <p>{data.idObjetivo2.nombre}</p>
                                    </div>
                                    <div className="content-card">
                                        <h1 className="content-title">Avances</h1>
                                        {data.avances === null || data.avances === "" ?
                                        <p>Digite nuevos avances.</p>
                                        :
                                        <p>{data.avances}</p>
                                        }
                                    </div>
                                    <div className="content-card">
                                        <h1 className="content-title">Meta</h1>
                                        <p>{data.meta} Personas</p>
                                    </div>
                                    <div className="content-card">
                                        <h1 className="content-title">Observaciones</h1>
                                        <p>{data.observacion}</p>
                                        {/* <Button type="primary"><Icon type="edit" /> Editar</Button> */}
                                    </div>
                                    <div className="content-card">
                                        <h1 className="content-title">Fuentes de Verificacion</h1>
                                        <p>{data.fuenteVerificacion}</p>
                                    </div>
                                    <div className="content-card">
                                        <h1 className="content-title">Actualizar Avances</h1>
                                         
                                        <Form layout="inline" className="RegisterOrg--form" onSubmit={handleSubmit}>
                                            <Form.Item className="item">
                                                {getFieldDecorator('avances', {
                                                    rules: [{ required: true, message: 'Porfavor ingrese el tema empresarial', whitespace: true }],
                                                })(<TextArea placeholder="tema empresarial" allowClear onChange={onChange} />)}
                                            </Form.Item>
                                            <div className="btn">
                                                <Button htmlType="submit"><Icon type="form" />Actualizar</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Panel>
                        )
                    }
                </Collapse>

            </div>
        </div>
    );
}

export const Indicadores = Form.create({ name: 'IndicadoresForm' })(IndicadoresForm);