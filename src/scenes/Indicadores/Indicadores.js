import React from "react";
import { Collapse, Upload, message, Button, Icon } from 'antd';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

import pdf from "../../assets/image/pdf3.png";

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
class Indicadores extends React.Component {
    render() {
        return (
            <div className="indicadores">
                <LayoutHome />
                <h1 className="indicadores--title">Indicadores</h1>
                <div className="list-indicadores">
                    <Collapse accordion>
                        <Panel header={<div className="cod">CD1<span>Número de personas vinculadas al proceso de economía legal y proceso de desarrollo rural integral  (% mujeres)</span></div>} key="1">
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
                                    <p>2500 (30% mujeres)</p>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Observaciones</h1>
                                    <p>Se va a reportar el lunes sobre los 2500, se esta pendiente modificar en la ADENDA</p>
                                    <Button type="primary"><Icon type="edit" /> Editar</Button>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Fuentes de Verificacion</h1>
                                    <p>Caracterizacion de los beneficiarios- Censo Dane por la poblacion (4) por familia y Los aceptas de los beneficiarios</p>
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
                        <Panel header={<div className="cod">CD2<span>Percepción de la relación Estado-Sociedad de los actores involucrados en la acción</span></div>} key="2">
                            <div className="content">
                                <div className="content-card">
                                    <h1 className="content-title">Objetivos</h1>
                                    <p>Obj. General</p>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Resultado</h1>
                                    <p>Obj. General</p>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Meta</h1>
                                    <p>2500 (30% mujeres)</p>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Observaciones</h1>
                                    <p>Se va a reportar el lunes sobre los 2500, se esta pendiente modificar en la ADENDA</p>
                                    <Button type="primary"><Icon type="edit" /> Editar</Button>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Fuentes de Verificacion</h1>
                                    <p>Caracterizacion de los beneficiarios- Censo Dane por la poblacion (4) por familia y Los aceptas de los beneficiarios</p>
                                </div>
                            </div>
                        </Panel>
                        <Panel header={<div className="cod">CD3<span>Percepción de la relación Estado-Sociedad de los actores involucrados en la acción</span></div>} key="3">
                            <div className="content">
                                <div className="content-card">
                                    <h1 className="content-title">Objetivos</h1>
                                    <p>Obj. General</p>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Resultado</h1>
                                    <p>Obj. General</p>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Meta</h1>
                                    <p>2500 (30% mujeres)</p>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Observaciones</h1>
                                    <p>Se va a reportar el lunes sobre los 2500, se esta pendiente modificar en la ADENDA</p>
                                    <Button type="primary"><Icon type="edit" /> Editar</Button>
                                </div>
                                <div className="content-card">
                                    <h1 className="content-title">Fuentes de Verificacion</h1>
                                    <p>Caracterizacion de los beneficiarios- Censo Dane por la poblacion (4) por familia y Los aceptas de los beneficiarios</p>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default Indicadores;