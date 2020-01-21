import React from "react";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

import Logo from "../../assets/image/redlogo.png";

const { Search } = Input;

class LayoutHome extends React.Component {
  render() {
    return (
      <div className="layout-home">
        <nav className="layout-home__nav">
          <div className="layout-home__nav--menu">
            <Link className="layout-home__nav__index" to="/home">
              <img src={Logo}></img>
            </Link>
            <Link className="layout-home__nav__index" to="/cadenasproductivas">
              COMPONENTE PRODUCTIVAS
            </Link>
            <Link className="layout-home__nav__index" to="/infraestructura">
              COMPONENTE INFRAESTRUCTURA
            </Link>
            <Link className="layout-home__nav__index" to="/organizaciones">
              COMPONENTE SOCIAL
            </Link>
            <Link className="layout-home__nav__index" to="/organizaciones">
              COMPONENTE REINCORPORACION
            </Link>
            <Link className="layout-home__nav__index" to="/users">
              USUARIOS
            </Link>
            {/* <Link className="layout-home__nav__index" to="/indicadores">INDICADORES</Link> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default LayoutHome;
