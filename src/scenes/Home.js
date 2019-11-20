import React from 'react';
import { Button,Input } from 'antd';

import Tcp from "../assets/image/tcp.png";

const { Search } = Input;

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home__img">
                    <img src={Tcp}></img>
                </div>

                <nav class="home__nav">
                    <div className="home__nav--menu">
                        <a class="home__nav__index" href="/login">INICIO</a>
                        <a class="home__nav__index" href="/login">CADENAS</a>
                        <a class="home__nav__index" href="/login">USUARIOS</a>
                    </div>
                    <div className="home__nav--search">
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

export default Home;
