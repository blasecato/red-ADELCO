import React from "react";
import { Card,Button } from 'antd';
import { Link } from 'react-router-dom';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

import usernew from "../../assets/image/img/org2.jpg";
import queryuser from "../../assets/image/img/org1.jpg";
import queryorg from "../../assets/image/deleteuser.jpg";

const { Meta } = Card;

class Organizaciones extends React.Component{
    render(){
        return(
            <div className="users organizaciones">
                    <LayoutHome></LayoutHome>
                    <div className="users--title">
                        <h1>Gestionar Organizaciones</h1> 
                    </div>
                    <div className="button">
                        <Link to="/actulizarorg" className="btn-register">Actualizar Organizacion</Link>
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
                            cover={<Link to="/orgquery"><img alt="example" src={queryorg} /></Link>}
                        >
                            <Meta title="Consultar Organizaciones" description="Consulta nuevas Organizaciones ¡AQUI!" />
                            <Link className="btn" to="/orgquery" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                        
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/usersocial"><img alt="example" src={queryuser} /></Link>}
                        >
                            <Meta title="Actualizar Beneficiarios" description="Actualiza Informacion de las Organizaciones ¡AQUI!" />
                            <Link className="btn" to="/usersocial" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/beneficiariosorg"><img alt="example" src={queryuser} /></Link>}
                        >
                            <Meta title="Consulta Beneficiarios" description="Pertenecientes a organizaciones separados por hombres y mujeres ¡AQUI!" />
                            <Link className="btn" to="/beneficiariosorg" type="primary" shape="circle">
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