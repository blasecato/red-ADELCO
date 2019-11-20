import React from 'react';
import { Button,Input } from 'antd';

import Tcp from "../assets/image/tcp.png";
import Logo from "../assets/image/redlogo.png";
import LayoutHome from "../components/LayoutHome/LayoutHome";

const { Search } = Input;

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home__img">
                    <img src={Tcp}></img>
                </div>
            <LayoutHome></LayoutHome>
            </div>
        );

    }
}

export default Home;
