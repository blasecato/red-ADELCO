import React from "react";
import { Link } from 'react-router-dom';

import { Card,Button } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

import vial from "../../../assets/image/img/img3.jpg";
import comun from "../../../assets/image/img/comun.jpg";
import produc from "../../../assets/image/img/produc.jpg";

const { Meta } = Card;

class Tipo extends React.Component {
    render(){
        return(
            <div className="users">
            <LayoutHome></LayoutHome>
            <div className="users--title">
                <h1 className="users--title--cron">Tipo de Infraestructura</h1> 
            </div>
            <div className="users__content-cards">
                <Card
                    className="users__content-cards--card"
                    hoverable
                    cover={<a href="/registeruser"><img alt="example" src={comun} /></a>}
                >
                    <Meta title="Tipo Comunitaria" description="Tipo de infraestructura comjunitaria"/>
                    <Link className="btn btn--cron" href="/registeruser" type="primary" shape="circle">
                        IR
                    </Link>
                </Card>
                <Card
                    className="users__content-cards--card"
                    hoverable
                    cover={<a href="/queryuser"><img alt="example" src={vial} /></a>}
                >
                    <Meta title="Tipo Vial" description="Tipo de infraestructura Vial ¡AQUI!" />
                    <Link className="btn btn--cron" href="/queryuser" type="primary" shape="circle">
                        IR
                    </Link>
                </Card>
                <Card
                    className="users__content-cards--card"
                    hoverable
                    cover={<a href="/deleteupdateuser"><img alt="example" src={produc} /></a>}
                >
                    <Meta title="Tipo Productiva" description="Tipo de infraestructura Productiva" />
                    <Link className="btn btn--cron" href="/deleteupdateuser" type="primary" shape="circle">
                        IR
                    </Link>
                </Card>
            </div>
            <div className="mesage"><span className="cron">¡</span>Aqui puedes gestionar Infraestructuras, puedes Consultarlas, Registrarlas, Actualizarlas, Y Eliminarlas con tan solo dar click sobre la opcion que desees<span className="cron">!</span></div>

    </div>
        );
    }
}

export default Tipo;