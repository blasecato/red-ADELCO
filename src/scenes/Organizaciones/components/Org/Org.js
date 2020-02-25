import React, { useEffect } from 'react';
import { Table, Divider, Tag, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { organization as organizationActions } from '../../../../services/organization/organizationActions';

import LayoutHome from "../../../../components/LayoutHome/LayoutHome";
import { useSelector, useDispatch } from 'react-redux';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

export const OrgQuery = () => {

  const { organizations } = useSelector(state => state.organization)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(organizationActions.getOrganization())
  }, [])

  return (
    <div className="queryuser">
      <LayoutHome />
      <div className="queryuser__content">
        <div className="users--title">
          <h1>Consultar Organizacion</h1>
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
