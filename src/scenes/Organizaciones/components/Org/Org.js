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
        Codigo: item.id,
        Nombre: item.nombre,
        Aplicacion_ICO: item.aplicacionICO,
        Descripcion: item.descripcion,
        Contacto: item.contacto,
        Tema_Capacitacion: item.temaCapacitacion,
        Tema_Empresarial: item.temaEmpresarial,
        Focalizacion: item.focalizacion,
        DNI_Representante: item.representante2 && item.representante2.dni,
        Nombres_Representante: item.representante2 && item.representante2.nombres,
        Apellidos_Representante: item.representante2 && item.representante2.apellidos,
        Tipo_Aft: item.tipoAft,
        Diagnostico_ICO: item.diagnosticoICO,
        Vereda: item.idVereda2 && item.idVereda2.nombre,
        Municipio: item.idVereda2 && item.idVereda2.idMunicipio2.nombre,
        Participacion_Mesa_MujerGenero: item.participacionMesaMujerGenero
      })
    })
    console.log(jsonConvert)
    json2excel({
      data: jsonConvert,
      name: 'user-info-data',
      formateDate: 'yyyy/mm/dd'
    });
  }
  console.log("hola",organizations)
  return (
    <div className="queryuser">
      <LayoutHome />
      <div className="queryuser__content">
        <div className="users--title">
          <h1>Consultar Organizacion</h1>
        </div>
        <div className="btn-exel">
          <button className="btn-exel--exel"
            onClick={handleToExel}
          ><img className="img-excel" src={exel} /> Descargar</button>
        </div>
        <Card title="Listado de Beneficiarios"
          
        >
          <Table dataSource={organizations} rowKey="id">
            <Column title="Nombre." dataIndex="nombre" Key="nombre" />
            <Column title="Municipio." dataIndex="idVereda2.idMunicipio2.nombre" Key="idMunicipio2" />
            <Column title="Vereda." dataIndex="idVereda2.nombre" Key="idVereda2" />
            <Column title="Descripcion." dataIndex="descripcion" Key="descripcion" />
            <Column title="Tema de Capacitacion." dataIndex="temaCapacitacion" Key="descripcion" />
            <Column title="Tema de Empresarial." dataIndex="temaEmpresarial" Key="descripcion" />
            <Column title="Tipo de AFT." dataIndex="tipoAft" Key="descripcion" />
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
