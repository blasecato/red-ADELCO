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

  console.log("dni==>", match.params.id)

  return (
    <section >
      <LayoutHome />
      {producer &&
        <div className="profile">
          <div className="users--title">
            <h1>Perfil de Usuario</h1>
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
              {producer.idGenero2 &&
                <div className="item">
                  <div className="title">
                    Genero:
                </div>
                  <div className="component">
                    {producer.idGenero2.nombre =! null && producer.idGenero2.nombre}
                  </div>
                </div>
              }
              {producer.idConflicto2 &&
                <div className="item">
                  <div className="title">
                    Relacion con el Conflicto:
                  </div>
                  <div className="component">
                    {producer.idConflicto2.nombre}
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
              {producer.idEtnia2 &&
                <div className="item">
                  <div className="title">
                    Etnia:
                </div>
                  <div className="component">
                    {producer.idEtnia2.nombre}
                  </div>
                </div>
              }
              {producer.idParentesco2 &&
                <div className="item">
                  <div className="title">
                    parentesco:
                  </div>
                  <div className="component">
                    {producer.idParentesco2.nombre}
                  </div>
                </div>
              }
              {producer.idEtnia2 &&
                <div className="item">
                  <div className="title">
                    Discapacidad:
                  </div>
                  <div className="component">
                    {producer.idEtnia2.nombre}
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