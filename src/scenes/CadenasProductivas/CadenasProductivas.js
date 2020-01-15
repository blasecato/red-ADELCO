import React from "react";
import { Link } from 'react-router-dom';

import { Card, Button } from 'antd';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

import usernew from "../../assets/image/mas.png";
import queryuser from "../../assets/image/bus.png";
import deleteuser from "../../assets/image/menos.png";
import updateuser from "../../assets/image/act.webp";

// import usernew from "../../assets/image/img/cafe.jpg";
// import queryuser from "../../assets/image/img/caña.jpg";
// import deleteuser from "../../assets/image/img/cacao.jpg";
// import updateuser from "../../assets/image/img/canan.jpg";

const { Meta } = Card;

class CadenasProductivas extends React.Component {
    render() {
        return (
            <div className="users">
                <LayoutHome></LayoutHome>
                <div className="users--title">
                    <h1>Gestionar Cadenas Productivas</h1>
                </div>
                <div className="users__content-cards">
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<Link to="/tipocadena"><img alt="example" src={usernew} /></Link>}
                    >
                        <Meta title="Registrar Cadenas Productivas" description="Registra nuevas Cadenas Productivas" />
                        <Link className="btn" to="/tipocadena" type="primary" shape="circle">
                            IR
                        </Link>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<Link to="/tipocadena"><img alt="example" src={queryuser} /></Link>}
                    >
                        <Meta title="Consultar Cadenas Productivas" description="Consulta Informacion de Cadenas Productivas" />
                        <Link className="btn" to="/tipocadena" type="primary" shape="circle">
                            IR
                        </Link>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<Link to="/tipocadena"><img alt="example" src={updateuser} /></Link>}
                    >
                        <Meta title="Actualizar Cadenas Productivas" description="Actualiza informacion de Cadenas Productivas" />
                        <Link className="btn" to="/tipocadena" type="primary" shape="circle">
                            IR
                        </Link>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<Link to="/tipocadena"><img alt="example" src={deleteuser} /></Link>}
                    >
                        <Meta title="Eliminar Cadenas Productivas" description="Elimina Cadenas Productivas ¡AQUI!" />
                        <Link className="btn" to="/tipocadena" type="primary" shape="circle">
                            IR
                        </Link>
                    </Card>
                </div>
                <div className="mesage"><span>¡</span>Aqui puedes gestionar Cadenas Productivas, puedes Consultarlas, Registrarlas, Actualizarlas, Y Eliminarlas con tan solo dar click sobre la opcion que desees<span>!</span></div>

            </div>
        );
    }
}

export default CadenasProductivas;