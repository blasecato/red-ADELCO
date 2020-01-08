import React from "react";

import { Card, Button } from 'antd';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

import usernew from "../../assets/image/usernew.jpg";
import queryuser from "../../assets/image/queryuser.jpg";
import deleteuser from "../../assets/image/deleteuser.jpg";
import updateuser from "../../assets/image/updateuser.jpg";

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
                        cover={<a href="/registeruser"><img alt="example" src={usernew} /></a>}
                    >
                        <Meta title="Registrar Cadenas Productivas" description="Registra nuevas Cadenas Productivas" />
                        <Button href="/registeruser" type="primary" shape="circle">
                            IR
                    </Button>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<a href="/queryuser"><img alt="example" src={queryuser} /></a>}
                    >
                        <Meta title="Consultar Cadenas Productivas" description="Consulta Informacion de Cadenas Productivas" />
                        <Button href="/queryuser" type="primary" shape="circle">
                            IR
                    </Button>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<a href="/deleteupdateuser"><img alt="example" src={updateuser} /></a>}
                    >
                        <Meta title="Actualizar Cadenas Productivas" description="Actualiza informacion de Cadenas Productivas" />
                        <Button href="/deleteupdateuser" type="primary" shape="circle">
                            IR
                    </Button>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<a href="/deleteupdateuser"><img alt="example" src={deleteuser} /></a>}
                    >
                        <Meta title="Eliminar Cadenas Productivas" description="Elimina Cadenas Productivas ¡AQUI!" />
                        <Button href="/deleteupdateuser" type="primary" shape="circle">
                            IR
                    </Button>
                    </Card>
                </div>
                <div className="mesage"><span>¡</span>Aqui puedes gestionar Cadenas Productivas, puedes Consultarlas, Registrarlas, Actualizarlas, Y Eliminarlas con tan solo dar click sobre la opcion que desees<span>!</span></div>

            </div>
        );
    }
}

export default CadenasProductivas;