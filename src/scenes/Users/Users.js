import React from 'react';
import { Card,Button } from 'antd';
import { Link } from 'react-router-dom';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

import usernew from "../../assets/image/usernew.jpg";
import queryuser from "../../assets/image/queryuser.jpg";
import deleteuser from "../../assets/image/deleteuser.jpg";
import updateuser from "../../assets/image/updateuser.jpg";

const { Meta } = Card;

class Users extends React.Component {
    render() { 
        return ( 
            <div className="users">
                    <LayoutHome></LayoutHome>
                    <div className="users--title">
                        <h1>Gestionar Usuarios</h1> 
                    </div>
                    <div className="users__content-cards">
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/registeruser"><img alt="example" src={usernew} /></Link>}
                        >
                            <Meta title="Registrar Beneficiario" description="Registra nuevos Usuarios Beneficiarios ¡AQUI!" />
                            <Link className="btn" to="/registeruser" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/queryuser"><img alt="example" src={queryuser} /></Link>}
                        >
                            <Meta title="Consultar Beneficiarios" description="Consulta Informacion sobre los Usuarios ¡AQUI!" />
                            <Link className="btn" to="/queryuser" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/deleteupdateuser"><img alt="example" src={updateuser} /></Link>}
                        >
                            <Meta title="Actualizar Beneficiarios" description="Actualiza informacion de los usuarios ¡AQUI!" />
                            <Link className="btn" to="/deleteupdateuser" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/deleteupdateuser"><img alt="example" src={deleteuser} /></Link>}
                        >
                            <Meta title="Eliminar Beneficiarios" description="Elimina usuarios que ya no sean beneficiaros ¡AQUI!" />
                            <Link className="btn" to="/deleteupdateuser" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
                    </div>
                    <div className="mesage"><span>¡</span>Aqui puedes gestionar un usuario, puedes Consultarlos, Registrarlos, Actualizarlos, Y Eliminarlos con tan solo dar click sobre la opcion que desees<span>!</span></div>

            </div>
        );

    }
}

export default Users;