import React from 'react';
import { Button,Input } from 'antd';

import Logo from "../../assets/image/redlogo.png";

const { Search } = Input;

class LayoutHome extends React.Component {
    render() {
        return (
            <div className="layout-home">

                <nav class="layout-home__nav">
                    <div className="layout-home__nav--menu">
                        <a class="layout-home__nav__index" href="/layout-home"><img src={Logo}></img></a>
                        <a class="layout-home__nav__index" href="/login">CADENAS PRODUCTIVAS</a>
                        <a class="layout-home__nav__index" href="/login">USUARIOS</a>
                        <a class="layout-home__nav__index" href="/login">COVERTURAS</a>
                        <a class="layout-home__nav__index" href="/login">AYUDA</a>
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
