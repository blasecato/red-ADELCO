import React from "react";
import { Card,Button } from 'antd';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

import usernew from "../../assets/image/img/org2.jpg";
import queryuser from "../../assets/image/img/org1.jpg";
import deleteuser from "../../assets/image/img/org3.jpg";
import updateuser from "../../assets/image/img/org4.jpg";

const { Meta } = Card;

class Organizaciones extends React.Component{
    render(){
        return(
            <div className="users">
                    <LayoutHome></LayoutHome>
                    <div className="users--title">
                        <h1>Gestionar Organizaciones</h1> 
                    </div>
                    <div className="users__content-cards">
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<a href="/registeruser"><img alt="example" src={usernew} /></a>}
                        >
                            <Meta title="Registrar Organizaciones" description="Registra nuevas Organizaciones ¡AQUI!" />
                            <Button href="/registeruser" type="primary" shape="circle">
                                IR
                            </Button>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<a href="/queryuser"><img alt="example" src={queryuser} /></a>}
                        >
                            <Meta title="Consultar Organizaciones" description="Consulta Informacion de las Organizaciones ¡AQUI!" />
                            <Button href="/queryuser" type="primary" shape="circle">
                                IR
                            </Button>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<a href="/deleteupdateuser"><img alt="example" src={updateuser} /></a>}
                        >
                            <Meta title="Actualizar Organizaciones" description="Actualiza informacion de las Organizaciones ¡AQUI!" />
                            <Button href="/deleteupdateuser" type="primary" shape="circle">
                                IR
                            </Button>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<a href="/deleteupdateuser"><img alt="example" src={deleteuser} /></a>}
                        >
                            <Meta title="Eliminar Organizaciones" description="Elimina las Organizaciones ¡AQUI!" />
                            <Button href="/deleteupdateuser" type="primary" shape="circle">
                                IR
                            </Button>
                        </Card>
                    </div>
                    <div className="mesage"><span>¡</span>Aqui puedes gestionar Organizaciones, puedes Consultarlas, Registrarlas, Actualizarlas, Y Eliminarlas con tan solo dar click sobre la opcion que desees<span>!</span></div>

            </div>
        );
    }
}

export default Organizaciones;