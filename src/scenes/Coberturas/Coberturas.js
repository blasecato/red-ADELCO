import React from 'react';

import LayoutHome from "../../components/LayoutHome/LayoutHome";
import Cobertura from "../../assets/image/coberturas.png";


class Coberturas extends React.Component {
    render() {
        return (
            <div >
                <LayoutHome></LayoutHome>
                <div className="coberturas">
                    <img src={Cobertura}></img>
                </div>
            </div>
        );

    }
}

export default Coberturas;
