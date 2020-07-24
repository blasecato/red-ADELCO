import React, { useEffect } from "react";
import { Avatar, Form, Icon, Input, Button, Select, Radio, DatePicker } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import { producer as producerActions } from "../../../services/Producer/ProducerActions";
import { useDispatch, useSelector } from "react-redux";


export const Profile = ({ match }) => {

  const dispatch = useDispatch()
  const { producer } = useSelector(state => state.producer)

  useEffect(() => {
    dispatch(producerActions.get(match.params.id));
  }, [])
  
  return (
    <section >
      <LayoutHome />
      {producer &&
        <div className="profile">
          <div className="users--title">
            <h1>Perfil de {producer.nombres}</h1>
          </div>
          <div className="content">
            <div className="content--profile">
              <div className="item">
                <div className="title">
                  Nombres:
              </div>
                <div className="component">
                  {producer.nombres}
                </div>
              </div>
              <div className="item">
                <div className="title">
                  Apellidos:
              </div>
                <div className="component">
                  {producer.apellidos}
                </div>
              </div>
              <div className="item">
                <div className="title">
                  Numero de identidad:
              </div>
                <div className="component">
                  {producer.dni}
                </div>
              </div>
              <div className="item">
                <div className="title">
                  Telefono:
              </div>
                <div className="component">
                  {producer.telefono}
                </div>
              </div>
              <div className="item">
                <div className="title">
                  Edad:
                </div>
                <div className="component">
                  {producer.edad} años
                </div>
              </div>
              {producer.idGenero &&
                <div className="item">
                  <div className="title">
                    Genero:
                </div>
                  <div className="component">
                    {producer && producer.idGenero.nombre}
                  </div>
                </div>
              }
              {producer.idConflicto &&
                <div className="item">
                  <div className="title">
                    Relacion con el Conflicto:
                  </div>
                  <div className="component">
                    {producer.idConflicto.nombre}
                  </div>
                </div>
              }
              {producer.idOrganizacion2 &&
                <div className="item">
                  <div className="title">
                    Organizacion:
                  </div>
                  <div className="component">
                    {producer.idOrganizacion2.nombre}
                  </div>
                </div>
              }
              {producer.idEtnia &&
                <div className="item">
                  <div className="title">
                    Etnia:
                </div>
                  <div className="component">
                    {producer.idEtnia.nombre}
                  </div>
                </div>
              }
              {producer.idParentesco &&
                <div className="item">
                  <div className="title">
                    parentesco:
                  </div>
                  <div className="component">
                    {producer.idParentesco.nombre}
                  </div>
                </div>
              }
              {producer.idDiscapacitado &&
                <div className="item">
                  <div className="title">
                    Discapacidad:
                  </div>
                  <div className="component">
                    {producer.idDiscapacitado.nombre}
                  </div>
                </div>
              }

              {producer.productoresOrganizaciones.length > 0  &&
                <div className="item">
                  <div className="title">
                    Organizaciones A las que pertenece
                  </div>
                  <div className="component">
                    {producer.productoresOrganizaciones.map((data,index)=>
                      <div key={index}>
                        {index+1}:  {data.idOrganizacion.nombre} - {data.estado}
                      </div>
                    )
                    }
                  </div>
                </div>
              }
               {producer.tipoUsuario.length > 0  &&
                <div className="item">
                  <div className="title">
                    Tipo de beneficiario
                  </div>
                  <div className="component">
                    {producer.tipoUsuario}
                  </div>
                </div>
              }
              {producer.kitUsers.length > 0  &&
                <div className="item">
                  <div className="title">
                    Kits Recibidos
                  </div>
                  <div className="component">
                    {producer.kitUsers.map((data,index)=>
                      <div key={index}>
                        {data.idKit === 1 && 
                          <div>
                            {index+1}: kit predeterminado
                          </div>
                        }
                        {data.idKit === 2 && 
                          <div>
                          {index+1}:   Acta de Entrega de Kit de Podas
                          </div>
                        }
                        {data.idKit === 3 && 
                          <div>
                          {index+1}:   Acta de Entrega de Kit de Fertilidad
                          </div>
                        }
                      </div>
                    )
                    }
                  </div>
                </div>
              }



              {producer.escuelaAgroforesteria &&
                <div className="item">
                  <div className="title">
                  Escuela de campo Agroforesteria sintropica - Patagonia, La Montañita
                  </div>
                  <div className="component">
                    {producer.escuelaAgroforesteria}
                  </div>
                </div>
              }
              {producer.cacaoPlanadas &&
                <div className="item">
                  <div className="title">
                  Gira Cacao Planadas, Tolima:
                  </div>
                  <div className="component">
                    {producer.cacaoPlanadas}
                  </div>
                </div>
              }
              {producer.canaPanelera &&
                <div className="item">
                  <div className="title">
                  Gira Caña Panelera - San Jose de Isnos, Huila:
                  </div>
                  <div className="component">
                    {producer.canaPanelera}
                  </div>
                </div>
              }
              {producer.escuelaAgrosilvopastoril &&
                <div className="item">
                  <div className="title">
                  Escuela de campo Agrosilvopastoril -  Puente Albania, El Paujil
                  </div>
                  <div className="component">
                    {producer.escuelaAgrosilvopastoril}
                  </div>
                </div>
              }
              {producer.escuelaAromaticas &&
                <div className="item">
                  <div className="title">
                  Escuela de campo Aromaticas -  ETCR, La Montañita:
                  </div>
                  <div className="component">
                    {producer.escuelaAromaticas}
                  </div>
                </div>
              }
              {producer.escuelaPermacultura &&
                <div className="item">
                  <div className="title">
                  Escuela de campo Permacultura -ETCR, La Montañita:
                  </div>
                  <div className="component">
                    {producer.escuelaPermacultura}
                  </div>
                </div>
              }
              {producer.escuelaSRCacao &&
                <div className="item">
                  <div className="title">
                  Escuela de campo SR Cacao -  Cristalina, El Paujil:
                  </div>
                  <div className="component">
                    {producer.escuelaSRCacao}
                  </div>
                </div>
              }
              {producer.escuelaSRPNMB &&
                <div className="item">
                  <div className="title">
                  Escuela de campo SR PNMB -  Patagonia, La Montañita:
                  </div>
                  <div className="component">
                    {producer.escuelaSRPNMB}
                  </div>
                </div>
              }
              {producer.fitosanitarioCultivos &&
                <div className="item">
                  <div className="title">
                  Taller de Biopreparados para el Control Fitosanitario en cultivos:
                  </div>
                  <div className="component">
                    {producer.fitosanitarioCultivos}
                  </div>
                </div>
              }
              {producer.giraCacao &&
                <div className="item">
                  <div className="title">
                  Gira Cacao Planadas, Tolima:
                  </div>
                  <div className="component">
                    {producer.giraCacao}
                  </div>
                </div>
              }
              {producer.giraPNMB &&
                <div className="item">
                  <div className="title">
                  Gira PNMB -  Guaviare:
                  </div>
                  <div className="component">
                    {producer.giraPNMB}
                  </div>
                </div>
              }
              {producer.intercambioHuitora &&
                <div className="item">
                  <div className="title">
                  Gira de intercambio Huitora, Solano:
                  </div>
                  <div className="component">
                    {producer.intercambioHuitora}
                  </div>
                </div>
              }
              {producer.manejoEcosistemico &&
                <div className="item">
                  <div className="title">
                  Formación en manejo ecosistemico de PNMB, La Montañita:
                  </div>
                  <div className="component">
                    {producer.manejoEcosistemico}
                  </div>
                </div>
              }
              {producer.parcelaDemostrativa &&
                <div className="item">
                  <div className="title">
                  Parcela demostrativa:
                  </div>
                  <div className="component">
                    {producer.parcelaDemostrativa}
                  </div>
                </div>
              }
              {producer.poscosechaCacao &&
                <div className="item">
                  <div className="title">
                  Formación en tecnicas de poscosecha cacao - El Doncello:
                  </div>
                  <div className="component">
                    {producer.poscosechaCacao}
                  </div>
                </div>
              }
              {producer.transformacionChocolate &&
                <div className="item">
                  <div className="title">
                  Formación en transformación Chocolate - Bogota:
                  </div>
                  <div className="component">
                    {producer.transformacionChocolate}
                  </div>
                </div>
              }
              {producer.transformacionPNMB &&
                <div className="item">
                  <div className="title">
                  Formación en transformacion PNMB - Patagonia, La Montañita
                  </div>
                  <div className="component">
                    {producer.transformacionPNMB}
                  </div>
                </div>
              }
              {producer.transformacionPulpas &&
                <div className="item">
                  <div className="title">
                  Formación en transformación de Pulpas - Valle y Huila
                  </div>
                  <div className="component">
                    {producer.transformacionPulpas}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </section>
  )
}