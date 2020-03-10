import React from "react";
import { Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";



class Profile extends React.Component {
   
    render() {

        return (
            <section >
                <LayoutHome />
                <div className="profile">
                    <div className="users--title">
                        <h1>Perfil de Usuario</h1>
                    </div>
                    <div className="content">
                        <div className="content--profile">
                                <div className="item">
                                    <div className="title">
                                        Nombres:
                                    </div>
                                    <div className="component">
                                        sebastian calderon
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Apellidos:
                                    </div>
                                    <div className="component">
                                    torres calderon
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Numero de identidad:
                                    </div>
                                    <div className="component">
                                        1230 123 12321
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Telefono:
                                    </div>
                                    <div className="component">
                                        321 321 3212
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Edad:
                                    </div>
                                    <div className="component">
                                        32 años
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Genero:
                                    </div>
                                    <div className="component">
                                        Hombre
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Relacion con el Conflicto:
                                    </div>
                                    <div className="component">
                                        No aplica
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Organizacion:
                                    </div>
                                    <div className="component">
                                        asfds
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Zona:
                                    </div>
                                    <div className="component">
                                        Rural
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Etnia:
                                    </div>
                                    <div className="component">
                                        indigena
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        parentesco:
                                    </div>
                                    <div className="component">
                                        Jefe de familia
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Discapacidad:
                                    </div>
                                    <div className="component">
                                        No Aplica
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Profile;