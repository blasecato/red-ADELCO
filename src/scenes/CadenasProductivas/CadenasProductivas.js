import React from "react";
import { Link } from 'react-router-dom';
import { Table, Divider, Tag, Input } from 'antd';
import { Card, Button } from 'antd';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

import lineas from "../../assets/image/img/lineas.jpg";
import cadenas from "../../assets/image/img/cadena.jpg";
import cultivo from "../../assets/image/img/img5.jpg";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

const { Meta } = Card;
// clase de cadenas productivas la cual exporta un formulario
class CadenasProductivas extends React.Component {
	render() {
		return (
			<div className="users">
				<LayoutHome></LayoutHome>
				<div className="users--title">
					<h1>Gestionar Cadenas Productivas</h1>
				</div>
				<div className="users__content-cards">
					{/* listado de las opciones disponibles */}

					<Card
						className="users__content-cards--card"
						hoverable
						cover={<Link to="/tipocadena"><img alt="example" src={cadenas} /></Link>}
					>
						<Meta title="Cadenas Productivas" description="¡Gestiona Cadenas productivas dando click aqui!" />
						<Link className="btn" to="/registrarcadenasproductivas" type="primary" shape="circle">
							IR
            			</Link>
					</Card>
					<Card
                            className="users__content-cards--card"
                            hoverable
                            cover={<Link to="/queryuser"><img alt="example" src={cultivo} /></Link>}
                        >
                            <Meta title="Cultivos" description="Consulta los Cultivos ¡AQUI!" />
                            <Link className="btn" to="/cultivos" type="primary" shape="circle">
                                IR
                            </Link>
                        </Card>
					<Card
						className="users__content-cards--card"
						hoverable
						cover={<Link to="/tipocadena"><img alt="example" src={lineas} /></Link>}
					>
						<Meta title="Lineas Productivas" description="¡Gestiona Lineas productivas dando click aqui!" />
						<Link className="btn" to="/tipocadena" type="primary" shape="circle">
							IR
            </Link>
					</Card>
				</div>
				<div className="mesage"><span>¡</span>Aqui puedes gestionar Cadenas Productivas, puedes Consultarlas, Registrarlas, Actualizarlas, Y Eliminarlas con tan solo dar click sobre la opcion que desees<span>!</span></div>
				
				<div className="queryuser__content">
					<div className="users--title">
						<h1>Consultar lineas y cadenas productivas</h1>
					</div>
					<Card title="Listado de Beneficiarios"
						extra={<Search
							placeholder="Buscar Usuario"
							onSearch={value => console.log(value)}
						/>}
					>
						<Table>
							<Column title="Numero." dataIndex="nombres" Key="nombres" />
							<Column title="Linea Productiva." dataIndex="apellidos" Key="apellidos" />
							<Column title="Cadena Productiva." dataIndex="idOrganizacion2.nombre" Key="idOrganizacion2" />
						</Table>
					</Card>

				</div>
			</div>
		);
	}
}

export default CadenasProductivas;