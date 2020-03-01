import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { organization as organizationActions } from '../../../../services/organization/organizationActions';

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";
import { useSelector, useDispatch } from 'react-redux';
import { json2excel, excel2json } from 'js2excel';
import exel from "../../../../assets/image/excel.png";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const OrgQuery = () => {

  const { organizations } = useSelector(state => state.organization)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(organizationActions.getOrganization())
  }, [])

  const handleToExel = () => {
		const jsonConvert = []
    organizations.forEach(item => {
			jsonConvert.push({
				codigo: item.id,
				nombres: item.nombre,
				descripcion: item.descripcion,
				Contacto: item.contacto,
				temaCapacitacion: item.temaCapacitacion,
        temaEmpresarial: item.temaEmpresarial
			})
		})
		console.log(jsonConvert)
		json2excel({
			data: jsonConvert,
			name: 'user-info-data',
			formateDate: 'yyyy/mm/dd'
		});
	}
  console.log(organizations)
  return (
    <div className="queryuser">
      <LayoutHome />
      <div className="queryuser__content">
        <div className="users--title">
          <h1>Consultar Organizacion</h1>
        </div>
        <div className="btn-exel">
					<button className="btn-exel--exel" onClick={handleToExel}><img className="img-excel" src={exel} /> Descargar</button>
				</div>
        <Card title="Listado de Beneficiarios"
          extra={<Search
            placeholder="Buscar Usuario"
            onSearch={value => console.log(value)}
          />}
        >
          <Table dataSource={organizations} rowKey="id">
            <Column title="Nombre." dataIndex="nombre" Key="nombre" />
            <Column title="Municipio." dataIndex="idMunicipio2.nombre" Key="idMunicipio2" />
            <Column title="Vereda." dataIndex="idVereda2.nombres" Key="idVereda2" />
            <Column title="Descripcion." dataIndex="descripcion" Key="descripcion" />
            <Column
              title="Representante"
              dataIndex="representante2.nombres"
              Key="representante2"
            />
          </Table>
        </Card>

      </div>
    </div>
  )
}
