import React from "react";
import { Card,Button } from 'antd';
import { Link } from 'react-router-dom';

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
                            cover={<Link to="/registerorg"><img alt="example" src={usernew} /></Link>}
                        >
                            <Meta title="Registrar Organizaciones" description="Registra nuevas Organizaciones ¡AQUI!" />
                            <Link className="btn" to="/registerorg" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/queryuser"><img alt="example" src={queryuser} /></Link>}
                        >
                            <Meta title="Consultar Organizaciones" description="Consulta Informacion de las Organizaciones ¡AQUI!" />
                            <Link className="btn" to="/queryuser" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/deleteupdateuser"><img alt="example" src={updateuser} /></Link>}
                        >
                            <Meta title="Actualizar Organizaciones" description="Actualiza informacion de las Organizaciones ¡AQUI!" />
                            <Link className="btn" to="/deleteupdateuser" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/deleteupdateuser"><img alt="example" src={deleteuser} /></Link>}
                        >
                            <Meta title="Eliminar Organizaciones" description="Elimina las Organizaciones ¡AQUI!" />
                            <Link className="btn" to="/deleteupdateuser" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                    </div>
                    <div className="mesage"><span>¡</span>Aqui puedes gestionar Organizaciones, puedes Consultarlas, Registrarlas, Actualizarlas, Y Eliminarlas con tan solo dar click sobre la opcion que desees<span>!</span></div>

            </div>
        );
    }
}

export default Organizaciones;