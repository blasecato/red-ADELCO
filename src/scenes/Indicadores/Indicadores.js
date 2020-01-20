import React from "react";
import { Collapse, Upload, message, Button, Icon } from 'antd';
import { getIndicadores } from "../../services/indicadores";
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

    state = {
        indicadores: []
    }

    constructor(props) {
        super(props);
        this.getServiceIndicadores();
    }

    async getServiceIndicadores() {
        let indi = await getIndicadores();
        this.setState({ "indicadores": indi })
    }

    render() {
        const { indicadores } = this.state
        console.log(indicadores)
        return (
            <div className="indicadores">
                <LayoutHome />
                <h1 className="indicadores--title">Indicadores</h1>
                <div className="list-indicadores">
                    <Collapse accordion>
                        {indicadores.length > 0 &&
                            indicadores.map((data, index) =>
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
                                            <Button type="primary"><Icon type="edit" /> Editar</Button>
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
}

export default Indicadores;