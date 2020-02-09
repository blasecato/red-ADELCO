import React from "react";
import { Button, Input, Icon } from "antd";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';


import Logo from "../../assets/image/redlogo.png";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <Link className="layout-home__nav__index" to="/indicadores">
        INDICADORES
      </Link>
    </Menu.Item>
  </Menu>
);

const { Search } = Input;

class LayoutHome extends React.Component {
  render() {
    return (
      <div className="layout-home">
        <nav className="layout-home__nav">
          <div className="layout-home__nav--menu">
            <Link className="layout-home__nav__index" to="/home">
              <Icon className="icon" type="home" />
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
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                MAS OPCIONES <Icon type="down" />
              </a>
            </Dropdown>
            {/* <Link className="layout-home__nav__index" to="/indicadores">INDICADORES</Link> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default LayoutHome;
