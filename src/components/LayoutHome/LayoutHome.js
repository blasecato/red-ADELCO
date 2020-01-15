import React from 'react';
import { Button,Input } from 'antd';
import { Link } from 'react-router-dom';

import Logo from "../../assets/image/redlogo.png";

const { Search } = Input;

class LayoutHome extends React.Component {
    render() {
        return (
            <div className="layout-home">

                <nav class="layout-home__nav">
                    <div className="layout-home__nav--menu">
                        <Link class="layout-home__nav__index" to="/home"><img src={Logo}></img></Link>
                        <Link class="layout-home__nav__index" to="/cadenasproductivas">COMPONENTE PRODUCTIVAS</Link>
                        <Link class="layout-home__nav__index" to="/users">USUARIOS</Link>
                        {/* <Link class="layout-home__nav__index" to="/coberturas">COBERTURAS</Link> */}
                        <Link class="layout-home__nav__index" to="/infraestructura">COMPONENTE INFRAESTRUCTURA</Link>
                        <Link class="layout-home__nav__index" to="/organizaciones">COMPONENTE SOCIAL</Link>
                        <Link class="layout-home__nav__index" to="/organizaciones">COMPONENTE REINCORPORACION</Link>
                    </div>
                    <div className="layout-home__nav--search">
                        <Search className="search"
                            placeholder="Buscar"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                </nav>
            </div>
        );

    }
}

export default LayoutHome;
