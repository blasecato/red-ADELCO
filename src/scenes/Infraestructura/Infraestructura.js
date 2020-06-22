import React from "react";
import { Link } from "react-router-dom";

import { Card } from "antd";

import LayoutHome from "../../components/LayoutHome/LayoutHome";

import usernew from "../../assets/image/img/infra_reg.jpg";
import queryuser from "../../assets/image/img/infra_con.jpg";
import deleteuser from "../../assets/image/img/infra_dele.jpg";
import updateuser from "../../assets/image/img/infra_upda.jpg";

const { Meta } = Card;

class Infraestructura extends React.Component {
  render() {
    return (
      <div className="users">
        <LayoutHome></LayoutHome>
        <div className="users--title">
          <h1>Gestionar Infraestructuras</h1>
        </div>
        <div className="users__content-cards">
          <Card
            className="users__content-cards--card"
            hoverable
            cover={
              <Link to="/tipo">
                <img alt="example" src={usernew} />
              </Link>
            }
          >
            <Meta
              title="Registrar Infraestructuras"
              description="Registra nuevas Infraestructuras ¡AQUI!"
            />
            <Link className="btn" to="/tipo" type="primary" shape="circle">
              IR
            </Link>
          </Card>
          <Card
            className="users__content-cards--card"
            hoverable
            cover={
              <Link to="/infraquery">
                <img alt="example" src={queryuser} />
              </Link>
            }
          >
            <Meta
              title="Consultar Infraestructuras"
              description="Consulta Informacion de Infraestructuras ¡AQUI!"
            />
            <Link className="btn" to="/infraquery" type="primary" shape="circle">
              IR
            </Link>
          </Card>
          <Card
            className="users__content-cards--card"
            hoverable
            cover={
              <Link to="/actulizarinfra">
                <img alt="example" src={updateuser} />
              </Link>
            }
          >
            <Meta
              title="Actualizar Infraestructuras"
              description="Actualiza informacion de Infraestructuras ¡AQUI!"
            />
            <Link
              className="btn"
              to="/actulizarinfra"
              type="primary"
              shape="circle"
            >
              IR
            </Link>
          </Card>
          {/* <Card
            className="users__content-cards--card"
            hoverable
            cover={
              <Link to="/deleteupdateuser">
                <img alt="example" src={deleteuser} />
              </Link>
            }
          >
            <Meta
              title="Eliminar Infraestructuras"
              description="Elimina Infraestructuras ¡AQUI!"
            />
            <Link
              className="btn"
              to="/deleteupdateuser"
              type="primary"
              shape="circle"
            >
              IR
            </Link>
          </Card> */}
        </div>
        <div className="mesage">
          <span>¡</span>Aqui puedes gestionar Infraestructuras, puedes
          Consultarlas, Registrarlas, Actualizarlas, Y Eliminarlas con tan solo
          dar click sobre la opcion que desees<span>!</span>
        </div>
      </div>
    );
  }
}

export default Infraestructura;
