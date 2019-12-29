import React from 'react';
import { Card,Button } from 'antd';

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
                            cover={<a href="/registeruser"><img alt="example" src={usernew} /></a>}
                        >
                            <Meta title="Registrar Beneficiario" description="Registra nuevos Usuarios Beneficiarios ¡AQUI!" />
                            <Button href="/registeruser" type="primary" shape="circle">
                                IR
                            </Button>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<a href="/queryuser"><img alt="example" src={queryuser} /></a>}
                        >
                            <Meta title="Consultar Beneficiarios" description="Consulta Informacion sobre los Usuarios ¡AQUI!" />
                            <Button href="/queryuser" type="primary" shape="circle">
                                IR
                            </Button>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<a href="/deleteupdateuser"><img alt="example" src={updateuser} /></a>}
                        >
                            <Meta title="Actualizar Beneficiarios" description="Actualiza informacion de los usuarios ¡AQUI!" />
                            <Button href="/deleteupdateuser" type="primary" shape="circle">
                                IR
                            </Button>
                        </Card>
                        <Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<a href="/deleteupdateuser"><img alt="example" src={deleteuser} /></a>}
                        >
                            <Meta title="Eliminar Beneficiarios" description="Elimina usuarios que ya no sean beneficiaros ¡AQUI!" />
                            <Button href="/deleteupdateuser" type="primary" shape="circle">
                                IR
                            </Button>
                        </Card>
                    </div>

            </div>
        );

    }
}

export default Users;