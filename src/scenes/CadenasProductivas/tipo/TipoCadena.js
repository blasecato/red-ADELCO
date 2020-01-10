import React from "react";

import { Link } from 'react-router-dom';

import { Card, Button } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";


import usernew from "../../../assets/image/img/cafe.jpg";
import queryuser from "../../../assets/image/img/caña.jpg";
import deleteuser from "../../../assets/image/img/cacao.jpg";
import updateuser from "../../../assets/image/img/canan.jpg";

const { Meta } = Card;

class TipoCadena extends React.Component{
    render(){
        return(
            <div className="users">
                <LayoutHome></LayoutHome>
                <div className="users--title">
                    <h1 className="users--title--cron">Tipo de Cadena Productiva</h1>
                </div>
                <div className="users__content-cards">
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<Link to="/registeruser"><img alt="example" src={usernew} /></Link>}
                    >
                        <Meta title="Cafe" description="Cadena productiva de cafe" />
                        <Link className="btn" to="/registeruser" type="primary" shape="circle">
                            IR
                        </Link>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<Link to="/queryuser"><img alt="example" src={queryuser} /></Link>}
                    >
                        <Meta title="Caña" description="Cadena productiva de caña" />
                        <Link className="btn" to="/queryuser" type="primary" shape="circle">
                            IR
                        </Link>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<Link to="/deleteupdateuser"><img alt="example" src={updateuser} /></Link>}
                    >
                        <Meta title="Canangucha" description="Canangucha" />
                        <Link className="btn" to="/deleteupdateuser" type="primary" shape="circle">
                            IR
                        </Link>
                    </Card>
                    <Card
                        className="users__content-cards--card"
                        hoverable
                        cover={<Link to="/deleteupdateuser"><img alt="example" src={deleteuser} /></Link>}
                    >
                        <Meta title="Cacao" description="Cadana productiva de Cacao" />
                        <Link className="btn" to="/deleteupdateuser" type="primary" shape="circle">
                            IR
                        </Link>
                    </Card>
                </div>
                <div className="mesage"><span>¡</span>Aqui puedes escoger que tipo de cadena productiva vas a registrar<span>!</span></div>

            </div>
        );
    }
}

export default TipoCadena;