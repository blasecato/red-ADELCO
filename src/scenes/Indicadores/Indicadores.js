import React, { useState, useEffect } from "react";
import { Collapse, Upload, message, Button, Icon } from 'antd';
import { getIndicadores } from "../../services/indicadores/indicadores";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { useDispatch, useSelector } from 'react-redux';

import pdf from "../../assets/image/pdf3.png";
import { indicators as indicatorAcctions } from "../../services/indicadores/IndicadoresActions";


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

export  const Indicadores = () => {

    const dispatch = useDispatch()

    const { indicators } = useSelector(state => state.indicator)

    useEffect(() => {
        dispatch(indicatorAcctions.getIndicators())
    }, [])

    return (
        <div className="indicadores">
            <LayoutHome />
            <h1 className="indicadores--title">Indicadores</h1>
            <div className="list-indicadores">
                <Collapse accordion>
                    {indicators.length > 0 &&

                        indicators.map((data, index) =>
                            <Panel header={<div className="cod">{data.id}<span>{data.descripcion}</span></div>} key={index}>
                                <div className="content">
                                    <div className="content-card">
                                        <h1 className="content-title">Objetivos</h1>
                                        <p>Obj. General</p>
                                    </div>
                                    <div className="content-card">
                                        <h1 className="content-title">Resultado</h1>
                                        <p>Contribuir a la consolidación de una paz estable y duradera en Colombia, a través del fortalecimiento del desarrollo socioeconómico y ambiental de territorios amazónicos en postconflictol</p>
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
                                        <h1 className="content-title">Cargar Fuentes</h1>
                                        <div className="content-pdf">
                                            <Upload className="btn-group" {...props}>
                                                <Button className="btn-pdf"><img src={pdf} /></Button>
                                            </Upload>
                                            <p>Subir PDF</p>
                                        </div>
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
